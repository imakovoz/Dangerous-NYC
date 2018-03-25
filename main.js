import * as d3 from 'd3';
import { createMap } from './create_map';
import { getDataPoints } from './extractor';

document.addEventListener('DOMContentLoaded', function(event) {
  createMap(getDataPoints());
});
