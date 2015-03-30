(function () {
    'use strict';

    var path = require('path');

    module.exports = {
        clientContent: path.join(__dirname, '..', 'assets'),
        googlePlacesApiKey: 'your-key',
        googlePlacesIpAddress: 'your-ip'
    };
}());
