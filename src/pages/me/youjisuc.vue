<template>
    <div class="youjisuc-container">
        <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
        <p class="success-tip">支付成功</p>
        <p class="success-desc">商家将在1-3个工作日内发货，请随时留意物流信息</p>
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
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '交易成功';
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .youjisuc-container {
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
            padding: 12px 20px;
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
</style>
