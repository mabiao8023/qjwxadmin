<template>
    <div class="tixian-container">
        <div class="p-title">
            提现至: 微信账户

        </div>
        <div class="zhmx">
            <div class="zhmx-title">
                账户

            </div>
            <div class="wx-name">
                {{ userInfo.wx_name }}

            </div>
            <!--<div  class="zhmx-arrow">-->

            <!--</div>-->
        </div>
        <div class="input-money vux-1px-b">
            <x-input
                label-width="30px"
                title="￥"
                v-model="money"
                :placeholder="'最多可提取' + account.balance "
            ></x-input>
        </div>
        <!-- 提现 -->
        <div class="logout" @click="submitCash">
            提交

        </div>
    </div>

</template>

<script>
    import {XInput} from 'vux'
    import api from '../../assets/js/api'

    export default {
        components: {
            XInput
        },
        data () {
            return {
                userInfo: {
                    "user_id": "",
                    "username": "",
                    "nickname": "",
                    "mobile": "",
                    "avatar": "",
                    "identity": "",
                    "wx_name": ""
                },
                identity: {
                    'store': '创客空间',
                    'director': '创客主管',
                    'member': '创客'
                },
                account: {
                    balance: 1000,
                    frost: 1000
                },
                money: ''
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
            getUserInfo(){
                this.$http.post(api.getUserInfo)
                    .then(res => {
                        this.userInfo = res.data.userinfo || {};
                        this.account = res.data.account || {};
                    })
            },
            submitCash(){
                if (this.money <= 0 || parseFloat(this.money) > parseFloat(this.account.balance)) {
                    this.layer('请输入正确的提现金额')
                } else {
                    this.showLoading('提现中')
                    this.$http.post(api.getCash, {
                        money: this.money
                    }).then(res => {
                        this.hideLoading();
                        this.$router.push({
                            path: '/tixiansuc'
                        })
                    }).catch(e => {
                        this.hideLoading();
                    })
                    this.$router.push({
                        path: '/tixiansuc'
                    })
                }
            }
        },
        mounted() {
            this.getUserInfo();
            document.getElementsByTagName('title')[0].textContent = '提现';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .tixian-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        text-align: center;
    }

    .logout {
        width: 90%;
        margin: 48px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 5px;
    }

    .zhmx {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        padding-left: 44px;
        margin: 12px;
        background: #F7F7F7 url(../../assets/image/wechat.png) no-repeat 12px center/25px 20px;
        border-radius: 5px;
        .zhmx-title {
            color: #323232;
            font-size: 15px;
        }
        .zhmx-arrow {
            color: #8D9FA7;
        }
    }

    .p-title {
        color: #323232;
        font-size: 15px;
        font-weight: bold;
        padding-top: 16px;
    }

    .input-money {
        font-size: 20px;
        margin: 12px;
        color: #323232;
        .weui-cell {
            padding: 10px;
        }
    }


</style>
