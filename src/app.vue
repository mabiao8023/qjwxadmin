<style lang="less" rel="stylesheet/less">
    @import "./assets/css/reset";

    body {
        background: #F5F5F5;
        font-size: 15px;
    }

    #app {
        font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
<template>
    <div class="com-container">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'app',
        components: {},
        data() {
            return {}
        },
        mounted(){

        }
    }
</script>
