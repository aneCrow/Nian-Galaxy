const path = require('path');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../build');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
    entry: {
        app: path.join(SRC_PATH, 'index.tsx'),
        vendor: [
            'react-redux',
            'redux',
            '@beaker/webdb',
            '@material-ui/core'
        ],
    },
    output: {
        filename: 'js/bundle.js',
        path: DIST_PATH,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }

            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['build'], {
                root:path.resolve(__dirname, '../'),
                exclude: ['.datignore', 'dat.json'],
                dry: true,
            }),
        new CheckerPlugin(),
        // new ExtractTextPlugin('styles.css'),
    ],
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 2,
            maxInitialRequests: 2,
            cacheGroups: {
                vendor: {
                    test: 'vendor',
                    name: 'vendor'
                }
            }
        }
    }
};