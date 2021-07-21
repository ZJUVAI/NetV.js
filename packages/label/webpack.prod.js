const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        'netv-label': './netv-label.js',
        'netv-label.min': './netv-label.js'
    },
    devtool: 'source-map',
    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
})
