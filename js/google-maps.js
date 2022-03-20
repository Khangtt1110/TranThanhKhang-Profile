function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.0146429, lng: 105.7615252};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Can Tho, Viet Nam' // Title Location
    });
}

