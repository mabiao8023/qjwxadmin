<style lang="less" rel="stylesheet/less">
    @import "./assets/css/reset.less"
</style>
<template>
    <div class="com-container">
		<!-- 路由匹配到的组件将渲染在这里 -->
				<router-view></router-view>
	  </div>
</template>
<script>
    export default {
        name: 'app',
        components: {
        },
        data() {
            return {

            }
				},
        mounted(){

        }
    }
</script>
