<template>
    <div class="page-container">
        <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
        <p class="success-tip">提交成功</p>
        <p class="success-desc">提现申请已提交，我们将进行1-3个工作日进行审核 届时打入您的微信账户</p>
        <a class="back" href="/me.html"></a>
    </div>

</template>

<script>
    import { XInput   } from 'vux'
    export default {
        components: {
          XInput
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
      background: #fff;
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
  .page-container{
      text-align: center;
  }
  .success-icon{
      width: 65px;
      height: 65px;
      margin: 90px auto 35px;
  }
  .success-tip{
      color: #323232;
      font-size: 20px;
      font-weight: bold;
  }
  .success-desc{
      padding: 12px 30px;
      color: #909090;
      font-size: 14px;
  }
</style>
