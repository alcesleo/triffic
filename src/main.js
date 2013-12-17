$(function () {
    'use strict';

    var map;
    function initializeMaps() {
        var mapOptions = {
            center: new google.maps.LatLng(57.7000, 11.9667),
            zoom: 8
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initializeMaps);

    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
      zoom: 4,
      center: myLatlng
    }

    // To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Hello World!"
    });

    function getTrafficData() {

        $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/traffic/messages",
            dataType: "jsonp",
            data: "?pagination=false&size=100&sort=createddate+desc&format=json",
            success: function (json) {
                console.log(json);
            },
        });
    }

});
