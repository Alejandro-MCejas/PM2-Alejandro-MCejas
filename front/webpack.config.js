const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')





module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }]
    },
    plugins: [
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