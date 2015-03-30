(function () {
    'use strict';

    module.exports = {
        entry: './client/index.jsx',
        output: {
            path: 'assets',
            filename: 'app.js',
            chunkFilename: "[id].bundle.js",
            publicPath: '/static/'
        },
        module: {
            loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader'},
                { test: /\.scss$/, loader: "style!css!sass" }
            ]
        },
        externals: {
            //'react': 'React'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
}());
