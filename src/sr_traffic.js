$(function () {
    'use strict';

    var url = 'http://api.sr.se/api/v2/traffic/messages?pagination=false&size=100&sort=createddate+desc&format=json';

    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function (json) {
            console.log(json);
        },
    });
});
