<template>
    <div class="page-container">
        <div class="header">
            欢迎注册成为我司创客，请您务必认真填写以下信息
        </div>
        <ul class="input-list">
            <li class="input-item vux-1px-b">
                <div class="title">
                    推荐人
                </div>
                <div class="input">
                    <x-input
                      v-model="tjname"
                      placeholder="请输入推荐人姓名"
                    ></x-input>
                </div>
            </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *真实信息
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请填写真实姓名"
              ></x-input>
            </div>
          </li>
          <li class="input-item vux-1px-b">
              <div class="title">
                *电话
              </div>
              <div class="input">
                <x-input
                  v-model="tjname"
                  placeholder="请填写真实电话(登录账号使用)"
                ></x-input>
              </div>
          </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *验证码
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请输入验证码"
              ></x-input>
            </div>
            <div class="code" v-if="false">
                获取验证码
            </div>
            <div class="code disable">
               重发(16s)
            </div>
          </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *密码
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请输入密码"
              ></x-input>
            </div>
          </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *确认密码
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请再次输入密码"
              ></x-input>
            </div>
          </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *支付宝
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请填写用姓名实名的支付宝账号"
              ></x-input>
            </div>
          </li>
          <li class="input-item vux-1px-b">
            <div class="title">
              *微信号
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请填写真实微信号"
              ></x-input>
            </div>
          </li>
          <li class="input-item">
            <div class="title">
              邮箱
            </div>
            <div class="input">
              <x-input
                v-model="tjname"
                placeholder="请填写邮箱"
              ></x-input>
            </div>
          </li>
        </ul>
        <div class="logout">
            提交申请
        </div>
    </div>
</template>

<script>
    import {  XInput } from 'vux'
    export default {
        components: {
            XInput
        },
        data () {
            return {
                tjname: ''
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
      background: #EEEEEE;
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
  .header{
      background: #fff;
      color: #F52C2C;
      font-size: 15px;
      padding: 13px 15px;
      margin-bottom: 10px;
  }
  .input-list{
      padding: 0 17px;
      background: #fff;
      .input-item{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title{
              width: 70px;
              color: #323232;
          }
          .input{
              flex: 1;
          }
          .code{
              line-height: 30px;
              background: @mainColor;
              text-align: center;
              color: #323232;
              border-radius: 15px;
              padding: 0 9px;
              font-size: 14px;
          }
          .disable{
              background: #C5C5C5;
              color: #fff;
          }
      }
  }
  .logout{
      width: 90%;
      margin: 91px auto 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: #323232;
      font-size: 17px;
      background: @mainColor;
      border-radius: 22px;
  }
</style>
