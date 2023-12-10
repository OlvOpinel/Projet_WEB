var map = L.map('map').setView([48.856614, 2.3522219], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//var marker = L.marker([48.856614, 2.3522219]).addTo(map);

fetch('accident.geojson').then(response => response.json()).then(data => {     // Parcourir chaque feature dans le GeoJSON      data.features.forEach(feature => {  
    // Récupérer les coordonnées de latitude et longitude du point        
var latitude = feature.geometry.coordinates[1];            
var longitude = feature.geometry.coordinates[0];              // Créer un marqueur pour chaque point        
var marker = L.marker([latitude, longitude]).addTo(map);             
if (feature.properties && feature.properties.nom) {          
marker.bindPopup(feature.properties.nom);           
}       
});