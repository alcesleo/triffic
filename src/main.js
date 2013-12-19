$(function () {
    'use strict';

    // show the map
    triffic.maps.load();

    // Put in the traffic markers
    triffic.sr.getTrafficData(triffic.maps.refresh);

});
