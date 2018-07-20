<template>
    <div>
        <ul class="setting-list">
            <li class="setting-item">
                <div class="setting-title">
                    已绑定手机


                </div>
                <div class="setting-con">
                    {{ userInfo.mobile }}


                </div>
            </li>
            <li class="setting-item vux-1px-t">
                <div class="setting-title">
                    账号等级


                </div>
                <div class="setting-con">
                    {{ identity[userInfo.identity] }}


                </div>
            </li>
        </ul>
        <ul class="setting-list">
            <li class="setting-item" @click="gotoPage('/balance')">
                <div class="setting-title">
                    账号余额管理


                </div>
                <div class="setting-arrow">

                </div>
            </li>
            <li class="setting-item vux-1px-t" @click="gotoPage('/modifyPwd')">
                <div class="setting-title">
                    修改登录密码


                </div>
                <div class="setting-arrow">

                </div>
            </li>
        </ul>
        <ul class="setting-list">
            <li class="setting-item">
                <div class="setting-title">
                    版本


                </div>
                <div class="setting-con">
                    v1.0


                </div>
            </li>
        </ul>
        <!-- 退出登录 -->
        <div class="logout" @click="logout">
            退出登陆


        </div>
    </div>

</template>

<script>
    import api from '../../assets/js/api'
    import {cookie} from 'vux'
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
            showLoading(text){
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
            getUserInfo(){
                this.$http.post(api.getUserInfo)
                    .then(res => {
                        if (res.code == 1) {
                            this.userInfo = res.data.userinfo;
                            this.account = res.data.account;
                        }
                    })
            },
            logout(){
//              this.layer('修改成功，重新登录')
                cookie.remove('token')
                this.$router.push({
                    path: '/login'
                })
            }
        },
        mounted() {
            this.getUserInfo();
            document.getElementsByTagName('title')[0].textContent = '设置';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .setting-list {
        margin-top: 10px;
        background: #fff;
        padding: 0 12px;
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
        }
        .setting-title {
            color: #323232;
            font-size: 15px;
        }
        .setting-title {
            color: #646464;
            font-size: 15px;
        }
        .setting-arrow {
            width: 8px;
            height: 13px;
            background: url(../../assets/image/more-arrow.png) no-repeat center center/100% 100%;
        }
    }

    .logout {
        width: 90%;
        margin: 234px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 5px;
    }
</style>
