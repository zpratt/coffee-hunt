(function () {
    'use strict';

    var hapi = require('hapi'),
        hapiReactViews = require('hapi-react-views'),
        util = require('util'),
        fs = require('fs'),
        path = require('path');

    function configureViewEngine(server, viewPath) {
        server.views({
            engines: {
                jsx: hapiReactViews
            },
            compileOptions: {
                renderMethod: 'renderToString'
            },
            path: viewPath
        });
    }

    /*eslint-disable no-sync */
    function addControllers(server) {
        var controllers = fs.readdirSync(path.join(__dirname, './controllers'));

        controllers.forEach(function (controllerPath) {
            var controller = require('./controllers/' + controllerPath);

            server.route(controller.route);
        });
    }
    /*eslint-enable no-sync */

    module.exports = {
        create: function (port) {
            var server = new hapi.Server();

            server.connection({
                port: port
            });

            configureViewEngine(server, path.join(__dirname, '..', 'views'));
            addControllers(server);

            server.start(function () {
                util.log('listening on port: ' + port);
            });
        }
    };
}());
