<template>
    <div class="wxpay-container">
        <div class="wxpay-header">
            <img class="h-logo" src="../../assets/image/logo.png" alt="">
            <p class="h-title">正在跳转支付，请稍等......</p>
        </div>
    </div>
</template>

<script>
    import {cookie} from 'vux'
    import api from '../../assets/js/api'
    import {getParams, weChatPay} from '../../assets/js/util'
    export default {
        components: {},
        data () {
            return {
                code: getParams()['code'] || '',
                order_id: getParams()['order_id'] || ''
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
            goPay(){
                this.showLoading('正在支付')
                this.$http.post(api.pay, {
                    code: this.code,
                    order_id: this.order_id,
                    url: location.href.split('?')[0]
                }).then(res => {
                    this.hideLoading()
                    this.weChatPay()
                    // 调起微信支付
                }).catch(e => {
                    this.hideLoading()
                })
            },
            weChatPay(){
                let _this = this
                this.$wechat.config({
                    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: '', // 必填，公众号的唯一标识
                    timestamp: 12123, // 必填，生成签名的时间戳
                    nonceStr: '', // 必填，生成签名的随机串
                    signature: '',// 必填，签名
                    jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
                })
                this.$wechat.ready(() => {
                    this.$wechat.chooseWXPay({
                        timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: '', // 支付签名随机串，不长于 32 位
                        package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: '', // 支付签名
                        success: function (res) {
                            // 支付成功后的回调函数
                            /*分邮寄和自提支付成功*/
                            _this.$router.push({
                                path: `/postSuc?order_id=${this.order_id}`
                            })
                        },
                        fail: function (e) {
                            _this.layer(e)
                        }
                    });
                })
            }
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '正在支付';
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .wxpay-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        .wxpay-header {
            padding: 55px;
            padding-bottom: 0;
            text-align: center;
            .h-logo {
                width: 103px;
                height: 103px;
            }
            .h-title {
                margin-top: 10px;
                font-size: 20px;
                color: #E1B113;
            }
        }
    }
</style>
