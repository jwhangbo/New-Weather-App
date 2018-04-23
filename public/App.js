//  geo weather
function geo() {
    var home = document.getElementById("homeloc");
    var apiKey = "7727724c91d385de32cc9af5b98f52fd";
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        home.innerHTML = "Current location";

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(Math.round((data.currently.temperature-32) * 5 / 9) + '° C');
        $('#summary').html(data.currently.summary);
      });
    }

    function error() {
        home.innerHTML = "Unable to retrieve your location. Please turn on location.";
    }
}

geo();

// Map Window
function theMap() {
    var map = new google.maps.Map(document.getElementById('mapbox'), {
        center: {
            lat: parseInt(document.getElementById("lat").innerHTML),
            lng: parseInt(document.getElementById("lng").innerHTML)
        },
        zoom: 7,
        draggable: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false
    });
}

google.maps.event.addDomListener(window, 'load', theMap);
