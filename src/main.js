$(function () {
    'use strict';

    triffic.maps.load();

    triffic.sr.getTrafficData(function (data) {
        data.messages.forEach(function (obj) {
            var latLng = new google.maps.LatLng(obj.latitude, obj.longitude);
            var marker = new google.maps.Marker({
                position: latLng,
                map: triffic.maps.map,
                title: obj.description
            })
        });
    });

});
