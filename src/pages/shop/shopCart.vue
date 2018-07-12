<template>
    <div>
        <div class="sc-nav">
            <div class="nav-l">
                共<span>12</span>件商品
            </div>
            <div class="nav-r"
                 v-if="!isEdit"
                 @click="isEdit = true"
            >
                编辑
            </div>
            <div class="options"
                 v-else
            >
                <span class="options-del">
                    删除
                </span>
                <span class="options-com"
                      @click="isEdit = false"
                >
                    完成
                </span>
            </div>
        </div>
        <div class="shop-cart-box">
            <div v-for="i in bottomCount" class="shop-container vux-1px-t">
                    <div class="checked">
                        <check-icon :value.sync="demo1"></check-icon>
                    </div>
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
                            <span v-if="!isEdit">×12</span>
                            <inline-x-number v-else button-style="round" :min="0" width="30px"></inline-x-number>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <infinite-loading @infinite="getGoods" :distance="100" spinner="circles" ref="infiniteLoading">
            <span slot="no-results">
                暂无商品
            </span>
            <span slot="no-more">
                暂无更多商品
            </span>
        </infinite-loading>
      <!-- 去购物车 -->
        <div class="vux-1px-t shopping-cart">
            <div class="all-checked">
              <div>
                  <check-icon :value.sync="demo1"></check-icon>
              </div>
              <div>全选</div>
            </div>
            <div class="total-price">
                <div class="total-price">
                    合计：<span>￥1234</span>
                </div>
                <div class="no-yunfei">
                  不含运费 | 返利¥20
                </div>
            </div>
            <div class="shopping-cart-btn" @click="submitOrder">
              提交订单
            </div>
        </div>
    </div>
</template>

<script>
    import {  Tab, TabItem, Scroller, LoadMore, XImg,  InlineXNumber, Group, Tabbar, TabbarItem, CheckIcon    } from 'vux'
    import InfiniteLoading from 'vue-infinite-loading';
    export default {
        components: {
            Tab,
            TabItem,
            Scroller,
            LoadMore,
            XImg,
            Group,
            InlineXNumber,
            Tabbar,
            TabbarItem,
            CheckIcon,
            InfiniteLoading
        },
        data () {
            return {
                results: [],
                onFetching: false,
                bottomCount: 0,
                changeValue: 1,
                value: 1,
                demo1: true,
                isEdit: false,          // 是否处于编辑状态
            }
        },
        methods:{
            onItemClick (index) {
                console.log('on item click:', index)
            },
            getGoods ( $state ) {
                setTimeout(() => {
                    this.bottomCount += 10
                    if( this.bottomCount < 50 ){
                        $state.loaded();
                    } else{
                        $state.complete();
                    }
                }, 2000)
            },
            submitOrder(){
                this.$router.push({
                    path: '/pay'
                })
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
        background: #F5F5F5;
        padding-bottom: 50px;
    }
    /* 购物车导航 */
    .sc-nav{
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 0 15px;
        width: 100%;
        background: #fff;
        line-height: 41px;
        font-size: 15px;
        color: #323232;
        border-bottom: 1px solid #eaeaea;
        span{
          color: #F52C2C;
          font-size: 15px;
        }
        /* 编辑处理 */
        .options{
            .options-del{
                margin-right: 10px;
                color: #F52C2C;
            }
            .options-com{
                color: @fontColor;
            }
        }
    }
    .shop-cart-box{
        background: #fff;
        margin-top: 41px;
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
        .vux-number-selector-plus{
          padding: 0px 0px!important;
        }
        .vux-number-selector-sub{
          padding: 0px 0px!important;
        }
        .vux-number-input{
          font-size: 14px!important;
        }
        svg{
          width: 15px;
          height: 15px;
          margin-bottom: 2px;
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
          display: flex;
          line-height: 43px;
          align-items: center;
          color: #323232;
          font-size: 15px;
          padding-left: 10px;
      }
  }
    .weui-icon-circle,.weui-icon-success{
      font-size: 20px!important;
    }
</style>
