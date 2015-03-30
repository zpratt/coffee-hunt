(function () {
    'use strict';

    var request = require('request'),
        config = require('config'),

        API_KEY = config.googlePlacesApiKey,
        USER_IP = config.googlePlacesIpAddress,
        API_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=' + API_KEY + '&userIp=' + USER_IP;

    function transformResults(results) {
        return results.map(function (result) {
            return {
                location: result.geometry.location,
                name: result.name,
                rating: result.rating,
                address: result.vicinity,
                placeId: result.place_id,
                icon: result.icon
            };
        });
    }

    module.exports = {
        search: function (fromLocation) {
            var location = fromLocation;

            return new Promise(function (resolve, reject) {
                var URI = API_ENDPOINT + '&' + 'location=' + location + '&radius=5000&keyword=coffee';

                request.get({url: URI, json: true}, function (err, response, body) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(transformResults(body.results));
                    }
                });
            });
        }
    };
}());
