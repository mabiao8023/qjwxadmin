<template>
    <div>
        <ul class="setting-list">
            <li class="setting-item">
                <div class="setting-title">
                    已绑定手机
                </div>
                <div class="setting-con">
                    13435454646
                </div>
            </li>
            <li class="setting-item vux-1px-t">
                <div class="setting-title">
                  账号等级
                </div>
                <div class="setting-con">
                  创客主管
                </div>
            </li>
        </ul>
        <ul class="setting-list">
          <li class="setting-item" @click="gotoPage('/balance.html')">
            <div class="setting-title">
              账号余额管理
            </div>
            <div class="setting-arrow">

            </div>
          </li>
          <li class="setting-item vux-1px-t" @click="gotoPage('/modifyPwd.html')">
            <div class="setting-title">
                修改登录密码
            </div>
            <div class="setting-arrow">

            </div>
          </li>
        </ul>
      <ul class="setting-list">
        <li class="setting-item">
          <div class="setting-title">
            版本
          </div>
          <div class="setting-con">
              v1.0
          </div>
        </li>
      </ul>
      <!-- 退出登录 -->
      <div class="logout">
           退出登陆
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
              location.href = link;
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
      background: #F5F5F5;
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
  .setting-list{
      margin-top: 10px;
      background: #fff;
      padding: 0 12px;
      .setting-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
      }
      .setting-title{
          color: #323232;
          font-size: 15px;
      }
      .setting-title{
          color: #646464;
          font-size: 15px;
      }
      .setting-arrow{
          width: 8px;
          height: 13px;
          background: url(../../assets/image/more-arrow.png) no-repeat center center/100% 100%;
      }
  }
    .logout{
        width: 90%;
        margin: 234px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 5px;
    }
</style>
