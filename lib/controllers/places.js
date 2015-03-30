(function () {
    'use strict';

    var googlePlacesService = require('../google-places-service'),

        types = require('joi');

    function handler(request, reply) {
        var searchPoint = request.query.location;

        googlePlacesService.search(searchPoint).then(function (results) {
            reply({places: results});
        });
    }

    module.exports = {
        route: {
            method: 'GET',
            path: '/places',
            config: {
                validate: { query: { location: types.string() } },
                handler: handler
            }
        }
    };
}());
