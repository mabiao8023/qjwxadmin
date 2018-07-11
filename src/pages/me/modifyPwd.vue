<template>
    <div class="page-container">
        <ul class="modify-list">
            <li class="setting-item">
                <div class="setting-title">
                    旧密码
                </div>
              <div class="setting-con">
                <x-input
                  type="password"
                  v-model="pwd"
                  placeholder="请输入旧密码"
                  ></x-input>
              </div>

            </li>
            <li class="setting-item vux-1px-t">
                <div class="setting-title">
                  新密码
                </div>
                <div class="setting-con">
                  <x-input
                    type="password"
                    v-model="pwd"
                    placeholder="请输入新密码"
                  ></x-input>
                </div>
            </li>
            <li class="setting-item vux-1px-t">
              <div class="setting-title">
                确认新密码
              </div>
              <div class="setting-con">
                <x-input
                  type="password"
                  v-model="pwd"
                  placeholder="请输入新密码"
                ></x-input>
              </div>
            </li>
        </ul>
      <!-- 退出登录 -->
      <div class="logout">
          确认修改
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
  .modify-list{
      margin-top: 10px;
      background: #fff;
      padding: 0 12px;
      .setting-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2px 0;
      }
      .setting-con{
          flex: 1;
          color: #323232;
          font-size: 15px;
      }
      .setting-title{
          width: 80px;
          color: #646464;
          font-size: 15px;
      }
  }
    .logout{
        width: 90%;
        margin: 334px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 5px;
    }
</style>
