/** @jsx React.DOM */

var React = require('react'),
    path = require('path');

module.exports = React.createClass({
    render: function () {
        return (
            <html lang="en-US">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <title></title>
                    <link rel="stylesheet" type="text/css" href="/static/main.css" />
                </head>
                <body>
                    <div className="content"></div>
                    <script type="text/javascript" src="/static/app.js"></script>
                </body>
            </html>
        );
    }
});
