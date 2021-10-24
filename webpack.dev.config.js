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
        // historyApiFallback: true,
        // watchContentBase: true,
        // open: true,
        // compress: true,
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
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
        // //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
        }),
        // new webpack.EnvironmentPlugin({
        //     APP_DEV_URL: "http://localhost:8081/",
        //     APP_OWNER_KEY: "owner-id",
        // }),
        // new webpack.ProvidePlugin({
        //     process: 'process/browser',
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_TLS_REJECT_UNAUTHORIZED': 0
        // }),
        // new webpack.ProvidePlugin({
        //     process: 'process/browser',
        // }),
        // new webpack.EnvironmentPlugin({
        //     NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        //     DEBUG: false,
        // }),

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