const path = require("path");
const webpack = require("webpack")

// 内存中生成Html插件
// 自动引入打包好的bundle.js
const html_webpack_plugin = require("html-webpack-plugin");

const VueLoaderPlugin = require('vue-loader/lib/plugin');


let config = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, './src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
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
         }),
         new VueLoaderPlugin()

     ],
     module: {
         // 配置第三方模块加载器,匹配文件, loader从右向左调用
         rules: [
            //  { test: /\.css$/, use: ['style-loader', 'css-loader'] },
             // 匹配vue
             { test: /\.vue$/, use: ['vue-loader']}
         ]
     }

     // 导入Vue模块
    //  resolve: {
    //      alias: {
    //          "vue$": "vue/dist/vue.js"
    //      }
    //  }
}
module.exports = config