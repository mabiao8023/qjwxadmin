<template>
    <div>
        <div class="logo">
          <img src="http://wxy.jyeg.com/static/front/index/img/logo_2.png" alt="">
        </div>
        <group class="login-group">
           <x-input title="账号"
                    required
                    v-model="name"
                    placeholder="请输入用户名"
           ></x-input>
           <x-input title="密码"
                    required
                    type="password"
                    v-model="pwd"
                    placeholder="请输入密码"
           ></x-input>
        </group>
      <a href="/forgetPwd.html" class="forget-pwd">
          忘记密码?
      </a>
      <div class="login-btn">
          登录
      </div>
    </div>

</template>

<script>
    import { Group, XInput  } from 'vux'
    export default {
        components: {
            XInput,
            Group
        },
        data () {
            return {
                name: '',
                pwd: ''
            }
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
      font-size: 26px;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  .login-group{
      padding: 30px;
      border-top: none;
  }
  .logo{
      padding: 100px;
  }
  .forget-pwd{
    display: block;
    text-align: right;
    font-size: 26px;
    padding-right: 40px;
    text-decoration: underline;
  }
  .login-btn{
      width: 680px;
      height: 88px;
      line-height: 88px;
      text-align: center;
      font-size: 28px;
      color: #fff;
      border-radius: 10px;
      background: #2368CB;
      margin: 40px auto;
      border: none;
  }
</style>
