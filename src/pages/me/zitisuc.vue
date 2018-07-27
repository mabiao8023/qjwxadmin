<template>
    <div class="zitisuc-container">
        <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
        <p class="success-tip">交易成功</p>
        <p class="success-desc">请在7个工作日内到以下地址自提商品</p>
        <div class="zt-adress">
            <div class="zt-ad-item">
                <div class="title">
                    提货地址：


                </div>
                <div class="content">
                    广州市天河区建中路77号五度大厦 东塔1201室


                </div>
            </div>
            <div class="zt-ad-item">
                <div class="title">
                    联系电话：


                </div>
                <div class="content">
                    020-123456789


                </div>
            </div>
            <div class="zt-ad-item">
                <div class="title">
                    提货时间：



                </div>
                <div class="content">
                    周一至周五 9:00-18:00



                </div>
            </div>
        </div>
        <router-link class="goto" :to="{path:'/orderDetail?order_id=' + order_id}">查看订单详情></router-link>
        <router-link class="back" :to="{path:'/meIndex'}"></router-link>
    </div>
</template>

<script>
    import {getParams} from '../../assets/js/util'
    export default {
        components: {},
        data () {
            return {
                order_id: getParams()['order_id'] || ''
            }
        },
        methods: {},
        mounted() {
            document.getElementsByTagName('title')[0].textContent = '交易成功';
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .zitisuc-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        text-align: center;
        .success-icon {
            width: 65px;
            height: 65px;
            margin: 90px auto 35px;
        }

        .success-tip {
            color: #323232;
            font-size: 20px;
            font-weight: bold;
        }

        .success-desc {
            padding: 12px 30px;
            color: #909090;
            font-size: 14px;
        }
    }

    .back {
        position: fixed;
        bottom: 60px;
        right: 23px;
        width: 40px;
        height: 40px;
        background: url(../../assets/image/back-home.png) no-repeat center center/100% 100%;
    }

    .goto {
        color: @fontColor;
        font-size: 15px;
        margin-top: 22px;
    }

    .zt-adress {
        margin: 25px;
        padding: 12px;
        background: #F0F0F0;
        font-size: 14px;
        color: #646464;
        text-align: left;
        .zt-ad-item {
            display: flex;
            .title {
                width: 80px;
            }
            .content {
                flex: 1;
            }
        }
    }
</style>
