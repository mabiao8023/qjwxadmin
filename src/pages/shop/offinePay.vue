<template>
    <div class="offine-container">
        <div class="offine-header">
            <div class="offine-pay-suc">
                <img class="success-icon" src="../../assets/image/success-icon.png" alt="">
                <p class="success-tip">订单成立，待上传凭证</p>
            </div>
        </div>
        <div class="offine-tip">
            <div class="title">
                请务必阅读以下打款提示信息


            </div>
            <div class="dakuan vux-1px-b" @click="isShowDesc = true">
                *线下打款说明


            </div>
            <div class="bind-dakuan" @click="isShowZh = true">
                *指定打款账号


            </div>
        </div>
        <div class="offine-options">
            <div class="upload vux-1px-r" @click="gotoUpload">
                上传凭证>


            </div>
            <div class="order-detail" @click="gotoOrderDetail">
                查看订单详情>


            </div>
        </div>
        <router-link class="back" :to="{path:'/meIndex'}"></router-link>
        <transition name="fade">
            <div class="desc-pop" v-if="isShowDesc">
                <div class="desc-pop-box">
                    <div class="title vux-1px-b">
                        线下打款说明


                    </div>
                    <div class="sub-desc vux-1px-b">
                        请认真阅读以下线下打款说明和指定打款帐号， 若因打款金额不对造成问题，由自己负责，谨记！


                    </div>
                    <div class="sm-content vux-1px-b">
                        <div class="sub-title">
                            注意点


                        </div>
                        <div class="sub-content">
                            线下打款的含义是您自己通过除了本平台直接付款以外的其他打款操作将钱打至总部或创客空间账户，打款完成请保存打款截图，并上传凭证至此。


                        </div>
                    </div>
                    <div class="sm-content">
                        <div class="sub-title">
                            流程


                        </div>
                        <div class="sub-content">
                            1.将订单需要支付的钱打到总部或创客空间指定的账户中，同时将您的打款凭证截图保留。<br/>
                            2.打款成功后，将您的打款凭证上传提交。 <br/>
                            3.总部或创客空间在审核并确认您的打款申请后，将会第一时间进行发货，或您自己前去提货，请及时留意该订单的状态变化。


                        </div>
                    </div>
                    <div class="pop-sure-btn" @click="isShowDesc = false">确定</div>
                </div>
            </div>
        </transition>
        <!-- 指定账号弹窗 -->
        <transition name="fade">
            <div class="desc-pop" v-if="isShowZh">
                <div class="desc-pop-box">
                    <div class="title vux-1px-b">
                        指定打款帐号


                    </div>
                    <div class="sub-desc vux-1px-b">
                        以下为总部指定财务账户，请选择一种打款方式


                    </div>
                    <div class="sm-content vux-1px-b">
                        <div class="sub-content">
                            支付宝账户：123456@111.com<br/>
                            支付宝户名：xxx


                        </div>
                    </div>
                    <div class="sm-content">
                        <div class="sub-content">
                            开户行：中国银行xxxx支行 <br/>
                            账号：1234578995555<br/>
                            户名：xxx


                        </div>
                    </div>
                    <div class="pop-sure-btn" @click="isShowZh = false">确定</div>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
    import {XInput} from 'vux'
    export default {
        components: {
            XInput
        },
        data () {
            return {
                isShowDesc: false,
                isShowZh: false,
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
            gotoUpload(){
                this.$router.push({
                    path: `/upload?order_id=234`
                })
            },
            gotoOrderDetail(){
                this.$router.push({
                    path: `/orderDetail?order_id=1232`
                })
            }
        },
        mounted() {
            document.getElementsByTagName('title')[0].textContent = '下单成功';
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .offine-header {
        text-align: center;
        background: #fff;
        padding-bottom: 16px;
        margin-bottom: 10px;
        .success-icon {
            width: 65px;
            height: 65px;
            margin: 49px auto 25px;
        }
        .success-tip {
            color: #323232;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .offine-tip {
        padding: 0 18px;
        background: #fff;
        margin-bottom: 10px;
        .title {
            color: @fontColor;
            font-size: 14px;
            padding: 10px 0;
        }
        .dakuan {
            padding: 10px 0;
            color: #646464;
            font-size: 15px;
            background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
        }
        .bind-dakuan {
            padding: 10px 0;
            color: #646464;
            font-size: 15px;
            background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
        }
    }

    .offine-options {
        background: #fff;
        padding: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #909090;
        font-size: 15px;
        text-align: center;
        .upload {
            width: 50%;
        }
        .order-detail {
            width: 50%;
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

    .desc-pop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: rgba(0, 0, 0, .5);
        .desc-pop-box {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300px;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            background: #fff;
            .title {
                color: #323232;
                font-size: 18px;
                padding: 10px 0;
                text-align: center;
            }
            .sub-desc {
                color: #F52C2C;
                font-size: 13px;
                padding: 10px;
            }
            .sm-content {
                padding: 10px;
                .sub-title {
                    color: @fontColor;
                    font-size: 15px;
                }
                .sub-content {
                    color: #323232;
                    font-size: 13px;
                }
            }
            .pop-sure-btn {
                margin: 10px 36px 20px;
                line-height: 40px;
                border-radius: 20px;
                text-align: center;
                color: #323232;
                font-size: 18px;
                background: @mainColor;
            }
        }
    }
</style>
