const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        'box-selection': './box-selection.js',
        'box-selection.min': './box-selection.js'
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
