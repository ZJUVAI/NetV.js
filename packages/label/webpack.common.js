const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './netv-label.js',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.hlsl$/,
                loader: 'raw-loader'
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.m?jsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        '@babel/plugin-proposal-optional-chaining',
                        '@babel/plugin-proposal-nullish-coalescing-operator'
                    ]
                }
            }
        ]
    },
    externals: {
        // loadsh: 'lodash',
        // assert: 'assert',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: {
                source: false
            }
        })
    ]
}
