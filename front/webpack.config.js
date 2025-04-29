const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')





module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        })
    ]
}