const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');





module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: './pages/proximosEstrenos.html',
            filename: "proximosEstrenos.html"
        }),
        new HtmlWebpackPlugin({
            template: './pages/trailers.html',
            filename: "trailers.html"
        }),
        new HtmlWebpackPlugin({
            template: './pages/formulario.html',
            filename: "formulario.html"
        })
    ]
}