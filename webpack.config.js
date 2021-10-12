var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

const filenameF = (ext) => { return 'bundle.[contenthash].' + ext };

module.exports = {
    entry: './src/index.tsx',
    cache: true,
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],

    },
    plugins: [

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // шаблон
            filename: './index.html', // название выходного файла
            minify: {
                collapseWhitespace: true
            }
        }),
        // ...
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    output: {
        path: path.resolve(__dirname, './fn-admin-frontend/static/'),
        filename: "js/" + filenameF('js'),
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }
        ]
    }
};