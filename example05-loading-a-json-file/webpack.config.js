// webpack.config.js
var path = require('path')
var webpack = require('webpack')
//var UglifyJsPlugin = require('html-uglify-plugin');

module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
