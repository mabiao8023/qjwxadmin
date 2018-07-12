<template>
    <div>
        <div class="goods-header">
            <search
                @on-change="getResult"
                v-model="search"
                :auto-fixed="false"
                @on-submit="onSubmit"
                placeholder="请输入商品名称"
                ref="search">
            </search>
            <tab class="tab">
                <tab-item selected @on-item-click="onItemClick">全部</tab-item>
                <tab-item @on-item-click="onItemClick">促销</tab-item>
                <tab-item @on-item-click="onItemClick">正价</tab-item>
            </tab>
        </div>
            <div class="goods-box2">
                <div v-for="i in bottomCount" class="shop-container vux-1px-b">
                    <div class="shop-img">
                        <x-img class="shop-detail-image" src="http://weikongimg.oss-cn-shenzhen.aliyuncs.com/uploads/20180516/a325eaa661da68f423eca4beb8fa5168.png" alt="">
                        </x-img>
                    </div>
                    <div class="shop-detail">
                        <div class="shop-title">
                            沐浴露旺旺
                        </div>
                        <div class="shop-nums">
                            库存：222
                        </div>
                        <div class="shop-data">
                            <div class="shop-price">￥28.80(返利￥2.00)</div>
                            <inline-x-number button-style="round" :min="0" width="30px"></inline-x-number>
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
            <div class="total-price">
                合计：<span>￥1234（返利¥20）</span>
            </div>
            <div class="shopping-cart-btn" @click="gotoShopCart">
                进货车(12)
            </div>
        </div>
    </div>
</template>

<script>
    import { Search, Tab, TabItem, LoadMore, XImg, InlineXNumber, Group } from 'vux'
    import InfiniteLoading from 'vue-infinite-loading';
    export default {
        components: {
            Search,
            Tab,
            TabItem,
            LoadMore,
            XImg,
            Group,
            InlineXNumber,
            InfiniteLoading
        },
        data () {
            return {
                search: '',
                results: [],
                onFetching: false,
                bottomCount: 0,
                changeValue: 1,
                value: 1
            }
        },
        methods:{
            onSubmit () {
                // 搜索
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            getResult(){
                // 内容变化是搜索结果
            },
            onCancel () {
                console.log('on cancel')
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
            change( data ){
                console.log(data)
            },
            onItemClick(){

            },
            gotoShopCart(){
                this.$router.push({
                      path: '/shopCart'
                })
            }
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    body{
        background: #F5F5F5;
        padding-bottom: 50px;
    }
    .goods-header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        .weui-search-bar__label{
            text-align: left!important;
            background: #F5F5F5!important;
            color: #ACACAC!important;
            font-size: 15px!important;
        }
        .weui-search-bar__cancel-btn{
            font-size: 14px;
        }
        .weui-search-bar{
            padding-bottom: 0!important;
        }
        .vux-tab-item{
            line-height: 40px!important;
        }
        .vux-tab{
            height: 40px!important;
        }
    }
    .goods-box2{
        margin-top: 83px;
        padding: 0 10px;
        /*padding-bottom: 50px;*/
        background: #fff;
        .shop-container{
          display: flex;
          padding: 10px 0;
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
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            text-align: left;
            font-size: 15px;
            .shop-title{
              width: 100%;
              color: #323232;
              font-size: 15px;
            }
            .shop-nums{
              width: 100%;
              margin-top: 25px;
              font-size: 13px;
              color: #909090;
            }
          }
        }
        .shop-data{
          display: flex;
          margin-top: 5px;
          width: 100%;

          justify-content: space-between;
          align-items: center;
          color: #E1B113;
          .shop-price{
            font-size: 15px;
          }
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
    .shopping-cart{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      height: 45px;
      line-height: 45px;
      font-size: 15px;
      background: #fff;
      .total-price{
          flex: 1;
          color: #323232;
          padding-left: 15px;
          span{
              color: #F52C2C;
          }
      }
      .shopping-cart-btn{
          width: 127px;
          color: #000;
          background: #F9CD3B url(../../assets/image/shopcar.png) no-repeat 16px center/18px 18px;
          padding-left: 38.5px;
      }
  }
</style>
