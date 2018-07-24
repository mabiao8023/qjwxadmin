<template>
    <div>
        <div class="pay-header">
            <div class="header-con">
                请选择配送方式，并仔细核对订单信息


            </div>
            <div class="dashed-line">
            </div>
            <div class="fahuo-methods">
                <div class="youji fahuo-item"
                     @click="isPost = true"
                >
                    <div class="checked-icon"
                         :class="{'selected': isPost }">
                    </div>
                    <div>邮寄方式</div>
                </div>
                <div class="ziti fahuo-item"
                     @click="isPost = false"
                >
                    <div class="checked-icon"
                         :class="{'selected': !isPost }">
                    </div>
                    <div>自提方式</div>
                </div>
            </div>
            <div class="adress vux-1px-t" @click="setRecvier">
                <template v-if="!detail.">
                    <div v-if="isPost" class="choice-adress">
                        请填写收货信息


                    </div>
                    <div v-else class="choice-adress">
                        请填写提货人信息


                    </div>
                </template>

                <div class="choice-adress has-adress" v-else>
                    <div class="adress-info">
                        <div>
                            收货人：王琪


                        </div>
                        <div>
                            12323434354


                        </div>
                    </div>
                    <div class="has-adress" v-if="isPost">
                        收货地址：广东省广州市天河区建中路66号


                    </div>
                </div>
            </div>
        </div>
        <div class="pay-shop-box">
            <div v-for="(item,index) in detail.list" class="shop-container vux-1px-t">
                <div class="shop-img">
                    <x-img class="shop-detail-image"
                           :src="item.good_photo"
                           alt="">
                    </x-img>
                </div>
                <div class="shop-detail">
                    <div class="shop-title">
                        {{item.good_name}}
                    </div>
                    <div class="shop-data">
                        <div class="shop-price">￥{{item.good_price}}(返利¥{{item.rebate}})</div>
                        <div class="shop-choice-nums" style="text-align:center;">
                            <span>×{{item.amount}}</span>
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
                    ￥{{detail.freight}}


                </div>
            </div>
            <!--<div class="others-item coupon vux-1px-t">-->
                <!--<div class="title">-->
                    <!--优惠券-->


                <!--</div>-->
                <!--<div class="feiyong">-->
                    <!-- -￥10.00-->


                <!--</div>-->
                <!--<div class="more-arrow">-->

                <!--</div>-->
            <!--</div>-->
        </div>
        <!-- 去购物车 -->
        <div class="shopping-cart-js">
            <div class="total-price">
                <div>
                    合计：<span>￥{{detail.total}}</span>
                </div>
                <div class="no-yunfei">
                    含运费 | 返利¥{{detail.totalRebate}}


                </div>
            </div>
            <div class="shopping-cart-btn" @click="showChoice = true">
                结算


            </div>
        </div>
        <!-- 选择支付类型弹窗 -->
        <div v-transfer-dom>
            <popup v-model="showChoice"
                   height="300px"
                   @on-hide="log('hide')"
                   @on-show="log('show')">
                <div class="paypop">
                    <div class="paypop-header vux-1px-b">
                        请选择支付方式


                        <div class="paypop-close" @click="showChoice = false">
                        </div>
                    </div>
                    <div class="pay-price">
                        需支付<span>￥{{detail.total}}</span>
                    </div>
                    <div class="online-pay pay-item vux-1px-b"
                         @click="gotoOnlinePay"
                    >
                        <div class=" icon">
                        </div>
                        <div class="content">
                            <div class="title">
                                线上支付


                            </div>
                            <div class="desc">
                                立即支付给创客空间或总部


                            </div>
                        </div>
                    </div>
                    <div class="offine-pay pay-item"
                         @click="gotoOffinePay"
                    >
                        <div class="offine-icon icon">
                        </div>
                        <div class="content">
                            <div class="title">
                                线下支付


                            </div>
                            <div class="desc">
                                自行打款给创客空间或总部


                            </div>
                            <div class="desc">
                                *备注：您可以使用微信、支付宝、银行卡或是现金方式将货款转给空间或总部，并截取或打印凭证上传至此


                            </div>
                        </div>
                    </div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
    import {XImg, CheckIcon, TransferDom, Popup} from 'vux'
    import {getParams,weChatPay} from '../../assets/js/util'
    import api from '../../assets/js/api'
    export default {
        directives: {
            TransferDom
        },
        components: {
            XImg,
            CheckIcon,
            Popup
        },
        data () {
            return {
                demo1: true,
                bottomCount: 2,
                showChoice: false,
                isPost: true,
                order_id: getParams()['order_id'] || '',
                detail: {
                    "total": 1,
                    "list": [
                        {
                            "good_name": "测试内容",
                            "good_price": 1,
                            "rebate": 1,
                            "amount": 1,
                            "good_id": "12312",
                            "good_photo": ""
                        }
                    ],
                    "totalRebate": 1,
                    "freight": 1,
                    "ordersn": "",
                    "post_address": [
                        {
                            "province": "光",
                            "city": "四射",
                            "district": "啊啊",
                            "address": "啊啊啊",
                            "username": "啊啊",
                            "phone": "1231312"
                        }
                    ],
                    "self_address": [
                        {
                            "username": "四射",
                            "phone": "1313"
                        }
                    ]
                }
            }
        },
        methods: {
            layer(text){
                this.$vux.toast.text(text || 'hello', 'middle')
            },
            showLoading(text){
                this.$vux.loading.show({
                    text: text || '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            setRecvier(){
                if (this.isPost) {
                    this.$router.push({
                        path: '/address'
                    })
                } else {
                    this.$router.push({
                        path: '/selfGet'
                    })
                }
            },
            log(start){
                console.log(start)
            },
            gotoOnlinePay(){
                this.settlementOrder(2)
                location.href = weChatPay(23423432432)
            },
            gotoOffinePay(){
                this.settlementOrder(1)
                this.$router.push({
                    path: '/offinePay'
                })
            },
            /* 获取确认订单的信息 */
            getOrderData(){
                this.showLoading('获取中')
                this.$http.post(api.confirmOrder,{
                    ordersn: this.order_id
                }).then(res => {
                    this.hideLoading()
                    this.detail = res.data
                }).catch(e => {
                    this.hideLoading()
                })
            },
            /* 结算支付 */
            settlementOrder(payType){
                this.showLoading('提交中')
                this.$http.post(api.settlementOrder,{
                    ordersn: this.order_id,
                    delivery: this.isPost ? 1 : 2,
                    username: '',
                    phone: 112324343,
                    province: '广东省',
                    city: '广州市',
                    district: '黄浦区',
                    address: '瑞东花园',
                    payType: payType
                }).then(res => {
                    this.hideLoading()
                    if( payType == 1 ){
                        /*线下支付*/
                        this.$router.push({
                            path: `/offinePay?order_id=${res.ordersn}&isPost=${this.isPost}`
                        })
                    }else{
                        /*线上支付*/
                        this.$router.push({
                            path: `/weChatPay?order_id=${res.ordersn}&isPost=${this.isPost}`
                        })
                    }
                }).catch(e => {
                    this.hideLoading()
                })
            }
        },
        mounted(){
            this.getOrderData();
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .pay-header {
        background: #fff;
        color: #323232;
        font-size: 15px;
        .header-con {
            padding: 9px 14px;
        }
        .dashed-line {
            width: 100%;
            height: 3px;
            background: url(../../assets/image/hengtiao.png) no-repeat center center/100% 100%;
        }
        .fahuo-methods {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            .fahuo-item {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                .checked-icon {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #B9B9B9;
                    margin-right: 5px;
                    &.selected {
                        border: 0;
                        background: url(../../assets/image/selected-yellow.png) no-repeat center center/20px 20px;
                    }
                }
            }
        }
        .adress {
            margin: 0 10px;
            padding: 11px 0;
            padding-left: 24px;
            background: url(../../assets/image/location.png) no-repeat left 11px;
            background-size: 14px 18px;
        }
        .choice-adress {
            color: @fontColor;
            font-size: 15px;
            padding-right: 20px;
            line-height: 1.2;
            background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
        }
        .has-adress {
            color: #646464;
            .adress-info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
            }
        }
    }

    .pay-shop-box {
        background: #fff;
        margin-top: 10px;
        .shop-container {
            display: flex;
            align-items: center;
            padding: 15px;
            .shop-img {
                width: 70px;
                height: 70px;
                overflow: hidden;
                margin-right: 20px;
                .shop-detail-image {
                    width: 70px;
                    height: 70px;
                }
            }
            .shop-detail {
                display: flex;
                flex: 1;
                height: 70px;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                text-align: left;
                font-size: 15px;
                .shop-title {
                    width: 100%;
                    color: #323232;
                }
                .shop-nums {
                    width: 100%;
                    margin-top: 10px;
                    font-size: 13px;
                    color: #909090;
                }
            }
        }
        .shop-data {
            display: flex;
            /*margin-top: 7px;*/
            width: 100%;
            justify-content: space-between;
            align-items: center;
            color: #E1B113;
            .shop-choice-nums {
                color: #909090;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .shopping-cart-js {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        height: 45px;
        font-size: 15px;
        background: #fff;
        .no-yunfei {
            color: #909090;
            font-size: 13px;
        }
        .total-price {
            flex: 1;
            color: #323232;
            padding-left: 15px;
            font-size: 15px;
            text-align: right;
            padding-right: 8px;
            span {
                color: #F52C2C;
            }
        }
        .shopping-cart-btn {
            width: 127px;
            color: #000;
            text-align: center;
            line-height: 45px;
            background: #F9CD3B;
        }
        .all-checked {
            line-height: 45px;
            color: #323232;
            font-size: 15px;
        }
    }

    .shop-others {
        margin-top: 10px;
        color: #323232;
        font-size: 15px;
        .others-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            background: #fff;
            .feiyong {
                color: #646464;
                flex: 1;
                text-align: right;
            }
        }
        .coupon {
            /*padding-right: 34px;*/
            /*background: #fff url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;*/
        }
        .more-arrow {
            width: 8px;
            height: 13px;
            margin-left: 10px;
            background: url(../../assets/image/more-arrow.png) no-repeat center center/8px 13px;
        }
    }

    .weui-icon-circle, .weui-icon-success {
        font-size: 20px !important;
    }

    .paypop {
        background: #fff;
        height: 100%;
        .paypop-header {
            text-align: center;
            line-height: 41px;
            color: #323232;
            font-size: 15px;
            position: relative;
            .paypop-close {
                position: absolute;
                top: 12px;
                right: 12px;
                width: 15px;
                height: 15px;
                background: url(../../assets/image/close-icon.png) no-repeat center center/15px 15px;
            }
        }
        .pay-price {
            font-size: 15px;
            color: #323232;
            text-align: center;
            padding: 4px;
            span {
                color: #F52C2C;
            }
        }
        .pay-item {
            display: flex;
            padding: 10px 14px;
            color: #323232;
            font-size: 15px;
            .icon {
                width: 24px;
                height: 24px;
                margin-top: 10px;
                margin-right: 10px;
                background: url(../../assets/image/online-icon.png) no-repeat center center/24px 24px;
            }
            .offine-icon {
                width: 24px;
                height: 24px;
                margin-top: 10px;
                margin-right: 10px;
                background: url(../../assets/image/offine-icon.png) no-repeat center center/24px 24px;
            }
            .content {
                flex: 1;
            }
            .desc {

                color: #909090;
            }
        }
    }
</style>
