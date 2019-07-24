const path = require("path");
const webpack = require("webpack")

// 内存中生成Html插件
// 自动引入打包好的bundle.js
const html_webpack_plugin = require("html-webpack-plugin");


let config = {
    mode: "none",
    // 入口文件
    entry: {
        main: path.join(__dirname, "./src/main.js")
    },
    output: {
        // 输出文件(打包后文件内的目录)
        filename: "[name].bundle.js",
        path: path.join(__dirname, "./dist")
    },
    devServer: {
       // 配置dev-server命令参数的第二种方式
        open: true,             // 自动运行浏览器
        port: 8000,             // 启动端口
        contentBase: "src",     // 托管根目录
        hot: true               // 热加载
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new html_webpack_plugin({
            template: path.join(__dirname, "./src/index.html"),     // 模板页面
            filename: "index.html"                                  // 生成页面名称
        })
    ],
    module: {
        // 配置第三方模块加载器,匹配文件, loader从右向左调用
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.png$/, use: []}
        ]
    }
};

module.exports = config