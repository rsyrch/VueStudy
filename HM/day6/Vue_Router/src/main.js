import Vue from "vue"
import VueRouter from "vue-loader"
import tseApp from "./app"
import login from "./componemts/login"
import register from "./componemts/register"

// 安装路由功能
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
    routes: [
        {path: "/login", component: login},
        {path: "/register", component: register}
    ]
});

var app = new Vue({
    el: "#app",
    render: c=> c(tseApp),
    router: router
});