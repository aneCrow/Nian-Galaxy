const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, '../public/demo');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/bundle.js',
        path: DIST_PATH,
        publicPath: "/Nian-Galaxy/public/demo/"
    },
    plugins: [
        new CleanWebpackPlugin(
            ['demo'], {
                root: path.resolve(__dirname, 'public/'),
                dry: false,
            }),
        new HtmlWebpackPlugin({
            title: 'Nian-Galaxy',
            template: 'public/index.html',
            inject: 'body',
            // minify: {
            //     html5: true
            // },
            hash: true,
            favicon: 'public/favicon.ico'
        }),
    ]
});