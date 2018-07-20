<template>
    <div>
        <div class="add-address-list">
            <div class="item">
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
                        is-type="china-mobile"
                        v-model="phone"
                        ref="phoneInput"
                        placeholder="请输入联系电话"
                    ></x-input>
                </div>
            </div>
            <div class="item vux-1px-b">
                <div class="title">
                    所在地区


                </div>
                <div class="input diqu" @click="showAddress = true">
                    {{ address }}


                </div>
            </div>
            <div class="item">
                <div class="title">
                    详细地址


                </div>
                <div class="input">
                    <x-input
                        required
                        ref="addressDetailInput"
                        v-model="addressDetail"
                        placeholder="请输入详细地址"
                    ></x-input>
                </div>
            </div>
        </div>
        <div class="add-adress" @click="editAddress">
            保存


        </div>
        <x-address style="display:none;" :raw-value="true" title="" v-model="value" :list="addressData"
                   placeholder="请选择地址" :show.sync="showAddress"></x-address>
    </div>
</template>

<script>
    import {XAddress, ChinaAddressV4Data, XInput, Value2nameFilter as value2name} from 'vux'
    import api from '../../assets/js/api'
    import {getParams} from '../../assets/js/util'
    export default {
        components: {
            XAddress,
            XInput
        },

        data () {
            return {
                addressData: ChinaAddressV4Data,
                showAddress: false,
                name: '',
                phone: '',
                addressDetail: '',
                value: ['北京市', '市辖区', '朝阳区'],
                type: getParams()['type'] || 'add',
                address_id: getParams()['id'] || ''
            }
        },
        computed: {
            address() {
                return value2name(this.value, ChinaAddressV4Data)
            },
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
            editAddress(){
                if (!this.$refs.nameInput.valid) {
                    this.layer('请输入收货人')
                } else if (!this.$refs.phoneInput.valid) {
                    this.layer('请输入联系电话')
                } else if (!this.$refs.addressDetailInput.valid) {
                    this.layer('请输入详细地址')
                } else {
                    let area = this.address.split(" ")
                    let data = {
                        name: this.name,
                        phone: this.phone,
                        address: this.addressDetail,
                        area: {
                            province: area[0],
                            city: area[1],
                            district: area[2]
                        }
                    }
                    if (this.type === 'edit') {
                        data.address_id = this.address_id
                    }
                    this.showLoading('正在添加');
                    this.$http.post(api.addressEditConfirm, data)
                        .then(res => {
                            this.hideLoading()
                            this.layer('添加成功')
                        }).catch(e => {
                        this.hideLoading()
                    })
                }
            },
            getAddress(){
                this.showLoading()
                this.$http.get(api.addressGet, {
                    address_id: this.address_id
                }).then(res => {
                    this.hideLoading()
                    this.name = res.name
                    this.phone = res.phone
                    this.addressDetail = res.address
                    this.value = [res.area.province, res.area.city, res.area.district]
                }).catch(e => {
                    this.hideLoading()
                })
            }
        },
        mounted(){
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '添加地址';
            this.address_id && this.getAddress();
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/common.less";
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    .add-address-list {
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
