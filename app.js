let map = L.map("map").locate({ setView: true, maxZoom: 13 });
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
navigator.geolocation.getCurrentPosition((geolocation) => {
  L.marker([geolocation.coords.latitude, geolocation.coords.longitude]).addTo(
    map
  );
});
