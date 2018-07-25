<template>
    <div class="page-container">
        <ul class="modify-list">
            <li class="setting-item">
                <div class="setting-title">
                    旧密码


                </div>
                <div class="setting-con">
                    <x-input
                        required
                        ref="oldPwdInput"
                        type="password"
                        v-model="oldPwd"
                        placeholder="请输入旧密码"
                    ></x-input>
                </div>

            </li>
            <li class="setting-item vux-1px-t">
                <div class="setting-title">
                    新密码


                </div>
                <div class="setting-con">
                    <x-input
                        required
                        ref="newPwdInput"
                        type="password"
                        v-model="newPwd"
                        placeholder="请输入新密码"
                    ></x-input>
                </div>
            </li>
            <li class="setting-item vux-1px-t">
                <div class="setting-title">
                    确认新密码


                </div>
                <div class="setting-con">
                    <x-input
                        required
                        ref="reNewPwdInput"
                        type="password"
                        v-model="reNewPwd"
                        placeholder="请再次输入新密码"
                    ></x-input>
                </div>
            </li>
        </ul>
        <!-- 确认修改 -->
        <div class="logout" @click="surePwd">
            确认修改


        </div>
    </div>

</template>

<script>
    import {XInput, cookie} from 'vux'
    import api from '../../assets/js/api'
    export default {
        components: {
            XInput
        },
        data () {
            return {
                oldPwd: '',
                newPwd: '',
                reNewPwd: ''
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
            surePwd(){
                if (!this.$refs.oldPwdInput.valid) {
                    this.layer('请输入原来的密码')
                } else if (!this.$refs.newPwdInput.valid) {
                    this.layer('请输入新的密码')
                } else if (this.newPwd != this.reNewPwd) {
                    this.layer('请输入一致的新密码')
                } else {
                    this.showLoading('修改中')
                    this.$http.post(api.modifyPwd, {
                        oldpassword: this.oldPwd,
                        newpassword: this.newPwd,
                        renewpassword: this.reNewPwd
                    }).then(res => {
                        this.hideLoading();
                        if (res.code == 1) {
                            this.layer('修改成功，重新登录')
                            cookie.remove('token')
                            this.$router.push({
                                path: '/login'
                            })
                        }
                    }).catch(e => {
                        this.hideLoading()
                    })
                }
            }
        },
        mounted() {
            document.getElementsByTagName('title')[0].textContent = '修改密码';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .modify-list {
        margin-top: 10px;
        background: #fff;
        padding: 0 12px;
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px 0;
        }
        .setting-con {
            flex: 1;
            color: #323232;
            font-size: 15px;
        }
        .setting-title {
            width: 80px;
            color: #646464;
            font-size: 15px;
        }
    }

    .logout {
        width: 90%;
        margin: 334px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 5px;
    }
</style>
