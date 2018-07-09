<template>
    <div class="page-container">
        <div class="main-section">
            <img src="../../assets/image/yqbg.png">
            <div class="btn">
                <img src="../../assets/image/btn-yaoqing.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data () {
            return {
            }
        },
        methods:{
            layer( text ){
                this.$vux.toast.text( text || 'hello', 'middle')
            },
            showLoading(){
                this.$vux.loading.show({
                  text: '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
        },
        mounted() {

        }
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  @import '../../assets/css/reset';
  body{
      background: #E3A216;
      font-size: 15px;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  .main-section{
      width: 100%;
      position: relative;
      .btn{
          position: absolute;
          top: 470px;
          width: 250px;
          left: 50%;
          transform: translate(-50%,0);
      }
  }
</style>
