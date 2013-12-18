var triffic = triffic || {};

triffic.maps = {}

triffic.maps.load = function () {
    var myLatlng = new google.maps.LatLng(62, 15);
    var mapOptions = {
        zoom: 6,
        center: myLatlng
    }
    triffic.maps.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
