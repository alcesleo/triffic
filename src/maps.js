var triffic = triffic || {};

triffic.maps = {}

triffic.maps.load = function () {
    var myLatlng = new google.maps.LatLng(10, 10);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    }
    triffic.maps.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
