<template>
    <div>
        <h1>登录组件</h1>
        <h4>{{ message }}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 12345
        }
    },
    methods: {
        show: function() {
            console.log("调用了show方法");
        }
    }
}
</script>

<style>

</style>


