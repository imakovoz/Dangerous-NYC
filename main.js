import * as d3 from 'd3';
import { createMap, renderMap } from './lib/create_map';
import { getDataPoints } from './lib/extractor';
import { info } from './lib/info';
import { slider } from './lib/slider';

window.updateMap = updateMap;
window.bufferLoad = bufferLoad;

let map = null;
document.addEventListener('DOMContentLoaded', function(event) {
  info();
  $('#info-icon').click();
  slider();
  createMap(getDataPoints());
});

function bufferLoad() {
  if (window.timer) {
    clearTimeout(window.timer);
    window.timer = setTimeout(updateMap, 2000);
  } else {
    window.timer = setTimeout(updateMap, 2000);
  }
}

function updateMap() {
  var dateFormat = require('dateformat');
  var filter = document.getElementById('filter-input').value;
  var s_time = document.getElementById('s_time').value;
  var e_time = document.getElementById('e_time').value;
  var s_date = dateFormat(document.getElementById('s_date').value, 'm/d/yy');
  var e_date = dateFormat(document.getElementById('e_date').value, 'm/d/yy');
  createMap(getDataPoints({ filter, s_time, e_time, s_date, e_date }));
}
