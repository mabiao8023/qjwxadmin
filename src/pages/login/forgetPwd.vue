<template>
    <div>
        <div class="progress">
            <div class="step1 step"
                :class="{'active': step == 1 }"
            >
                <div class="step-line step1-line">
                </div>
                <div class="step-circle">
                    <span>1</span>
                </div>
                <div class="step-titel">
                    输入手机号
                </div>
            </div>
            <div class="step2 step"
                 :class="{'active': step == 2 }"
            >
                <div class="step-line">
                </div>
                <div class="step-circle">
                    <span>2</span>
                </div>
                <div class="step-titel">
                    输入新密码
                </div>
            </div>
            <div class="step3 step"
                 :class="{'active': step == 3 }"
            >
                <div class="step-line step3-line">
                </div>
                <div class="step-circle">
                    <span>3</span>
                </div>
                <div class="step-titel">
                    修改成功
                </div>
            </div>
        </div>
        <div class="input-phone" v-if="step == 1">
            <div class="phone">
                <x-input
                    required
                    v-model="phone"
                    is-type="china-mobile"
                    type="tel"
                    ref="phoneInput"
                    placeholder="请输入手机号"
                ></x-input>
            </div>
            <div class="code">
                <div class="input-code">
                    <x-input
                        required
                        v-model="code"
                        ref="codeInput"
                        placeholder="请输入验证码"
                    ></x-input>
                </div>
                <div class="send-btn vux-1px-l"
                     v-if="!isSendCoding"
                     @click="sendCode"
                >获取验证码</div>
                <div class="send-btn already-send vux-1px-l" v-else>
                    已发送(<countdown v-model="time" :start="isSendCoding" @on-finish="finish"></countdown>)
                </div>
            </div>
            <div class="next-step" @click="verPhoneStep()">
                下一步
            </div>
        </div>
        <!-- 修改密码 -->
        <div class="input-phone" v-if="step == 2">
            <div class="phone">
                  <x-input
                      required
                      v-model="password"
                      ref="pwdInput"
                      :type="togglePwd ? 'password' : 'text'"
                      placeholder="请输入密码"
                  >
                  </x-input>
            </div>
            <div class="next-step" @click="pwdSubmit()">
               确认修改
            </div>
            <div class="toggle-pwd" v-if="password.length">
                <img
                  class="hide-img"
                  v-if="!togglePwd"
                  @click.stop.prevent="togglePwd = !togglePwd"
                  src="../../assets/image/password-hide.png"
                />
                <img
                  v-else
                  class="show-img"
                  @click.stop.prevent="togglePwd = !togglePwd"
                  src="../../assets/image/password-show.png"
                />
            </div>
        </div>
        <!-- 修改成功去登陆 -->
        <div class="modify-suc" v-if="step == 3">
            <img class="suc-icon" src="../../assets/image/success-icon.png" alt="">
            <p class="suc-tip">恭喜您！修改成功</p>
            <router-link class="go-login"
                         :to="{path:'/login'}">去登陆>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { Group, XInput, Countdown  } from 'vux'
    export default {
        components: {
            XInput,
            Group,
            Countdown
        },
        data () {
            return {
                name: '',
                pwd: '',
                phone: '',
                code: '',
                password: '',
                togglePwd: true,
                step: 1,
                time: 90,
                start: true,
                isSendCoding: false
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
            verPhoneStep(){
                if( !this.$refs.phoneInput.valid ){
                    this.layer('请输入正确的手机号')
                }else if( !this.$refs.codeInput.valid ){
                    this.layer('请输入验证码')
                }else{
                    this.step = 2;
                }
            },
            pwdSubmit(){
                this.step = 3;
            },
            finish(){
                this.isSendCoding = false;
                this.time = 90;
            },
            sendCode(){
                this.isSendCoding = true;
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/css/common.less";
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
 /* @import '../../assets/css/reset';*/
  body{
      background: #fff;
      font-size: 15px;
  }
  /* 进度提示条 */
  .progress{
      display: flex;
      padding: 30px 30px;
      font-size: 0;
      .step{
          position: relative;
          width: 33.33%;
          &.active{
              .step-line{
                  background: @mainColor;
              }
              .step-circle{
                  background: @mainColor;
              }
              span{
                  background: @mainColor;
              }
          }
      }
      .step-line{
          height: 6px;
          background: #D8D8D8;
      }
      .step-circle{
          width: 30px;
          height: 30px;
          margin: 0 auto;
          margin-top: -17px;
          line-height: 30px;
          text-align: center;
          border-radius: 50%;
          background: #D8D8D8;
          color: #fff;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
              display: block;
              width: 26px;
              height: 26px;
              line-height: 26px;
              text-align: center;
              background: #bbb;
              border-radius: 50%;
          }
      }
      .step-titel{
          margin-top: 8px;
          text-align: center;
          color: #909090;
          font-size: 15px;
      }
      .step1-line{
          border-bottom-left-radius: 3px;
          border-top-left-radius: 3px;
      }
      .step3-line{
          border-bottom-right-radius: 3px;
          border-top-right-radius: 3px;
      }

  }
  /* 输入手机号 */
  .input-phone{
      padding: 10px;
      .phone{
          width: 100%;
          height: 47px;
          background: #F7F7F7;
          font-size: 17px;
          border-radius: 3px;
      }
      .code{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          font-size: 17px;
          height: 47px;
          background: #F7F7F7;
          border-radius: 3px;
          .send-btn{
              width: 100px;
              text-align: center;
              /*padding: 0 8px;*/
              line-height: 30px;
              color: @fontColor;
          }
          .already-send{
              color: #999;
          }
      }
  }
  /* 下一步 */
  .next-step{
      width: 330px;
      margin: 30px auto;
      line-height: 46px;
      background: @mainColor;
      text-align: center;
      font-size: 18px;
      color: #323232;
      border-radius: 23px;
  }
  /* 切换密码显示与否 */
  .toggle-pwd{
      padding: 0 23px;
      text-align: right;
      .hide-img{
          width: 22px;
          height: 10px;
      }
      .show-img{
        width: 22px;
        height: 16px;
      }
  }
  /* 修改密码成功 */
  .modify-suc{
      padding-top: 133px;
      text-align: center;
      .suc-icon{
          width: 59px;
          height: 59px;
      }
      .suc-tip{
          margin: 5px 0;
          font-size: 21px;
          color: #323232;
      }
      .go-login{
          font-size: 18px;
          color: @fontColor;
          margin: 5px 0;
      }
  }

</style>
