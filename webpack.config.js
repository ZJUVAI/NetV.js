const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
    let watch = false
    if ('watch' in env) {
        if (env['watch'] === 'true') {
            watch = true
        }
    }
    return {
        entry: './src/index.ts',
        mode: 'development',
        devtool: 'inline-source-map',
        output: {
            filename: env['mode'] === 'production' ? 'NetV.min.js' : 'NetV.js',
            library: 'NetV',
            libraryTarget: 'umd',
            libraryExport: 'NetV',
            path: path.resolve(__dirname, 'build')
        },
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
        ],
        watch: watch,
        optimization: {
            minimize: env['mode'] === 'production'
        },
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}
