const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    entry: "./src/index.ts",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
    },
    node: {
        fs: "empty",
    },
    externals: {
        // loadsh: 'lodash',
        // assert: 'assert',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: true,
            statsOptions: {
                source: false,
            },
        }),
    ],
}
