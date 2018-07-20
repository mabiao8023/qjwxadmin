<template>
    <div>
        <div class="ziti-list">
            <div class="item vux-1px-b">
                <div class="title">
                    收货人


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="nameInput"
                        v-model="name"
                        placeholder="请输入收货人"
                    ></x-input>
                </div>
            </div>
            <div class="item vux-1px-tb">
                <div class="title">
                    联系电话


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="phoneInput"
                        is-type="china-mobile"
                        v-model="phone"
                        placeholder="请输入联系电话"
                    ></x-input>
                </div>
            </div>
        </div>
        <div class="add-adress" @click="saveInformaton">
            保存


        </div>
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
                name: '',
                phone: ''
            }
        },
        computed: {},
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
            saveInformaton(){
                if (this.$refs.nameInput.valid) {
                    this.layer('请输入收货人')
                } else if (this.$refs.phoneInput.valid) {
                    this.layer('请输入手机号码')
                } else {
                    this.showLoading('正在保存')
                    // 保存信息

                }
            }
        },
        mounted(){
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '自提设置';
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .ziti-list {
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            font-size: 15px;
            padding: 0 12px;
            .title {
                width: 68px;
                color: #646464;
                line-height: 49px;
            }
            .input {
                flex: 1;
                color: #323232;
            }
            .diqu {
                line-height: 49px;
                padding: 0 15px;
                background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
            }
        }
    }

    .add-adress {
        position: fixed;
        z-index: 100;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 45px;
        text-align: center;
        background: @mainColor;
        font-size: 15px;
        color: #323232;
    }
</style>
