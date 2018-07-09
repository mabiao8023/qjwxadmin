<template>
    <div>
        <div class="header">
            <div class="header-con">
                请选择配送方式，并仔细核对订单信息
            </div>
            <div class="dashed-line">
            </div>
            <div class="fahuo-methods">
                <div class="youji fahuo-item">
                    <check-icon :value.sync="demo1"></check-icon>
                    <span>邮寄方式</span>
                </div>
                <div class="ziti fahuo-item">
                    <check-icon :value.sync="demo1"></check-icon>
                    <span>自提方式</span>
                </div>
            </div>
        </div>
        <div class="shop-box">
                <div v-for="i in bottomCount" class="shop-container vux-1px-t">
                    <div class="shop-img">
                        <x-img class="shop-detail-image" src="http://weikongimg.oss-cn-shenzhen.aliyuncs.com/uploads/20180516/a325eaa661da68f423eca4beb8fa5168.png" alt="">
                        </x-img>
                    </div>
                    <div class="shop-detail">
                        <div class="shop-title">
                            沐浴露旺旺
                        </div>
                        <div class="shop-data">
                            <div class="shop-price">￥28.80(返利¥2.00)</div>
                            <div class="shop-choice-nums" style="text-align:center;">
                                <span>×12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="shop-others">
            <div class="others-item">
              <div class="title">
                  配送费
              </div>
              <div class="feiyong">
                  ￥10.00
              </div>
            </div>
            <div class="others-item youhui vux-1px-t">
                <div class="title">
                    优惠券
                </div>
                <div class="feiyong">
                    -￥10.00
                </div>
            </div>
        </div>
        <!-- 去购物车 -->
        <div class="vux-1px-t shopping-cart">
            <div class="all-checked">
              <check-icon :value.sync="demo1"></check-icon>全选
            </div>
            <div class="total-price">
                <div class="total-price">
                    合计：<span>￥1234</span>
                </div>
                <div class="no-yunfei">
                  不含运费 | 返利¥20
                </div>
            </div>
            <div class="shopping-cart-btn">
                提交订单
            </div>
        </div>
    </div>
</template>

<script>
    import {  XImg, CheckIcon  } from 'vux'
    export default {
        components: {
            XImg,
            CheckIcon
        },
        data () {
            return {
                demo1: true,
                bottomCount: 2,
            }
        },
        methods:{
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult (val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            onFocus () {
                console.log('on focus')
            },
            onCancel () {
                console.log('on cancel')
            },
            onItemClick (index) {
                console.log('on item click:', index)
            },
            change( data ){
                console.log(data)
            },
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
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .shop-box{
    background: #fff;
    margin-top: 10px;
  }
  .shop-container{
    display: flex;
    align-items: center;
    padding: 15px;
    .shop-img{
      width: 70px;
      height: 70px;
      overflow: hidden;
      margin-right: 20px;
      .shop-detail-image{
        width: 70px;
        height: 70px;
      }
    }
    .shop-detail{
      display: flex;
      flex: 1;
      height: 70px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      font-size: 15px;
      .shop-title{
        width: 100%;
        color: #323232;
      }
      .shop-nums{
        width: 100%;
        margin-top: 10px;
        font-size: 13px;
        color: #909090;
      }
    }
  }
  .shop-data{
    display: flex;
    /*margin-top: 7px;*/
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #E1B113;
    .shop-choice-nums{
        color: #909090;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
  .shopping-cart{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 45px;
    font-size: 15px;
    background: #fff;
    .no-yunfei{
        color: #909090;
        font-size: 13px;
    }
    .total-price{
      flex: 1;
      color: #323232;
      /*padding-top: 1px;*/
      padding-left: 15px;
      font-size: 15px;
      text-align: right;
      padding-right: 4px;
      span{
        color: #F52C2C;
      }
    }
    .shopping-cart-btn{
      width: 127px;
      color: #000;
      line-height: 45px;
      background: #F9CD3B url(../../assets/image/shopcar.png) no-repeat 16px center/18px 18px;
      padding-left: 38.5px;
    }
    .all-checked{
        line-height: 45px;
        color: #323232;
        font-size: 15px;
    }
  }
  .header{
      background: #fff;
      color: #323232;
      font-size: 15px;
      .header-con{
          padding: 9px 14px;
      }
      .dashed-line{
        width: 100%;
        height: 3px;
        background: url(../../assets/image/hengtiao.png) no-repeat center center/100% 100%;
      }
      .fahuo-methods{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          .fahuo-item{
              display: flex;
              /*align-items: center;*/
              justify-content: center;
              width: 50%;
          }
      }
  }
  .shop-others{
      margin-top: 10px;
      color: #323232;
      font-size: 15px;
      .others-item{
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
          background: #fff;
          .feiyong{
            color: #646464;
          }
      }

  }

</style>
