var map = L.map('map').setView([25.686768, -100.319040], 11);

// L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

var base = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var wg1 = L.marker([25.72812478285864, -100.21333125115115]).bindPopup("Citadel");
    wg2 = L.marker([25.73273503963824, -100.40063326668141]).bindPopup("Cumbres");
    wg3 = L.marker([25.669519902760793, -100.33420947101341]).bindPopup("Citica");
    uanl1 = L.marker([25.730419894989033, -100.31286827718644]).bindPopup('Ciudad Universitaria');
    uanl2 = L.marker([25.692065024901506, -100.34954805290958]).bindPopup('Salud');
    uanl3 = L.marker([25.702666581123026, -100.27846655550282]).bindPopup('Mederos?');

var universidades = L.layerGroup([uanl1,uanl2,uanl3]);
var worldgym = L.layerGroup([wg1,wg2,wg3]);

var overlayMark = {
  "UANL": universidades,
  "World Gym": worldgym
}

var layerControl = L.control.layers(overlayMark).addTo(map);

// var geo = new L.GeoJSON.AJAX("monterey.geojson");
// geo.addTo(map);


fetch('monterrey.geojson')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var mty = L.geoJSON(data.features, {
      style: {
        color: 'blue',
        fillColor: '#ffffff',
        fillOpacity: 0.2
      }
    });
    mty.addTo(map);
    map.fitBounds(mty.getBounds());
  })

 
// TEST DE IMAGEN | IMAGEN MUY GRANDE
var imageUrl = 'foto5.png',
    imageBounds = [[25.696315,-100.273014], [25.692045,-100.266903]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var img_new = L.marker([25.696315,-100.273014], [25.692045,-100.266903]).bindPopup("ppp").addTo(map);

var imageUrl2 = 'foto_Test2.png',
    imageBounds2 = [[25.735443,-100.318744], [25.719559,-100.303911]];
L.imageOverlay(imageUrl2, imageBounds2).addTo(map);

var img_new2 = L.marker([25.736075,-100.320327], [25.718592,-100.303502]).bindPopup("ppp2").addTo(map);


  // var geojsonFilePath = './monterrey.geojson';

// Load the GeoJSON file
// $.getJSON(geojsonFilePath, function(data) {
//   var featureLayer = L.geoJSON(data, {
//     style: {
//       color: 'blue',
//       fillColor: '#ffffff',
//       fillOpacity: 0.2
//     }
//   });

//   // Add featureLayer to the map and fit the map bounds
//   featureLayer.addTo(map);
//   map.fitBounds(featureLayer.getBounds());
// });

  