/**
 * @jsx React.DOM
 */

'use strict';

var placesRepository = require('./places-repository'),
    IdleMaps = require('idle-maps'),
    React = require('react'),

    GoogleMapsApiMixin = IdleMaps.GoogleMapsApiMixin,
    MapMixin = IdleMaps.MapInstanceMixin,

    OverlayComponent = require('./overlay-component.jsx');

function createOverlays(map, places) {
    return places.map(function (place) {
        return (
            <OverlayComponent point={place.location} map={map} message={place.name} />
        );
    });
}

module.exports = React.createClass({
    mixins: [GoogleMapsApiMixin, MapMixin],
    idle: function (map) {
        var centerPoint = map.getCenter();

        placesRepository.find(centerPoint).then(function (places) {
            var overlayElements = createOverlays(map, places),
                overlayIndex;

            for (overlayIndex = 0; overlayIndex < overlayElements.length; overlayIndex += 1) {
                React.render(overlayElements[overlayIndex], document.createElement('div'));
            }
        });
    }
});
