<template>
  <div class="page-container">
    <div class="zhmx">
      <div class="zhmx-title">
        账户明细
      </div>
      <div  class="zhmx-arrow">

      </div>
    </div>
    <img class="money-icon" src="../../assets/image/money.png" alt="">
    <p class="current-title">
      当前余额(元)
    </p>
    <p  class="current-money">
      1,000.00
    </p>
    <!-- 提现 -->
    <div class="logout">
      提现
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
  .logout{
    width: 90%;
    margin: 48px auto 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #323232;
    font-size: 17px;
    background: @mainColor;
    border-radius: 5px;
  }
  .zhmx{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 12px;
    background: #F7F7F7;
    border-radius: 5px;
  .zhmx-title{
    color: #323232;
    font-size: 15px;
  }
  .zhmx-arrow{
    width: 8px;
    height: 13px;
    background: url(../../assets/image/more-arrow.png) no-repeat center center/100% 100%;
  }
  }
  .money-icon{
    width: 90px;
    height: 90px;
    margin-top: 44px;

  }
  .current-title{
    color: #323232;
    font-size: 15px;
    margin: 15px auto 10px
  }
  .current-money{
    font-size: 40px;
    color: @fontColor;
  }
</style>
