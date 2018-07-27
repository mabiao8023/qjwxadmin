<template>
    <div class="fahuo-container">
        <div class="fahuo-nav">
            <tab class="tab" scroll-threshold="5">
                <tab-item selected @on-item-click="onItemClick">空间待处理</tab-item>
                <tab-item @on-item-click="onItemClick">历史订单</tab-item>
                <tab-item @on-item-click="onItemClick">总部待处理</tab-item>
            </tab>
        </div>
        <ul class="js-list">
            <li class="js-item"
                v-for="(item,index) in orders[type].data"
                @click="gotoOrderitem(item.ordersn)"
            >
                <div class="order-header">
                    <div class="order-num">
                        订单号：{{item.ordersn}}
                    </div>
                    <div class="order-status">
                        {{item.condition}}
                    </div>
                </div>
                <div>
                    <div class="dashed-line">
                    </div>
                    <div class="tihuo-info" v-if="item.delivery == 2">
                        <div class="tihuo-container">
                            <div class="tihuo-title">
                                提货人：{{item.username}}
                            </div>
                            <div class="tihuo-phone">
                                {{item.phone}}
                            </div>
                        </div>
                    </div>
                    <div class="tihuo-info" v-if="item.delivery == 1">
                        <div class="tihuo-container">
                            <div class="tihuo-title">
                                收货人：{{item.username}}
                            </div>
                            <div class="tihuo-phone">
                                {{item.phone}}
                            </div>
                        </div>
                        <div class="shouhuo-address">
                            {{item.province + item.city + item.district + item.address}}
                        </div>
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
                    <div class="btn" v-if="type == 1"
                        @click.stop.prevent="changeOrderStatus('delete',item.ordersn)"
                    >
                        删除订单
                    </div>
                    <div class="btn active"
                         v-if="type == 0 && item.condition == '待审核凭证'"
                         @click.stop.prevent="passVerify(item.ordersn,'voucher')"
                    >
                        通过审核
                    </div>
                    <div class="btn active"
                         v-if="item.condition == '待退款'"
                         @click.stop.prevent="passVerify(item.ordersn,'refund')"
                    >
                        通过审核
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
                        /* 空间待处理 */
                        page: 1,
                        data: []
                    },
                    {
                        /* 历史订单 */
                        page: 1,
                        data: []
                    },
                    {
                        /* 总部待处理 */
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
            onItemClick(index){
                this.type = index
                this.$nextTick(() => {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                })
            },
            getList ($state) {
                let status = this.type == 0 ? 1 : this.type == 1 ? 3 : 4;
                this.$http.post(api.delivery,{
                    page: this.orders[this.type].page,
                    status: status
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
            /*订单操作删除，通过审核*/
            passVerify(order_id,type){
                this.showLoading('提交中')
                this.$http.post(api.verify,{
                    ordersn: order_id,
                    type: type
                }).then(res => {
                    this.hideLoading()
                    this.layer('审核通过')
                    /* todo:审核通过后的操作 */
                }).catch(e => {
                    this.hideLoading()
                })
            },
            //  改变订单状态
            changeOrderStatus(status,order_id){
                this.showLoading('提交中')
                this.$http.post(api.changeOrderStatus,{
                    ordersn: order_id,
                    status: status
                }).then(res => {
                    this.hideLoading()
                    this.layer('修改成功')
                }).catch(e => {
                    this.hideLoading()
                })
            },
            gotoOrderitem(id){
                this.$router.push({
                    path: `/fahuoDetail?order_id=${id}`
                })
            }
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

    .fahuo-container {
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
    }

</style>
