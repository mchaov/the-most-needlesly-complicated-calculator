const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const packageJson = require("../package.json");

module.exports = [
    // new CopyWebpackPlugin([{ from: "_client/assets" }]),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "main.css",
        // chunkFilename: "[id].css"
    }),
    new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true
    }),
];