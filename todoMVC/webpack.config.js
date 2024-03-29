const path = require("path");
const openBrowser=require("open-browser-webpack-plugin");
const htmlPlugin= require("html-webpack-plugin");



module.exports = {
    // 指定构建环境
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        //基础路径
        contentBase:"./dist",
        host: '0.0.0.0',
        port:8080,
        progress:true
    }
}