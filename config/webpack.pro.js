const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins:[
    new CleanWebpackPlugin(
        ['build'], {
            root:path.resolve(__dirname, '../'),
            exclude: ['.datignore', 'dat.json'],
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