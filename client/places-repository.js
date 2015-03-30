/**
 * @jsx React.DOM
 */

'use strict';

var superagent = require('superagent');

function getPlaces(searchPoint) {
    return new Promise(function (resolve, reject) {
        superagent
            .get('/places')
            .query({location: searchPoint.lat() + ',' + searchPoint.lng()})
            .type('json')
            .end(function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.body.places);
                }
            });
    });
}

module.exports = {
    find: getPlaces
};
