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
                order_id: getParams()['order_id'] || '',
                delivery: getParams()['delivery'] || '',   //  1  邮寄   2 自提
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
                this.$http.post(api.paymentReady, {
                    ordersn: this.order_id,
                }).then(res => {
                    let _this = this
                    this.hideLoading()
                    // 调起微信支付
                    this.$wechat.chooseWXPay({
                        timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
                        package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: res.data.paySign, // 支付签名
                        success: function (res) {
                            // 支付成功后的回调函数
                            /*分邮寄和自提支付成功*/
                            if(_this.delivery == 1){
                                _this.$router.replace({
                                    path: `/postSuc?order_id=${_this.order_id}`
                                })
                            }else{
                                _this.$router.replace({
                                    path: `/selfGetSuc?order_id=${_this.order_id}`
                                })
                            }
                        },
                        fail: function (e) {
                            _this.layer(e)
                            cookie.remove('my_openId')
                            _this.$router.replace({
                                path: `/pay?order_id=${_this.order_id}`
                            })
                        },
                        cancel: function(){
                            _this.layer('您已放弃支付')
                            _this.$router.replace({
                                path: `/orderDetail?order_id=${_this.order_id}`
                            })
                        }
                    });
                }).catch(e => {
                    this.hideLoading()
                })
            },
            getConfig(){
                this.$http.post(api.orderPayment, {
                    ordersn: this.order_id,
                }).then(res => {
                    this.$wechat.config({
                        debug: false,
                        appId: res.data.signPackage.appId,
                        timestamp: res.data.signPackage.timestamp,
                        nonceStr: res.data.signPackage.nonceStr,
                        signature: res.data.signPackage.signature,
                        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
                    })
                    // 调起微信支付
                    this.$wechat.ready(() => {
                        this.goPay()
                    })
                }).catch(e => {
                    this.hideLoading()
                })
            },
            login(){
                this.$http.post(api.wxLogin, {
                    wx_code: this.code
                }).then(res => {
                    //  登陆完成后跳转到上一次保存的路径地方
                    if(res.data.openId){
                        cookie.set('my_openId',res.data.openId, {
                            expires: 30
                        })
                    }
                    this.getConfig()
                }).catch(e => {
                    this.hideLoading()
                })
            },
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '正在支付';
            this.showLoading('正在支付')
            if( cookie.get('my_openId') ){
                this.getConfig()
            }else{
                this.login()
            }
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
