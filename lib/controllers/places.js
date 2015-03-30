(function () {
    'use strict';

    var googlePlacesService = require('../google-places-service');

    function handler(request, reply) {
        googlePlacesService.search().then(function (results) {
            reply({places: results});
        });
    }

    module.exports = {
        route: {
            method: 'GET',
            path: '/places',
            handler: handler
        }
    };
}());
