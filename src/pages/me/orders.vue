<template>
    <div class="orders-container">
        <div class="orders-nav">
            <tab class="tab" scroll-threshold="5">
                <tab-item selected @on-item-click="onItemClick">全部</tab-item>
                <tab-item @on-item-click="onItemClick">待付款</tab-item>
                <tab-item @on-item-click="onItemClick">待发货</tab-item>
                <tab-item @on-item-click="onItemClick">待收货</tab-item>
            </tab>
        </div>
        <ul class="js-list">
            <li class="js-item"
                v-for="(item,index) in orders[type].data"
                @click="gotoOrderDetail(item.ordersn)"
            >
                <div class="order-header">
                    <div class="order-num">
                        订单号：{{item.ordersn}}
                    </div>
                    <div class="order-status">
                       {{item.condition}}
                    </div>
                </div>
                <div class="goods-list">
                    <div class="goods-item"
                        v-for="(val,index) in item.good"
                    >
                        <div class="img">
                            <img :src="val.good_photo" alt="">
                        </div>
                        <div class="name">
                           {{val.good_name}}
                        </div>
                        <div class="data">
                            <p class="price">￥{{val.good_price}}</p>
                            <p class="fanli">返利￥{{val.rebate}}</p>
                            <p class="numbers">×{{val.amount}}</p>
                        </div>
                    </div>
                </div>
                <div class="total vux-1px-b">
                    共{{item.amount}}件 合计：<span>{{item.total}}</span>（含运费¥{{item.freight}}） <span>已返利￥{{item.rebate}}</span>
                </div>
                <div class="option-btn">
                    <div class="btn"
                         v-if="item.condition == '待审核凭证' || item.condition == '待发货' || item.condition == '待自提' || item.condition ==  '已发货'"
                    >
                        申请退款
                    </div>
                    <div class="btn"
                         v-if="item.condition == '已完成' || item.condition ==  '已发货'">
                        查看物流
                    </div>
                    <div class="btn active"
                         v-if="item.condition == '已完成' || item.condition == '已退款' || item.condition == '已取消'"
                    >
                        删除订单
                    </div>
                    <div class="btn active" v-if="item.condition == '待自提' || item.condition == '已发货' ">
                        确认收货
                    </div>
                    <div class="btn active"
                         v-if="item.condition == '待上传凭证' ">
                        上传凭证
                    </div>
                    <div class="btn"
                         v-if="item.condition == '待上传凭证' || item.condition == '待付款' ">
                        取消订单
                    </div>
                    <div class="btn active"
                         v-if="item.condition == '待付款'">
                        去支付
                    </div>
                </div>
            </li>
        </ul>
        <Nodata v-if="!orders[type].data.length"></Nodata>
        <infinite-loading @infinite="getList" :distance="100" spinner="circles" ref="infiniteLoading">
          <span slot="no-results">
              <!--暂无数据-->
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
    import api from '../../assets/js/api'
    import Nodata from '../../components/nodata.vue'

    export default {
        components: {
            Tab,
            TabItem,
            InfiniteLoading,
            Nodata
        },
        data () {
            return {
                bottomCount: 0,
                type: 0,
                orders: [
                    {
                        /* 全部订单 */
                        page: 1,
                        data: [
                            {
                                "id": 1,
                                "ordersn": "qwrewrwe",
                                "amount": 1,
                                "total": "1123",
                                "rebate": "123",
                                "freight": "223",
                                "condition": '待付款',
                                "good": [
                                    {
                                        "good_name": "测试测试",
                                        "good_price": "666",
                                        "good_photo": null,
                                        "rebate": "12123",
                                        "amount": 1,
                                        "goodsId": 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        /* 等待付款 */
                        page: 1,
                        data: []
                    },
                    {
                        /* 等待发货 */
                        page: 1,
                        data: []
                    },
                    {
                        /* 等待收货 */
                        page: 1,
                        data: []
                    }
                ]
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
            getList($state) {
                this.$http.post(api.orderIndex,{
                    page: this.orders[this.type].page,
                    status: this.type
                }).then(res => {
                    if (res.data.length) {
                        this.orders[this.type].data = this.orders[this.type].data.concat(res.data);
                        this.orders[this.type].page++;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }).catch(e => {
                    $state.complete();
                })
            },
            gotoOrderDetail(id){
                this.$router.push({
                    path: `/orderDetail?order_id=${id}`
                })
            },
            onItemClick(index){
                this.type = index
                this.$nextTick(() => {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                })
            },
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '订单管理';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .orders-container {
        .orders-nav {
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
    }

</style>
