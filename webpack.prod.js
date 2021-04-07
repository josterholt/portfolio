'use strict'

const {merge} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
})

// config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
// config.plugins.push(new webpack.optimize.UglifyJsPlugin())
