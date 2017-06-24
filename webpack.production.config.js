'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-final.js',
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        stage: 0,
        plugins: []
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  }
};

if (process.env.HOT) {
    config.devtool = 'eval';
    config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
    config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
    config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
    config.output.publicPath = 'http://localhost:8082/';
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

    // Note: enabling React Transform and React Transform HMR:
    config.module.loaders[0].query.plugins.push([
        'react-transform', {
            transforms: [{
                transform : 'react-transform-hmr',
                imports   : ['react'],
                locals    : ['module']
            }]
        }
    ]);
}

config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = config;