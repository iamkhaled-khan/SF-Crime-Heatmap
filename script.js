var map = L.map('map').setView([37.7, -122.4], 10.5);

  // load a tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
	maxZoom: 20
}).addTo(map);


$.getJSON('https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson', function(data) {
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});
// make it so the heatmap becomes points at a certain zoom scale
// hint: https://gis.stackexchange.com/questions/258515/show-hide-markers-depending-on-zoom-level