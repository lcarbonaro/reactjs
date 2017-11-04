const path = require("path");
const webpack = require('webpack'); // to access built in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            use: "babel-loader"
        }]
    },

    // added for routing to work
    devServer: {
        historyApiFallback: true
    },

    plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html"
    })]
};
