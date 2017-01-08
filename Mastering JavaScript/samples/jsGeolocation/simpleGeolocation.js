function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPositionCallback);
    }
    else {
        alert('Your browser doesn\'t support geolocation');
    }
}

function getCurrentPositionCallback(position) {
    document.getElementById('long').innerHTML = position.coords.longitude;
    document.getElementById('lat').innerHTML = position.coords.latitude;
}