var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpack = require('webpack');
const { env } = require('process');
require('dotenv').config({ path: './.env' }); 


module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        hot: true,
        port: 3000,
        before: (app) => {
            app.use(createProxyMiddleware("/graphql",
                {
                    target: process.env.DS_ENDPOINT,
                    changeOrigin: true,
                    secure: false,
                    pathRewrite: { '/graphql': '' }
                }));
        },
        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.env']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }
            ,
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                },
            ],
        }
            ,
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