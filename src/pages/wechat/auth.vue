<template>
    <div class="wxpay-container">
        <div class="wxpay-header">
            <img class="h-logo" src="../../assets/image/logo.png" alt="">
            <p class="h-title">正在跳转登录，请稍等......</p>
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
            login(){
                this.showLoading('正在登录')
                this.$http.post(api.wxLogin, {
                    wx_code: this.code
                }).then(res => {
                    this.hideLoading()
                    //  登陆完成后跳转到上一次保存的路径地方
                    if(res.data.openId){
                        cookie.set('my_openId',res.data.openId, {
                            expires: 30
                        })
                    }
                    this.$router.replace({
                        path: '/tixian'
                    })
                }).catch( e => {
                    this.hideLoading();
                })
            }
        },
        mounted() {
            // 设置标题
            document.getElementsByTagName('title')[0].textContent = '正在登录';
            this.login()
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
