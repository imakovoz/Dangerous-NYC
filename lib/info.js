export function info() {
  $('#nav-wrapper').append('<img src="info_icon.png" id="info-icon"/>');
  $('#info-icon').click(() => {
    $('body').prepend(`<div id="info-modal">${information}</div>`);
    $('#info').prepend(`<h1 id="info-header">Dangerous NYC</h1>`);
    $('#info').append(`<h3 id="info-header">By: Ilya Makovoz</h3>`);
    $('#info').append(
      `<div id="info-desc">  The purpose of this app is to help visualize NYC crash data as made available by Open NYC. This app utilizes Google Maps API and the Heatmap visualization library they provide. This is primarily due to rendering constraints surrounding the 40,000+ datapoints used that prevent efficient rendering utilizing the canvas and D3 library. To provide seamless control jquery sliders have been implemented allowing filtering of time and date. Data retrieval has a buffer loading of two seconds for a more seamless browsing experience.</div>`
    );
    $('#info').append(
      `<div id="info-desc">Feel free to look at the data set at: https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95</div>`
    );
    $('#info').append(
      `<div id="info-desc">  To help determine the most relevant information a few filters have been provided:</div>`
    );
    $('#info').append(`<ul id="info-filters"></ul>`);
    $('#info-filters').append(
      `<li id="filter-desc">Start Time: lower bound of time across all days for data displayed</li>`
    );
    $('#info-filters').append(
      `<li id="filter-desc">End Time: higher bound of time across all days for data displayed</li>`
    );
    $('#info-filters').append(
      `<li id="filter-desc">Start Date: lower bound for date of data displayed</li>`
    );
    $('#info-filters').append(
      `<li id="filter-desc">End Time: higher bound for date of data displayed</li>`
    );
    $('#info-filters').append(
      `<li id="filter-desc">Severity Filter: allows limiting of data to only calculate pedestrian, cyclist, and motorist injuries</li>`
    );
    $('#info').append(
      `<div id="exit">{Press anywhere on the screen to close}</div>`
    );
    $('#info').append(`<div id="info-contact"></div>`);
    $('#info-contact').append(
      `<a href="https://github.com/imakovoz" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" id="social-icon" /></a>`
    );
    $('#info-contact').append(
      `<a href="https://www.linkedin.com/in/imakovoz/" target="_blank"><img src="https://png.icons8.com/metro/1600/linkedin.png" id="social-icon" /></a>`
    );
    $('#info-contact').append(
      `<a href="https://imakovoz.github.io/" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/rounded-white-basic-ui/139/Profile01-RoundedWhite-512.png" id="social-icon" /></a>`
    );
    $('#info-modal').click(() => {
      console.log('test');
      $('#info-modal').remove();
    });
  });
  $('#info-icon').hover(
    () => {
      $('#info-icon').attr('src', 'info_icon1.png');
    },
    () => {
      $('#info-icon').attr('src', 'info_icon.png');
    }
  );
}

const information = '<div id="info" />';
