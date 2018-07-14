<template>
  <div class="balance-container">
    <div class="zhmx" @click="gotoPage('/balanceDetail')">
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
    <div class="tixian-btn" @click="submit">
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
          gotoPage( link ) {
              this.$router.push({
                  path: link
              })
          },
          submit() {
              this.$router.push({
                  path: '/tixiansuc'
              })
          }
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
      background: #ffffff;
      height: 100%;
      font-size: 15px;
  }
  .balance-container{
      text-align: center;
      background: #fff;
      height: 100%;
      padding-top: 12px;
      padding-bottom: 200px;
  }
  .tixian-btn{
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
    margin: 0 12px;
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
