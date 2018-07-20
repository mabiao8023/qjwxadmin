<template>
    <div class="order-detail-container">
        <div class="header">
            <div>交易完成</div>
            <div class="look" @click="gotoViewCer">查看凭证></div>
        </div>
        <template v-if="false">
            <div class="wuliu-msg">
                <div class="title">
                    物流信息：

                </div>
                <div class="wuliu-method">
                    申通快递

                </div>
                <div class="wuliu-number" id="copyValue" ref="numbers">
                    {{wuliu}}

                </div>
                <button type="button" class="copy-btn" id="copy" :data-clipboard-text='wuliu'>
                    复制

                </button>
            </div>
            <div class="dashed-line">
            </div>
            <div class="shouhuo">
                <div class="sh-info">
                    <div class="name">
                        收货人：王琪


                    </div>
                    <div class="phone">
                        1232473849


                    </div>
                </div>
                <div class="sh-adress">
                    收货地址：广东省广州市天河区建中路66号


                </div>
            </div>
        </template>
        <template v-if="true">
            <div class="shouhuo">
                <div class="tihuo-ads">
                    <div class="sh-ad-title">
                        提货地址：


                    </div>
                    <div class="sh-ad-con">
                        广东省广州市天河区建中路66号


                    </div>
                </div>
                <div class="sh-info">
                    <div class="name">
                        电话：1232473849


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
                        提货人：王琪


                    </div>
                    <div class="tihuo-phone">
                        1214732894781


                    </div>
                </div>

            </div>
        </template>

        <div class="goods-container">
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
        </div>

        <div class="progress-time">
            <div class="progress-item">
                订单号：2018062312345678


            </div>
            <div class="progress-item">
                订单号：20180623123456789


            </div>
            <div class="progress-item">
                支付时间：2018-06-23 12:23:50


            </div>
            <div class="progress-item">
                发货时间：2018-06-25 12:23:23


            </div>
            <div class="progress-item">
                完成时间：2018-06-31 12:23:23


            </div>
        </div>

        <div class="fixed-option-btn">
            <div class="btn">
                查看物流


            </div>
            <div class="btn" @click="sureShouhuo">
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
    </div>
</template>

<script>
    import '../../assets/js/clipboard'
    export default {
        components: {},
        data () {
            return {
                wuliu: '1231231231'
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
            copy(){
                var clipboard = new Clipboard('button');
                clipboard.on('success', e => {
                    //  e.clearSelection();
                    this.layer('复制成功');
                });
                clipboard.on('error', e => {
                    //   e.clearSelection();
                    this.layer('复制失败，请手动复制');
                });
            },
            gotoViewCer(){
                this.$router.push({
                    path: `/viewcer?id=`
                })
            },
            sureShouhuo(){
                this.$router.push({
                    path: '/received'
                })
            }
        },
        mounted() {
            this.copy();
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
