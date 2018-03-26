export function createMap(data) {
  var map, heatmap;

  function initMap(data) {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: { lat: 40.7128, lng: -74.006 },
      mapTypeId: 'satellite',
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
      data,
      map: map,
      radius: 15,
      maxIntensity: 25,
    });
  }

  initMap(data);
}
