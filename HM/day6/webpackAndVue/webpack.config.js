const path = require('path');
const webpack = require("webpack");
//内存中生成首页,自动将bundle.js导入
var htmlWebpackPlugin = require("html-webpack-plugin")
let config = {
    mode: 'none',
    // 入口文件
    entry: {
        main: path.join(__dirname, './src/main.js')
    },
    // 输出选项
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    // 插件配置节点
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),     // 模板文件路径
            filename: "index.html"      // 模板文件名
        })
    ],
    // 匹配外部文件 例如css
    module: {
        rules: [
            // css匹配
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            // image匹配
            // limit<=图片字节 : 不会转为base64位的字符串,反之转为base64字符串 [name].[ext] 文件名保持原样
            { test: /\.jpg|png|gif|bmp|jpeg$/, use: "url-loader?limit=300000&name=[hash:8]-[name].[ext]" },
            // Babel 转换高级的ES语法
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    }
}
module.exports = config