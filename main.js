import * as d3 from 'd3';
import { createMap, renderMap } from './lib/create_map';
import { getDataPoints } from './lib/extractor';
import { info } from './lib/info';

window.updateMap = updateMap;
let map = null;
document.addEventListener('DOMContentLoaded', function(event) {
  info();
  createMap(getDataPoints());
});

function updateMap() {
  var dateFormat = require('dateformat');
  var filter = document.getElementById('filter-input').value;
  var s_time = document.getElementById('s_time').value;
  var e_time = document.getElementById('e_time').value;
  var s_date = dateFormat(document.getElementById('s_date').value, 'm/d/yy');
  var e_date = dateFormat(document.getElementById('e_date').value, 'm/d/yy');

  document.getElementById('s_time').setAttribute('max', `${e_time}`);
  document.getElementById('e_time').setAttribute('min', `${s_time}`);
  document.getElementById('e_date').setAttribute('min', `${s_date}`);
  document.getElementById('s_date').setAttribute('min', `${e_date}`);

  createMap(getDataPoints({ filter, s_time, e_time, s_date, e_date }));
}
