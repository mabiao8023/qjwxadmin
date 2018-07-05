<template>
    <div class="page-container">
        <div class="p-title">
            提现至: 微信账户
        </div>
      <div class="zhmx">
          <div class="zhmx-title">
                账户
          </div>
          <div  class="zhmx-arrow">
                LanseXueZhe
          </div>
      </div>
      <div class="input-money vux-1px-b">
          <x-input
            label-width="30px"
            title="￥"
            v-model="money"
            placeholder="最多可提取1000.00"
          ></x-input>
      </div>
      <!-- 提现 -->
      <div class="logout">
          提交
      </div>
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
              money: ''
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
      padding-left: 44px;
      margin: 12px;
      background: #F7F7F7 url(../../assets/image/wechat.png) no-repeat 12px center/25px 20px;
      border-radius: 5px;
      .zhmx-title{
          color: #323232;
          font-size: 15px;
      }
      .zhmx-arrow{
          color:#8D9FA7;
      }
  }
  .p-title{
      color: #323232;
      font-size: 15px;
      font-weight: bold;
      padding-top: 16px;
  }
  .input-money{
      font-size: 20px;
      margin: 12px;
      .weui-cell{
          padding: 10px;
      }
  }


</style>
