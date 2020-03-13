const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        proxy: {
            //   "": "https://api.apiopen.top"
        },
        host: "0.0.0",
        contentBase: path.join(__dirname, `/dist`),
        compress: true,
        port: "8099"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, "src")],
                loader: ["babel-loader"]
            },
            {
                test: /\.css?$/,
                include: [path.resolve(__dirname, "src")],
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin()
    ]
};
