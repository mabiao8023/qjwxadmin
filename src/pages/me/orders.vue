<template>
    <div class="page-container">
      <div class="nav">
        <tab class="tab" scroll-threshold="5" >
          <tab-item selected @on-item-click="onItemClick">全部</tab-item>
          <tab-item @on-item-click="onItemClick">待付款</tab-item>
          <tab-item @on-item-click="onItemClick">待发货</tab-item>
          <tab-item @on-item-click="onItemClick">待提货</tab-item>
          <tab-item @on-item-click="onItemClick">待收货</tab-item>
        </tab>
      </div>
        <ul class="js-list">
            <li class="js-item" v-for="i in bottomCount">
                <div class="order-header">
                    <div class="order-num">
                        订单号：2018062312345678
                    </div>
                    <div class="order-status">
                        已支付
                    </div>
                </div>
                <div class="goods-list">
                    <div class="goods-item">
                        <div class="img">
                            <img src="../../assets/image/logo.png" alt="">
                        </div>
                        <div class="name">
                            产品名称产品名称
                        </div>
                        <div class="data">
                            <p class="price">￥88</p>
                            <p class="fanli">返利￥2.00</p>
                            <p class="numbers">×12</p>
                        </div>
                    </div>
                </div>
                <div class="option-btn">
                    <div class="btn">
                        查看物流
                    </div>
                    <div class="btn">
                        确认收货
                    </div>
                    <div class="btn">
                        取消订单
                    </div>
                    <div class="btn">
                        删除订单
                    </div>
                    <div class="btn">
                        去支付
                    </div>
                </div>
            </li>
        </ul>
        <infinite-loading @infinite="getList" :distance="100" spinner="circles" ref="infiniteLoading">
          <span slot="no-results">
              暂无数据
          </span>
          <span slot="no-more">
              暂无更多数据
          </span>
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import { Tab, TabItem,  } from 'vux'

    export default {
        components: {
          Tab,
          TabItem,
          InfiniteLoading
        },
        data () {
            return {
                bottomCount: 0,
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
            getList ( $state ) {
              setTimeout(() => {
                this.bottomCount += 10
                if( this.bottomCount < 50 ){
                  $state.loaded();
                } else{
                  $state.complete();
                }
              }, 1000)
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
  .nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
  }
  .js-list{
      padding-top: 44px;
  }
  .js-item{
      margin-top: 10px;
      background: #fff;
      .order-header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 15px;
          .order-num{
              color: #646464;
               font-size: 15px;
          }
          .order-status{
              font-size: 15px;
              color: @mainColor;
          }
      }
      .goods-list{
          .goods-item{
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 5px 10px;
              background: #F6F6F6;
              margin-top: 5px;
              &:first-child{
                  margin-top: 0;
              }
          }
      }
  }
</style>
