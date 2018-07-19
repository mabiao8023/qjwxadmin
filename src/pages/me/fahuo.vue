<template>
    <div class="page-container">
        <div class="fahuo-nav">
            <tab class="tab" scroll-threshold="5">
                <tab-item selected @on-item-click="onItemClick">空间待处理</tab-item>
                <tab-item @on-item-click="onItemClick">历史订单</tab-item>
                <tab-item @on-item-click="onItemClick">总部待处理</tab-item>
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
                <div>
                    <div class="dashed-line">

                    </div>
                    <div class="tihuo-info">
                        <div class="tihuo-container">
                            <div class="tihuo-title">
                                提货人：王琪

                            </div>
                            <div class="tihuo-phone">
                                1214732894781

                            </div>
                        </div>
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
                <div class="total vux-1px-b">
                    共13件 合计：<span>¥1230</span>（含运费¥0.00） <span>已返利￥26</span>
                </div>
                <div class="option-btn">
                    <div class="btn">
                        查看物流

                    </div>
                    <div class="btn">
                        确认收货

                    </div>
                    <div class="btn active">
                        取消订单

                    </div>
                    <!--<div class="btn">-->
                    <!--删除订单-->
                    <!--</div>-->
                    <!--<div class="btn">-->
                    <!--去支付-->
                    <!--</div>-->
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
    import {Tab, TabItem,} from 'vux'

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
        methods: {
            layer(text){
                this.$vux.toast.text(text || 'hello', 'middle')
            },
            showLoading(){
                this.$vux.loading.show({
                    text: '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            getList ($state) {
                setTimeout(() => {
                    this.bottomCount += 10
                    if (this.bottomCount < 50) {
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }, 1000)
            },
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '发货管理';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .fahuo-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

    .js-list {
        padding-top: 44px;
    }

    .js-item {
        margin-top: 10px;
        background: #fff;
        .order-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 15px;
            .order-num {
                color: #646464;
                font-size: 15px;
            }
            .order-status {
                font-size: 15px;
                color: @mainColor;
            }
        }
        .goods-list {
            .goods-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px 10px;
                background: #F6F6F6;
                margin-top: 5px;
                &:first-child {
                    margin-top: 0;
                }
            }
            .img {
                width: 70px;
                height: 70px;
            }
            .name {
                flex: 1;
                height: 70px;
                text-align: left;
                color: #323232;
                font-size: 15px;
                padding: 0 10px;
            }
            .data {
                text-align: right;
                padding-left: 10px;
                color: #323232;
                font-size: 15px;
            }
            .fanli {
                color: #646464;
            }
            .numbers {
                color: #909090;
                font-size: 12px;
            }
        }
    }

    .option-btn {
        padding: 12px 16px;
        font-size: 0;
        text-align: right;
        .btn {
            display: inline-block;
            margin-left: 10px;
            line-height: 30px;
            text-align: center;
            color: #323232;
            font-size: 15px;
            border-radius: 15px;
            padding: 0 15px;
            border: 1px solid #C2C2C2;
            overflow: hidden;
            &.active {
                color: @mainColor;
                border: 1px solid @mainColor;
            }
        }

    }

    .total {
        text-align: right;
        font-size: 13px;
        color: #909090;
        padding: 8px 12px;
        span {
            color: #323232;
        }
    }

    .dashed-line {
        width: 100%;
        height: 3px;
        background: url(../../assets/image/hengtiao.png) no-repeat center center/100% 100%;
    }

    .tihuo-info {
        padding: 15px 10px;
        padding-left: 31px;
        color: #646464;
        font-size: 15px;
        line-height: 1.5;
        background: #ffffff url(../../assets/image/location.png) no-repeat 9px 16px;
        background-size: 14px 18px;
        .tihuo-container {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
