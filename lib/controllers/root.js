(function () {
    'use strict';

    function handler(request, reply) {
        reply.view('index', {title: 'Coffee near me'});
    }

    module.exports = {
        route: {
            method: 'GET',
            path: '/',
            handler: handler
        }
    };
}());
