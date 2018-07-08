<template>
  <div class="page-container">
    <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
    <p class="success-tip">交易成功</p>
    <p class="success-desc">请在7个工作日内到以下地址自提商品</p>
    <div class="zt-adress">
        <div class="zt-ad-item">
            <div>
              提货地址：
            </div>
            <div>
              广州市天河区建中路77号五度大厦 东塔1201室
            </div>
        </div>
        <div class="zt-ad-item">
          <div>
            联系电话：
          </div>
          <div>
            020-123456789
          </div>
        </div>
      <div class="zt-ad-item">
        <div>
          提货时间：
        </div>
        <div>
          周一至周五 9:00-18:00
        </div>
      </div>
    </div>
    <a class="goto" href="/me.html">查看订单详情></a>
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
  .back{
    position: fixed;
    bottom: 60px;
    right: 23px;
    width: 40px;
    height: 40px;
    background: url(../../assets/image/back-home.png) no-repeat center center/100% 100%;
  }
  .goto{
    color: @fontColor;
    font-size: 15px;
    margin-top: 22px;
  }
  .zt-adress{
      margin: 25px;
      padding: 12px;
      background: #F0F0F0;
      font-size: 14px;
      color: #646464;
      .zt-ad-item{
          display: flex;
      }
  }
</style>
