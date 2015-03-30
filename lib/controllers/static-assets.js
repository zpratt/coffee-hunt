(function () {
    'use strict';

    var config = require('config'),
        staticAssetPath = config.clientContent;

    module.exports = {
        route: {
            path: '/static/{static*}',
            method: 'GET',
            config: {
                handler: {
                    directory: {
                        path: staticAssetPath
                    }
                }
            }
        }
    };
}());
