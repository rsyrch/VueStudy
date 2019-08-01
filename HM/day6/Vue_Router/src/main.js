import Vue from "vue"
import login from "./login.vue"
// import Vue from "../node_modules/vue/dist/vue.js"

Vue.config.productionTip = false 

var app = new Vue({
    el: "#app",
    // 对于.vue组件,要用render渲染
    // render: function(createElements) {
    //     return createElements(login);
    // }
    // render简写
    render: c => c(login)
});



// import Person from "./test"
// import { ThePet } from "./test"
import Person, { ThePet } from "./test"

console.log(Person)
console.log(ThePet)