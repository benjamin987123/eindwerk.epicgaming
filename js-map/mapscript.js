let map = L.map('map').setView([51.230148, 4.416118], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let customIcon = L.icon({
    iconUrl: 'assets/image/logo.webp',
    iconSize: [32, 32], // Grootte van de afbeelding
    iconAnchor: [16, 32], // Verankering van het icoon, meestal het midden onderaan
    popupAnchor: [0, -32] // Verankering van het popup-venster, meestal het midden bovenaan
});

let marker = L.marker([51.230148, 4.416118], { icon: customIcon });

marker.on('add', function () {
    let img = this._icon;
    img.style.borderRadius = '50%'; // Dit is waar de afgeronde hoeken worden toegepast
});

marker.addTo(map);
