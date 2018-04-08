const DEFAULT = {
  s_time: 0,
  e_time: 1440,
  s_date: 6316,
  e_date: 6682,
  filter: 'all',
};

export function getDataPoints(opts = {}) {
  if (opts.filter) {
    opts.s_time = convertTime(opts.s_time);
    opts.e_time = convertTime(opts.e_time);
    opts.s_date = convertDate(opts.s_date);
    opts.e_date = convertDate(opts.e_date);
  }
  opts = Object.assign(DEFAULT, opts);
  let data = null;
  $.ajax({
    url: 'NYCMVC.json',
    async: false,
    dataType: 'json',
    success: function(json) {
      data = json.features.reduce((result, el) => {
        if (filter(el.properties, opts)) {
          result.push({
            location: new google.maps.LatLng(
              el.geometry.coordinates[1],
              el.geometry.coordinates[0]
            ),
            weight: severityScore(el.properties, opts.filter),
          });
          return result;
        }
        return result;
      }, []);
    },
  });
  return data;
}

function filter(obj, filter) {
  const time = convertTime(obj.time);
  const date = convertDate(obj.date);
  return (
    time >= filter.s_time &&
    time <= filter.e_time &&
    date >= filter.s_date &&
    date <= filter.e_date
  );
}

function severityScore(obj, filter) {
  if (filter === 'all') {
    return parseInt(obj.pi) + parseInt(obj.pk) * 10;
  } else if (filter === 'cyc') {
    return parseInt(obj.cyci) + parseInt(obj.cyck) * 10;
  } else if (filter === 'mot') {
    return parseInt(obj.mi) + parseInt(obj.mk) * 10;
  } else if (filter === 'ped') {
    return parseInt(obj.pedi) + parseInt(obj.pedk) * 10;
  }
}

function convertTime(time) {
  return time.split(':').reduce((total, el, i) => {
    if (i === 0) {
      return total + parseInt(el) * 60;
    } else {
      return total + parseInt(el);
    }
  }, 0);
}

function convertDate(date) {
  return date.split('/').reduce((total, el, i) => {
    if (i === 0) {
      return total + parseInt(el) * 31;
    } else if (i === 1) {
      return total + parseInt(el);
    } else {
      return total + parseInt(el) * 366;
    }
  }, 0);
}
