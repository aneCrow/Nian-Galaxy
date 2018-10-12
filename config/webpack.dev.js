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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nian-Galaxy',
            template: 'public/index.html',
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
        noInfo: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000,
        // proxy: {
        //     '/': {
        //         target: '/',
        //         bypass: function (req, res, proxyOptions) {
        //             if (req.headers.accept.indexOf('html') !== -1) {
        //                 console.log('Skipping proxy for browser request.');
        //                 return 'index.html';
        //             }
        //         }
        //     }
        // }
    }
});