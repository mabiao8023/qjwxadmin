<template>
    <div>
        <div class="nav">
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
        <scroller lock-x height="650px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="shop-box">
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
                            <div class="shop-price">￥28.80</div>
                            <div class="shop-choice-nums" style="text-align:center;">
                                <span v-if="!isEdit">×12</span>
                                <inline-x-number v-else min="0" width="40px"></inline-x-number>
                            </div>
                        </div>
                    </div>
                </div>
                <load-more tip="加载中"></load-more>
            </div>
        </scroller>
        <!-- 去购物车 -->
      <!-- 去购物车 -->
        <div class="vux-1px-t shopping-cart">
            <div class="checked">
              <check-icon :value.sync="demo1"></check-icon>
            </div>
            <div class="total-price">
                <div class="total-price">
                    合计：<span>￥1234</span>
                </div>
                <div class="no-yunfei">
                    不含运费
                </div>
            </div>
            <div class="shopping-cart-btn">
              进货车(12)
            </div>
        </div>
    </div>

</template>

<script>
    import {  Tab, TabItem, Scroller, LoadMore, XImg,  InlineXNumber, Group, Tabbar, TabbarItem, CheckIcon    } from 'vux'
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
            CheckIcon
        },
        data () {
            return {
                results: [],
                onFetching: false,
                bottomCount: 20,
                changeValue: 1,
                value: 1,
                demo1: true,
                isEdit: false,          // 是否处于编辑状态
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
            onScrollBottom () {
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount += 10
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset()
                        })
                        this.onFetching = false
                    }, 2000)
                }
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
      background: #F9CD3B;
      padding-left: 38.5px;
    }
  }
  /* 购物车导航 */
  .nav{
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      width: 100%;
      background: #fff;
      line-height: 41px;
      font-size: 15px;
      color: #323232;
      span{
          color: #F52C2C;
          font-size: 15px;
      }
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
</style>
