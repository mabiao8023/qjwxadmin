<template>
    <div class="balance-container">
        <div class="zhmx" @click="gotoPage('/balanceDetail')">
            <div class="zhmx-title">
                账户明细
            </div>
            <div class="zhmx-arrow">
            </div>
        </div>
        <img class="money-icon" src="../../assets/image/money.png" alt="">
        <p class="current-title">
            当前余额(元)
        </p>
        <p class="current-money">
            {{ account.balance }}
    </p>
        <!-- 提现 -->
        <div class="tixian-btn" @click="submit">
            提现
        </div>
    </div>

</template>

<script>
    import api from '../../assets/js/api'
    export default {
        components: {},
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
                    balance: 0,
                    frost: 0
                }
            }
        },
        methods: {
            layer(text){
                this.$vux.toast.text(text || 'hello', 'middle')
            },
            showLoading  (text){
                this.$vux.loading.show({
                    text: text || '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            gotoPage(link) {
                this.$router.push({
                    path: link
                })
            },
            submit() {
                if(this.account.balance <= 0){
                     this.layer('暂无余额可提现')
                }else{
                    this.$router.push({
                        path: '/tixian'
                    })
                }
            },
            getUserInfo(){
                this.$http.post(api.getUserInfo)
                    .then(res => {
                        this.userInfo = res.data.userinfo;
                        this.account = res.data.account;
                    })
            }
        },
        mounted() {
            this.getUserInfo();
            document.getElementsByTagName('title')[0].textContent = '账户余额';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .balance-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        padding-top: 12px;
        text-align: center;
        .tixian-btn {
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
            margin: 0 12px;
            background: #F7F7F7;
            border-radius: 5px;
            .zhmx-title {
                color: #323232;
                font-size: 15px;
            }
            .zhmx-arrow {
                width: 8px;
                height: 13px;
                background: url(../../assets/image/more-arrow.png) no-repeat center center/100% 100%;
            }
        }

        .money-icon {
            width: 90px;
            height: 90px;
            margin-top: 44px;

        }

        .current-title {
            color: #323232;
            font-size: 15px;
            margin: 15px auto 10px
        }

        .current-money {
            font-size: 40px;
            color: @fontColor;
        }
    }
</style>
