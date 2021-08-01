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
                use: ['css-loader']
            }
        ]
    },
    plugins:[
        new openBrowser({
            url:"http://localhost:8080"
        }),
        new htmlPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        //基础路径
        contentBase:"./dist",
        port:8080,
        progress:true
    }
}