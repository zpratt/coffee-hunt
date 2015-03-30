/**
 * @jsx React.DOM
 */

'use strict';

var MapComponent = require('./map-component.jsx'),

    React = require('react');

function createMap() {
    var mapOptions = {
        center: {
            lat: 41.5913,
            lng: -93.6840
        },
        zoom: 12
    };

    return (
        <MapComponent
            apiKey="AIzaSyDSIvk8etmMk1JvZE38ziW_7S_wWad5qhw"
            apiVersion="3.20"
            mapOptions={mapOptions}
        />
    );
}

function start() {
    var MapElement = createMap();

    React.render(MapElement, document.querySelector('.content'));
}

start();
