function getLocation() {
  const locElement = document.getElementById("location");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      locElement.textContent = `📍 Latitude: ${lat}, Longitude: ${lon}`;
    }, () => {
      locElement.textContent = "Unable to retrieve location.";
    });
  } else {
    locElement.textContent = "Geolocation is not supported.";
  }
}
