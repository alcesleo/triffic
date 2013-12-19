var triffic = triffic || {};

triffic.sr = {};

// http://sverigesradio.se/api/documentation/v2/metoder/trafik.html
triffic.sr.getTrafficData = function(callback, count) {

    // TODO: parseInt
    count = count || 100;

    $.ajax({
        type: "GET",
        url: "http://api.sr.se/api/v2/traffic/messages",
        dataType: "jsonp",
        data: "?pagination=false&size=" + count + "&sort=createddate+desc&format=json",
        success: callback
    });
}

