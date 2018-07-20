<template>
    <div class="page-container">
        <div class="header">
            欢迎注册成为我司创客，请您务必认真填写以下信息


        </div>
        <ul class="input-list">
            <li class="input-item vux-1px-b">
                <div class="title num1-title">
                    所属创客空间


                </div>
                <div class="input">
                    <x-input
                        v-model="tjname"
                        placeholder="xx创客空间"
                    ></x-input>
                </div>
            </li>
            <li class="input-item vux-1px-b">
                <div class="title">
                    *真实信息


                </div>
                <div class="input">
                    <x-input
                        v-model="name"
                        required
                        ref="nameInput"
                        is-type="china-name"
                        placeholder="请填写真实姓名"
                    ></x-input>
                </div>
            </li>
            <li class="input-item vux-1px-b">
                <div class="title">
                    *电话


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="phoneInput"
                        is-type="china-mobile"
                        v-model="phone"
                        placeholder="请填写真实电话(登录账号使用)"
                    ></x-input>
                </div>
            </li>
            <li class="input-item vux-1px-b">
                <div class="title">
                    *验证码


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="codeInput"
                        v-model="code"
                        placeholder="请输入验证码"
                    ></x-input>
                </div>
                <div class="code"
                     v-if="!isSendCoding"
                     @click="sendCode">
                    获取验证码


                </div>
                <div class="code disable" v-else>
                    重发(

                    <countdown v-model="time" :start="isSendCoding" @on-finish="finish"></countdown>
                    )


                </div>
            </li>
            <li class="input-item vux-1px-b">
                <div class="title">
                    *密码


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="pwdInput"
                        v-model="password"
                        placeholder="请输入密码"
                    ></x-input>
                </div>
            </li>
            <li class="input-item vux-1px-b">
                <div class="title">
                    *确认密码


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="rePwdInput"
                        v-model="rePassword"
                        placeholder="请再次输入密码"
                    ></x-input>
                </div>
            </li>
            <li class="input-item hetong vux-1px-b">
                <div class="title">
                    *上传合同


                </div>
                <div class="input">
                    <div class="upload-item" @click="chooseImg">

                    </div>
                </div>
            </li>
        </ul>
        <div class="logout" @click="submit">
            提交申请


        </div>
        <!-- 图片上传组件 -->
        <UploadPhoto ref="uploadPhoto"
                     @getImgData="getImgDataUrl"
                     @progress="uploadProgress"
                     @uploadResData="uploadResData"
        ></UploadPhoto>
        <div v-transfer-dom>
            <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>
    </div>
</template>

<script>
    import {XInput, Countdown, Previewer, TransferDom} from 'vux'
    import api from '../../assets/js/api'
    import UploadPhoto from '../../components/uploadPhoto.vue'
    import {getParams} from '../../assets/js/util'
    export default {
        directives: {
            TransferDom
        },
        components: {
            XInput,
            Countdown,
            UploadPhoto,
            Previewer
        },
        data () {
            return {
                tjname: '',
                name: '',
                phone: '',
                code: '',
                password: '',
                rePassword: '',
                time: 90,
                start: true,
                isSendCoding: false,
                list: [],
                id: getParams()['id'] || ''
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
            finish(){
                this.isSendCoding = false;
                this.time = 90;
            },
            sendCode(){
                if (!this.$refs.phoneInput.valid) {
                    this.layer('请输入正确的手机号码')
                } else {
                    this.$http.post(api.getCode, {
                        event: 'register',
                        mobile: this.phone
                    }).then(res => {
                        this.isSendCoding = true;
                    })
                }
            },
            chooseImg(){
                this.$refs['uploadPhoto'].$el.click();
            },
            // 父组件监听子组件上传图片返回的base64的数据，用于本地显示图片
            getImgDataUrl(value){
                //  value -> 图片base64的数
                //  console.log(value);
            },
            uploadProgress(value){
                // value -> 图片上传的进度百分比，会实时更新，用于进度条显示
                // console.log(value);
            },
            uploadResData(value){
                if (value.type == 'success') {
                    let img = new Image();
                    let that = this;
                    img.src = value.image_url;
                    // 加载完成后在进行发消息
                    img.onload = function () {
                        //  提示上传成功
                    }
                } else {
                    // 上传失败
                }
            },
            show (index) {
                this.$refs.previewer.show(index)
            },
            deletePhoto (index){
                this.list.splice(index, 1);
            },
            submit(){
                if (!this.$refs.nameInput.valid) {
                    this.layer('请填写真实姓名')
                } else if (!this.$refs.phoneInput.valid) {
                    this.layer('请填写正确的手机号')
                } else if (!this.$refs.codeInput.valid) {
                    this.layer('请填写验证码')
                } else if (!this.$refs.pwdInput.valid) {
                    this.layer('请填写密码')
                } else if (!this.$refs.rePwdInput.valid) {
                    this.layer('请确认密码')
                } else if (this.list.length <= 0) {
                    this.layer('请上传合同')
                } else {
                    this.showLoading('提交中')
                }
            }
        },
        mounted() {
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '注册';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .header {
        background: #fff;
        color: #F52C2C;
        font-size: 15px;
        padding: 13px 15px;
        margin-bottom: 10px;
    }

    .input-list {
        padding: 0 17px;
        background: #fff;
        .input-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                width: 70px;
                color: #323232;
            }
            .num1-title {
                width: 90px;
            }
            .input {
                flex: 1;
            }
            .code {
                line-height: 30px;
                background: @mainColor;
                text-align: center;
                color: #323232;
                border-radius: 15px;
                padding: 0 9px;
                font-size: 14px;
            }
            .disable {
                background: #C5C5C5;
                color: #fff;
            }
        }
        .hetong {
            display: block;
            padding: 10px 0;
            .title {
                padding-bottom: 10px;
            }
        }
    }

    .logout {
        width: 90%;
        margin: 91px auto 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #323232;
        font-size: 17px;
        background: @mainColor;
        border-radius: 22px;
    }

    .upload-item {
        position: relative;
        width: 74px;
        height: 74px;
        margin-right: 10px;
        /*border-radius: 10px;*/
        background: url(../../assets/image/add-photo.png) no-repeat center center/100% 100%;
        img {
            width: 100%;
            height: 100%;
        }
        .delete-photo {
            position: absolute;
            top: -7px;
            right: -7px;
            width: 15px;
            height: 15px;
            background: url(../../assets/image/photo-delete.png) no-repeat center center/100% 100%;
        }
    }
</style>
