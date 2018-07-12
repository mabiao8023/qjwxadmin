<template>
    <div class="page-container">
        <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
        <p class="success-tip">成功提交打款凭证</p>
        <p class="success-desc">请耐心等待卖家审核！</p>
        <a class="goto" href="/me.html">查看订单详情></a>
        <router-link class="back" :to="{path:'/meIndex'}"></router-link>
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
