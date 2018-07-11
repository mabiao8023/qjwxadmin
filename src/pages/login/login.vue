<template>
    <div>
        <div class="login-header">
          <img class="h-logo" src="../../assets/image/logo.png" alt="">
          <p class="h-title">全家微选创客空间管理系统</p>
        </div>
        <div class="login-group">
           <x-input title="账号"
                    required
                    v-model="name"
                    type="tel"
                    placeholder="请输入用户名"
                    class="vux-1px-b"
                    keyboard="number"
                    is-type="china-mobile"
           >
             <img slot="label"
                  class="label-icon"
                  src="../../assets/image/shoujihao.png">
           </x-input>
           <x-input title="密码"
                    required
                    type="password"
                    v-model="pwd"
                    placeholder="请输入密码"
                    class="vux-1px-b"
           >
             <img slot="label"
                  class="label-icon"
                  src="../../assets/image/password.png">
           </x-input>
        </div>
        <router-link :to="{ path: '/forgetPwd' }"  class="forget-pwd">
            忘记密码?
        </router-link>
        <div class="login-btn" @click="login">
            登录
        </div>
    </div>

</template>

<script>
    import { XInput,cookie   } from 'vux'
    export default {
        components: {
            XInput,
        },
        data () {
            return {
                name: '',
                pwd: ''
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
            login(){
                //  this.layer('请输入手机号')
                // 调登录接口
                this.$http.post('/api').then(({data}) => {
                    console.log(data);
                    cookie.set('token',data.token,{
                        expires: 30
                    })
                })
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">
  @import "../../assets/css/common.less";
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  body{
      background: #fff;
      font-size: 15px;
  }
  .login-group{
      padding: 15px;
      border-top: 0;
      font-size: 17px;
      color: #909090;
  }
  .login-header{
      padding: 55px;
      padding-bottom: 0;
      text-align: center;
      .h-logo{
          width: 103px;
          height: 103px;
      }
      .h-title{
        margin-top: 10px;
        font-size: 20px;
        color: #E1B113;
      }
  }
  .label-icon{
      display: block;
      width: 12px;
      height: 17px;
      margin-right: 10px;
  }
  .forget-pwd{
    display: block;
    text-align: right;
    font-size: 17px;
    color: @mainColor;
    padding-right: 20px;
    /*text-decoration: underline;*/
  }

  .login-btn{
      width: 90%;
      line-height: 44px;
      text-align: center;
      font-size: 18px;
      color: #323232;
      border-radius: 5px;
      margin: 10px auto;
      background: @mainColor;
  }
</style>
