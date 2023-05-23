var map = L.map('map').setView([25.686768, -100.319040], 13);

// L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.686768, -100.319040],{color: "red"}).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); 

fetch('monterrey.geojson')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var featureLayer = L.geoJSON(data.features, {
      style: {
        color: 'blue',
        fillColor: '#ffffff',
        fillOpacity: 0.2
      }
    });
    featureLayer.addTo(map);
    map.fitBounds(featureLayer.getBounds());
  })

  