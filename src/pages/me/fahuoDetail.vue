<template>
    <div class="order-detail-container">
        <div class="header">
            <div>{{detail.condition}}</div>
            <div class="look"
                 v-if="detail.payType == 1 && detail.condition != '待审核凭证' "
                 @click="gotoViewCer">查看凭证>
            </div>
        </div>
        <!-- 邮寄状态 -->
        <template v-if="detail.delivery == 1">
            <div class="wuliu-msg" v-if="detail.logistics">
                <div class="title">
                    物流信息：
                </div>
                <div class="wuliu-method">
                    {{detail.logistics.company}}
                </div>
                <div class="wuliu-number" id="copyValue" ref="numbers">
                    {{detail.logistics.number}}
                </div>
                <button type="button" class="copy-btn" id="copy" :data-clipboard-text='detail.logistics.number'>
                    复制
                </button>
            </div>
            <div class="wuliu-msg" v-else>
                <div class="title">
                    暂无物流信息
                </div>
            </div>
            <div class="dashed-line">
            </div>
            <div class="shouhuo">
                <div class="sh-info">
                    <div class="name">
                        收货人：{{detail.username}}
                    </div>
                    <div class="phone">
                        {{detail.phone}}
                    </div>
                </div>
                <div class="sh-adress">
                    收货地址：{{detail.province + detail.city + detail.district + detail.address}}
                </div>
            </div>
        </template>
        <template v-else>
            <div class="shouhuo">
                <div class="tihuo-ads">
                    <div class="sh-ad-title">
                        提货地址：
                    </div>
                    <div class="sh-ad-con">
                        {{detail.makerAddress.province + detail.makerAddress.city + detail.makerAddress.district + detail.makerAddress.address }}
                    </div>
                </div>
                <div class="sh-info">
                    <div class="name">
                        电话：{{detail.makerAddress.phone}}
                    </div>
                    <div class="phone">
                        周一至周五 9:00-18:00
                    </div>
                </div>
            </div>
            <div class="dashed-line">

            </div>
            <div class="tihuo-info">

                <div class="tihuo-container">
                    <div class="tihuo-title">
                        提货人：{{detail.username}}
                    </div>
                    <div class="tihuo-phone">
                        {{detail.phone}}
                    </div>
                </div>
            </div>
        </template>

        <div class="goods-container">
            <div class="goods-list">
                <div class="goods-item"
                    v-for="(item,index) in detail.good"
                >
                    <div class="img">
                        <img :src="item.good_photo" alt="">
                    </div>
                    <div class="name">
                        {{item.good_name}}
                    </div>
                    <div class="data">
                        <p class="price">￥{{item.good_price}}</p>
                        <p class="fanli">返利￥{{item.rebate}}</p>
                        <p class="numbers">×{{item.amount}}</p>
                    </div>
                </div>
            </div>
            <div class="total vux-1px-b">
                共{{detail.amount}}件 合计：<span>¥{{detail.total}}</span>（含运费¥{{detail.freight}}） <span>已返利￥{{detail.rebate}}</span>
            </div>
        </div>

        <div class="progress-time">
            <div class="progress-item">
                订单号：{{detail.ordersn}}
            </div>
            <div class="progress-item" v-if="detail.addTime">
                创建时间：{{detail.addTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.payTime && detail.payType == 2">
                支付时间：{{detail.payTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.payTime && detail.payType == 1">
                上传凭证时间：{{detail.payTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.deliveryTime && detail.delivery == 1">
                发货时间：{{detail.deliveryTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.finishTime">
                完成时间：{{detail.finishTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.verifyVoucherTime">
                审核时间：{{detail.verifyVoucherTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.editTime && detail.condition == '已取消'">
                申请取消时间：{{detail.editTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.editTime && detail.condition == '已退款'">
                申请退款时间：{{detail.editTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.confirmEditTime && detail.condition == '已取消'">
                申请取消时间：{{detail.confirmEditTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div class="progress-item" v-if="detail.confirmEditTime && detail.condition == '已退款'">
                申请退款时间：{{detail.confirmEditTime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss')}}
            </div>
        </div>
        <div class="fixed-option-btn">
            <div class="btn active"
                 v-if=" detail.condition == '待审核凭证'"
                 @click.stop.prevent="passVerify('voucher')"
            >
                通过审核
            </div>
            <div class="btn active"
                 v-if="detail.condition == '待审核退款'"
                 @click.stop.prevent="passVerify('refund')"
            >
                通过审核
            </div>
        </div>
    </div>
</template>

<script>
    import {dateFormat} from 'vux'
    import '../../assets/js/clipboard'
    import api from '../../assets/js/api'
    import {getParams,weChatPay} from '../../assets/js/util'
    export default {
        components: {},
        filters: {
            dateFormat
        },
        data () {
            return {
                order_id: getParams()['order_id'] || '',
                detail: { },
                type: 0
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
            copy(){
                var clipboard = new Clipboard('button');
                clipboard.on('success', e => {
                    this.layer('复制成功');
                });
                clipboard.on('error', e => {
                    this.layer('复制失败，请手动复制');
                });
            },
            //  改变订单状态
            changeOrderStatus(status){
                this.showLoading('提交中')
                this.$http.post(api.changeOrderStatus,{
                    ordersn: this.detail.ordersn,
                    status: status
                }).then(res => {
                    this.hideLoading()
                    this.layer('修改成功')
                }).catch(e => {
                    this.hideLoading()
                })
            },
            gotoViewCer(order_id){
                this.$router.push({
                    path: `/viewcer?order_id=${order_id}`
                })
            },
            /*跳转微信支付*/
            gotoWeChatPay(){
                location.href = weChatPay(this.detail.ordersn,this.detail.delivery)
            },
            /*跳转上传凭证页面*/
            uploadVoucher(){
                this.$router.push({
                    path: `/offinePay?order_id=${this.detail.ordersn}&delivery=${this.detail.delivery}`
                })
            },
            /*订单操作删除，通过审核*/
            passVerify(type){
                this.showLoading('提交中')
                this.$http.post(api.verify,{
                    ordersn: this.detail.ordersn,
                    type: type
                }).then(res => {
                    this.hideLoading()
                    this.layer('审核通过')
                    /* todo:审核通过后的操作 */
                }).catch(e => {
                    this.hideLoading()
                })
            },
            getOrderDetail(){
                this.showLoading('获取订单中')
                this.$http.post(api.orderDetail,{
                    ordersn: this.order_id
                }).then(res => {
                    this.hideLoading()
                    this.detail = res.data
                }).catch(e => {
                    this.hideLoading()
                })
            }
        },
        mounted() {
            this.copy();
            this.getOrderDetail();
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '订单详情';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .order-detail-container {
        .header {
            width: 100%;
            background: @mainColor;
            color: #fff;
            font-size: 19px;
            padding: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .look {
                font-size: 15px;
                color: #FCFF00;
            }
        }

        .wuliu-msg {
            display: flex;
            justify-content: space-between;
            background: #fff;
            padding: 12px;
            color: #646464;
            font-size: 15px;
            .title {
                padding-left: 28px;
                background: url(../../assets/image/wuliu.png) no-repeat left center/18px 18px;

            }
            .wuliu-number {
                flex: 1;
                padding-left: 10px;
            }
            .copy-btn {
                color: #5B8EF0;
                border: 0;
                outline: 0;
                background: #fff;
                box-shadow: 0;
            }
        }

        .dashed-line {
            width: 100%;
            height: 3px;
            background: url(../../assets/image/hengtiao.png) no-repeat center center/100% 100%;
        }

        .goods-container {
            background: #fff;
            padding: 10px 0 0;
            margin-top: 10px;
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

        .fixed-option-btn {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #FFFFFF;
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
            background: #FFFFFF;
            text-align: right;
            font-size: 13px;
            color: #909090;
            padding: 8px 12px;
            span {
                color: #323232;
            }
        }

        .progress-time {
            background: #FFFFFF;
            padding: 10px 15px;
            margin: 10px 0;
            color: #909090;
            font-size: 13px;
            line-height: 2;
        }

        .shouhuo, .tihuo-info {
            padding: 10px;
            padding-left: 31px;
            color: #646464;
            font-size: 15px;
            line-height: 2;
            background: #ffffff url(../../assets/image/location.png) no-repeat 9px 16px;
            background-size: 14px 18px;
            .sh-info, .tihuo-ads {
                display: flex;
                justify-content: space-between;
                .sh-ad-con {
                    flex: 1;
                    text-align: left;
                }
            }
        }

        .tihuo-info {
            background: #ffffff url(../../assets/image/tihuo.png) no-repeat 9px center;
            background-size: 16px 15px;
            .tihuo-container {
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>
