var triffic = triffic || {};

triffic.maps = {}

triffic.maps.load = function () {
    var myLatlng = new google.maps.LatLng(62, 15);
    var mapOptions = {
        zoom: 6,
        center: myLatlng
    }
    triffic.maps.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    triffic.maps.infoWindow = new google.maps.InfoWindow();
}

triffic.maps.openInfoWindow = function(marker, content) {
    triffic.maps.infoWindow.setContent(content);
    triffic.maps.infoWindow.open(triffic.maps.map, marker);
};

// category: 0
// createddate: "/Date(1387441031537+0100)/"
// description: "Trafiksignalerna släckta tills vidare"
// exactlocation: "Korsningen Västberga Allé  och Elektravägen"
// id: 1082740
// latitude: 59.29345563562684
// longitude: 18.00631839055037
// priority: 3
// subcategory: "Trafikstörning"
// title: "Västberga"

/**
 * Places a marker on the map with a click event to open an InfoWindow
 * @param  {object} obj options object with latitude, longitude
 */
triffic.maps.placeMarker = function (obj) {

    var latLng = new google.maps.LatLng(obj.latitude, obj.longitude);
    var marker = new google.maps.Marker({
        position: latLng,
        map: triffic.maps.map,
        title: obj.exactlocation,
        details: obj // pass along reference to the original object
    })

    google.maps.event.addListener(marker, 'click', triffic.maps.onMarkerClick);
}

triffic.maps.onMarkerClick = function () {
    triffic.maps.openInfoWindow(this, triffic.maps.getInfoWindowContent(this.details));
}

triffic.maps.getInfoWindowContent = function(obj) {
    return '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">' + obj.exactlocation + '</h1>'+
        '<div id="bodyContent">'+
        '<p>' + obj.description + '</p>' +
        '</div>'+
        '</div>';
}
