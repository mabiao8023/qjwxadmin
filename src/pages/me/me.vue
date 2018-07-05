<template>
    <div>
          <div class="header">
              <div class="avatar">
                  <img class="avatar-img" src="../../assets/image/logo.png" alt="">
              </div>
              <p class="nickname">李银河</p>
              <div class="job-title">
                  创客主管
              </div>
              <a href="/setting.html" class="setting"></a>
          </div>
          <!--余额和结算-->
          <div class="me-money">
                <div class="yuen">
                    <p class="money-title">余额(元)</p>
                    <p class="money-num">4970.00</p>
                </div>
                <div class="jiesuan">
                    <p class="money-title">待结算(元)</p>
                    <p class="money-num">4970.00</p>
                </div>
          </div>
          <!-- 九宫格 -->
          <div class="me-list">
              <a href="" class="me-item vux-1px-b">
                  <img src="../../assets/image/shangcheng.png" alt="">
                  <p>内购商城</p>
              </a>
              <a href="" class="me-item vux-1px-b vux-1px-l">
                <img src="../../assets/image/dingdan.png" alt="">
                <p>订单管理</p>
              </a>
              <a href="" class="me-item vux-1px-b vux-1px-l">
                <img src="../../assets/image/yeji.png" alt="">
                <p>我的业绩</p>
              </a>
              <a href="" class="me-item vux-1px-b vux-1px-l">
                <img src="../../assets/image/fahuo.png" alt="">
                <p>发货管理</p>
              </a>
            <a href="" class="me-item">
              <img src="../../assets/image/daili.png" alt="">
              <p>邀请创客</p>
            </a>
            <a href="" class="me-item vux-1px-l">
              <img src="../../assets/image/shenhe.png" alt="">
              <p>创客管理</p>
            </a>
            <a href="" class="me-item vux-1px-l">
              <img src="../../assets/image/shouquan.png" alt="">
              <p>授权合同</p>
            </a>
            <a href="" class="me-item vux-1px-l">
              <img src="../../assets/image/yaoqing.png" alt="">
              <p>邀请关系网</p>
            </a>
          </div>
    </div>

</template>

<script>
    import { Group, XInput,XButton   } from 'vux'
    export default {
        components: {
            XInput,
            Group,
            XButton
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
  .header{
      width: 100%;
      height: 167px;
      position: relative;
      text-align: center;
      padding: 16px;
      background: url(../../assets/image/bj-me.png) no-repeat center center/100% 100%;
      .avatar{
          width: 68px;
          height: 68px;
          margin: 0 auto;
          border-radius: 50%;
          box-shadow: 1px 2px 10px rgba(0,0,0,.5);
          overflow: hidden;
      }
      .nickname{
          margin: 8px auto;
          line-height: 1.2;
          font-size: 18px;
          color: #6E4E03;
      }
      .job-title{
          width: 80px;
          height: 22px;
          margin: 0 auto;
          line-height: 22px;
          border-radius: 11px;
          color: #fff;
          text-align: center;
          background: #DE972C;
          font-size: 15px;
      }
      .setting{
          position: absolute;
          width: 24px;
          height: 24px;
          top: 20px;
          right: 20px;
          background: url(../../assets/image/setting.png) no-repeat center center/100% 100%;
      }
  }
  /* 余额和结算 */
  .me-money{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 75px;
      text-align: center;
      background:linear-gradient(-98.6deg,rgba(254,184,54,1),rgba(255,199,76,1));
      padding: 12px 0;
      .yuen{
          width: 50%;
          border-right: 1px solid #DDA32A;
      }
      .jiesuan{
          width: 50%;
      }
      .money-title{
          font-size: 14px;
          color: #B68018;
      }
      .money-num{
          font-size: 18px;
          color: #6E4E03;
      }
  }
  /* 九宫格 */
  .me-list{
      margin-top: 10px;
      background: #fff;
      font-size: 0;
      padding: 4px;
      .me-item{
          display: inline-block;
          width: 25%;
          font-size: 14px;
          color: #646464;
          text-align: center;
          padding: 15px 0;
      }
      img{
          width: 27px;
          height: 27px;
          margin-bottom: 10px;
      }
  }
</style>
