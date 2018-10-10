const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['node_modules', 'public']
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router-dom":"ReactRouterDOM",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nian-Galaxy',
            template: 'public/index-dev.html',
            inject: 'body',
            // minify: {
            //     html5: true
            // },
            hash: false,
            favicon: 'public/favicon.ico'
        }),
    ],
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 3000
    }
});