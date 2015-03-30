/**
 * @jsx React.DOM
 */

'use strict';

var superagent = require('superagent');

function getPlaces() {
    return new Promise(function (resolve, reject) {
        superagent
            .get('/places')
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
