const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const pro = require('./webpack.pro');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, '../docs/demo');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(pro ,{
    mode: 'production',
    output: {
        filename: 'js/bundle.js',
        path: DIST_PATH,
        publicPath: "/Nian-Galaxy/docs/demo/"
    },
    plugins: [
        new CleanWebpackPlugin(
            ['demo'], {
                root: path.resolve(__dirname, 'docs/'),
                dry: false,
            }),
    ]
});