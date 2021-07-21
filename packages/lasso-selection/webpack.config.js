const path = require('path')

module.exports = {
    entry: './netv-lasso-selection.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'netv-lasso-selection.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd'
    }
}
