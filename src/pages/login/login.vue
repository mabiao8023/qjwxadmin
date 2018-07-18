<template>
    <div>
        <div class="login-header">
          <img class="h-logo" src="../../assets/image/logo.png" alt="">
          <p class="h-title">全家微选创客空间管理系统</p>
        </div>
        <div class="login-group">
            <div>
                <x-input title="账号"
                         required
                         v-model="account"
                         type="tel"
                         placeholder="请输入用户名"
                         keyboard="number"
                         class="vux-1px-b"
                         ref="phoneInput"
                         is-type="china-mobile"
                >
                  <img slot="label"
                       class="label-icon"
                       src="../../assets/image/shoujihao.png">
                </x-input>
            </div>
            <div>
                <x-input title="密码"
                         required
                         type="password"
                         v-model="password"
                         ref="pwdInput"
                         placeholder="请输入密码"
                         class="vux-1px-b"
                >
                      <img slot="label"
                       class="label-icon"
                       src="../../assets/image/password.png">
                </x-input>
            </div>

        </div>
        <div  @click="gotoForgetPwd" class="forget-pwd">
            忘记密码?
        </div>
        <div class="login-btn" @click="login">
            登录
        </div>
    </div>

</template>

<script>
    import { XInput,cookie } from 'vux'
    import api from '../../assets/js/api'
    export default {
        components: {
            XInput,
        },
        data () {
            return {
                /* 18520654081 qwe123 */
                account: '',
                password: ''
            }
        },
        methods:{
            layer( text ){
                this.$vux.toast.text( text || 'hello', 'middle')
            },
            showLoading(text){
                this.$vux.loading.show({
                  text: text || '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            login(){
                if( !this.$refs.phoneInput.valid ){
                  this.layer('请输入正确的手机号')
                }else if( !this.$refs.pwdInput.valid ){
                  this.layer('请输入密码')
                }else{
                    this.showLoading('登录中')
                    this.$http.post( api.login,{
                        account: this.account,
                        password: this.password
                    } ).then( res => {
                        this.hideLoading();
                        if( res.code == 1 ){
                            if( res.data.userinfo.token ){
                                // 本地存储7天的cookie
                                cookie.set('token',res.data.userinfo.token ,{
                                    expires: 7
                                });
                                // 进入个人中心
                                this.$router.push({
                                  path: '/meIndex'
                                })
                            }
                        }
                     }).catch( e => {
                        this.hideLoading();
                    } )
                }
            },
            gotoForgetPwd(){
                this.$router.replace({
                      path: '/forgetPwd'
                })
            }
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '登录';
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
