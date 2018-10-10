const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins:[
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