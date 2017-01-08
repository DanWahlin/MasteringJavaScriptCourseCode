function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPositionCallback, errorCallback,
            {maximumAge:60000});
    }
    else {
        alert('Your browser doesn\'t support geolocation');
    }
}

function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED: alert("User did not share geolocation info");
            break;

        case error.POSITION_UNAVAILABLE: alert("Could not detect current position");
            break;

        case error.TIMEOUT: alert("Timed out");
            break;

        default: alert(error.message);
            break;
    }  
}

function getCurrentPositionCallback(position) {
    var coords = position.coords;
    updatePosition('long', coords.longitude);
    updatePosition('lat', coords.latitude);
    updatePosition('altitude', coords.altitude);
    updatePosition('speed', coords.speed);
    updatePosition('accuracy', coords.accuracy);
}

function updatePosition(id, val) {
    document.getElementById(id).innerHTML = val;
}