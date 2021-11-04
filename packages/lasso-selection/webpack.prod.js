const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        'lasso-selection': './lasso-selection.js',
        'lasso-selection.min': './lasso-selection.js'
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
