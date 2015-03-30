/**
 * @jsx React.DOM
 */

'use strict';

var IdleMaps = require('idle-maps'),
    React = require('react'),
    OverlayMixin = IdleMaps.OverlayViewMixin;

//return {
//    location: result.geometry.location,
//    name: result.name,
//    rating: result.rating,
//    address: result.vicinity,
//    placeId: result.place_id,
//    icon: result.icon
//};

module.exports = React.createClass({
    mixins: [OverlayMixin],
    render: function () {
        var overlayStyle = {
            backgroundColor: '#FFF',
            border: '1px solid #000'
        };

        return (
            <div className="overlay-sob" style={overlayStyle}>
                <p>
                    {this.props.message}
                </p>
            </div>
        );
    }
});
