/**
 * Takes care of the google map. It is coupled directly to the objects
 * returned by SR:s Traffic API, most functions use them as parameters
 * for simplicity.
 */

var triffic = triffic || {};
triffic.maps = {}

/**
 * Initialize the map
 */
triffic.maps.load = function () {
    var myLatlng = new google.maps.LatLng(62, 15);
    var mapOptions = {
        zoom: 6,
        center: myLatlng
    }

    triffic.maps.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    triffic.maps.infoWindow = new google.maps.InfoWindow();
    triffic.maps.markers = [];
}

/**
 * Opens the InfoWindow on a marker
 * @param  {google.maps.Marker} marker
 * @param  {string} content HTML
 */
triffic.maps.openInfoWindow = function (marker, content) {
    triffic.maps.infoWindow.setContent(content);
    triffic.maps.infoWindow.open(triffic.maps.map, marker);
};

triffic.maps.closeInfoWindow = function () {
    triffic.maps.infoWindow.close();
}

triffic.maps.refresh = function (data) {
    triffic.maps.clearMarkers();
    data.messages.forEach(function (obj) {
        triffic.maps.placeMarker(obj);
    });
}

/**
 * Remove all markers from map
 */
triffic.maps.clearMarkers = function () {
    // remove all markers from map
    for (var i = 0; i < triffic.maps.markers.length; i++) {
        triffic.maps.markers[i].setMap(null);
    }
    // empty the array
    triffic.maps.markers.length = 0;
    triffic.maps.closeInfoWindow();
}

triffic.maps.showCategory = function (category) {
    // close infowindow so it won't sit on an empty space
    triffic.maps.closeInfoWindow();

    triffic.maps.markers.forEach(function (marker) {
        if (category < 0) {
            // set all to visible
            marker.setVisible(true);
        } else {
            // set markers in category to visible
            marker.setVisible(category === marker.details.category)
        }
    });
}

/**
 * Places a marker on the map with a click event to open an InfoWindow
 */
triffic.maps.placeMarker = function (obj) {

    var latLng = new google.maps.LatLng(obj.latitude, obj.longitude);
    var marker = new google.maps.Marker({
        position: latLng,
        map: triffic.maps.map,
        title: obj.exactlocation,
        details: obj // pass along reference to the original object
    })

    // add to marker array and listen to clicks
    triffic.maps.markers.push(marker);
    google.maps.event.addListener(marker, 'click', triffic.maps.onMarkerClick);
}

triffic.maps.onMarkerClick = function () {
    triffic.maps.openInfoWindow(this, triffic.maps.getInfoWindowContent(this.details));
}

/**
 * Get HTML to put in InfoWindow
 */
triffic.maps.getInfoWindowContent = function (obj) {
    return '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">' + obj.title + '</h1>'+
        '<div id="bodyContent">'+
        '<p>' + obj.exactlocation + '</p>' +
        '<p>' + obj.description + '</p>' +
        '<p>Date: ' + new Date(parseInt(obj.createddate.substr(6))) + '</p>' +
        '<p>Underkategori: ' + obj.subcategory + '</p>' +
        '</div>'+
        '</div>';
}
