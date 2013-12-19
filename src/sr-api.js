var triffic = triffic || {};

triffic.sr = {};

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

triffic.sr.category = {
    0: 'Vägtrafik',
    1: 'Kollektivtrafik',
    2: 'Planerad störning',
    3: 'Övrigt'
}

