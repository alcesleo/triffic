$(function () {
    'use strict';

    // show the map
    triffic.maps.load();

    $('.traffic-category-picker').click(function () {
        var category = $(this).data('category');
        triffic.maps.showCategory(category);
    });

    // Put in the traffic markers
    triffic.sr.getTrafficData(triffic.maps.refresh);

});
