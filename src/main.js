$(function () {
    'use strict';

    // show the map
    triffic.maps.load();

    // put markers on the map
    function plotMarkers (data) {
        data.messages.forEach(function (obj) {
            triffic.maps.placeMarker(obj);
        });
    }

    // Put in the traffic markers
    triffic.sr.getTrafficData(plotMarkers);

});
