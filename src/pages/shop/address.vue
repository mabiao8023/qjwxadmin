<template>
    <div>
        <div class="address-header">
            <div class="title">
                共<span>{{list.length}}</span>条地址记录


            </div>
            <div class="edit" v-if="!isEdit" @click="isEdit = true">
                编辑


            </div>
            <div class="edit complete" v-else>
                完成


            </div>
        </div>
        <div v-if="list.length" class="adress-list">
            <div
                class="adress-item vux-1px-b"
                v-for="(item,index) in list"
            >
                <div class="info">
                    <div class="name">
                        {{ item.name }}


                    </div>
                    <div class="phone">
                        {{ item.phone }}


                    </div>
                </div>
                <div class="adress">
                    <span v-if="item.type == 'default'">[默认地址]</span>{{item.address}}


                </div>
                <div class="edit-address vux-1px-t" v-if="isEdit">
                    <div class="main-address"
                         @click="setMainAddress"

                    >
                        <div v-show="item.type != 'default'">
                            <check-icon size="20" :value.sync="demo1"></check-icon>
                            <span>设为默认地址</span>
                        </div>
                    </div>
                    <div class="edit-address-option">
                        <div class="edit" @click="gotoEditAddress(item.address_id)">
                            编辑


                        </div>
                        <div class="delete" @click="deleteAddress">
                            删除


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nodata v-if="list.length <= 0"></Nodata>
        <div class="add-adress" @click="gotoAddAddress">
            添加新地址


        </div>
    </div>
</template>

<script>
    import {CheckIcon} from 'vux'
    import api from '../../assets/js/api'
    import Nodata  from '../../components/nodata.vue'

    export default {
        components: {
            CheckIcon,
            Nodata
        },
        data () {
            return {
                demo1: false,
                bottomCount: 2,
                isEdit: false,
                list: [
                    {
                        "name": "张三",
                        "phone": 12323,
                        "address": "广东省广州市",
                        "type": "default",
                        "address_id": 1
                    },
                    {
                        "name": "张三",
                        "phone": 12323,
                        "address": "北京省天津市",
                        "type": "normal",
                        "address_id": 2
                    },
                ]
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
            deleteAddress(){
                const _this = this;
                this.$vux.confirm.show({
//                    title: '系统提示',
                    content: '删除后不可恢复，确认删除？',
                    // 组件除show外的属性
                    onCancel () {
                        console.log(this) // 非当前 vm
                        console.log(_this) // 当前 vm
                    },
                    onConfirm () {
                    }
                })
            },
            setMainAddress(){
                const _this = this;
                this.$vux.confirm.show({
                    //                    title: '系统提示',
                    content: '确定设置为默认地址？',
                    // 组件除show外的属性
                    onCancel () {
                        console.log(this) // 非当前 vm
                        console.log(_this) // 当前 vm
                    },
                    onConfirm () {
                    }
                })
            },
            gotoEditAddress(id){
                this.$router.push({
                    path: `/addAddress?type=edit&id=${id}`
                })
            },
            gotoAddAddress(){
                this.$router.push({
                    path: '/addAddress?type=add'
                })
            },
            // 获取地址列表
            getAddressList(){
                this.showLoading('正在获取')
                this.$http.post(api.addressManage)
                    .then(res => {
                        this.hideLoading();
                        this.list = res.data;
                    }).catch(e => {
                    this.hideLoading();
                })
            }
        },
        mounted(){
            this.getAddressList();
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '收货地址管理';
        }
    }
</script>
<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .address-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: #fff;
        margin-bottom: 10px;
        color: #323232;
        font-size: 15px;
        span {
            color: #F52C2C;
        }
        .complete {
            color: @fontColor;
        }
    }

    .adress-list {
        .adress-item {
            padding: 12px 14px;
            padding-bottom: 0;
            color: #323232;
            font-size: 15px;
            background: #fff;
            margin-top: 10px;
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .adress {
                span {
                    color: @fontColor;
                }
                padding-bottom: 10px;
            }
            .edit-address {
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 38px;
            }
            .edit-address-option {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .edit {
                padding-left: 19px;
                margin-right: 10px;
                background: url(../../assets/image/write.png) no-repeat left center/15px 15px;
            }
            .delete {
                padding-left: 19px;
                background: url(../../assets/image/delete.png) no-repeat left center/15px 15px;
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

    .weui-icon-circle, .weui-icon-success {
        font-size: 20px !important;
    }
</style>
