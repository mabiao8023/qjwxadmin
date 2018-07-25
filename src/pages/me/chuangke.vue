<template>
    <div class="chuangke-container">
        <div class="nav">
            <tab class="tab">
                <tab-item selected @on-item-click="onItemClick">待审核</tab-item>
                <tab-item @on-item-click="onItemClick">已代理</tab-item>
                <tab-item @on-item-click="onItemClick">已拒绝</tab-item>
            </tab>
        </div>
        <ul class="js-list">
            <li class="js-item"
                v-for="(item,index) in markers[type].data"
            >
                <template v-if="type == 0">
                    <div class="js-item-part1">
                        <div class="sq-info">
                            申请人：{{item.realname}} {{item.phone}}
                    </div>
                        <div class="sq-status">
                            {{getStatus(item.status)}}
                    </div>
                    </div>
                    <div class="js-item-part2 vux-1px-tb">
                        <div>
                            申请等级：{{item.level}}
                    </div>
                        <div>
                            提交时间：{{item.addTime  | dateFormat('YYYY-MM-DD HH:mm:ss') }}
                    </div>
                    </div>
                    <div class="option-btn">
                        <div class="btn"
                             @click.stop.prevent='showRefuseConfirm(item.id)'>
                            拒绝申请
                        </div>
                        <div class="btn active">
                            通过申请
                        </div>
                    </div>
                </template>
                <template v-if="type == 1">
                    <div class="js-item-part1">
                        <div class="sq-info">
                            代理：{{item.realname}} {{item.phone}}
                        </div>
                        <div class="sq-status">
                            {{getStatus(item.status)}}
                        </div>
                    </div>
                    <div class="js-item-part2 vux-1px-tb">
                        <div>
                            代理等级：{{item.level}}
                    </div>
                        <div>
                            提交时间：{{item.addTime  | dateFormat('YYYY-MM-DD HH:mm:ss') }}
                    </div>
                    </div>
                    <div class="js-item-part3 js-item-part2 vux-1px-b">
                        <div>
                            总订单数：{{item.order.totalAmount}}<br/>
                            总购买金额：¥{{item.order.totalPurchase}}<br/>
                            总赚取佣金：¥{{item.order.totalRebate}}
                        </div>
                        <div>
                            本月订单数：{{item.order.amount}}<br/>
                            本月购买金额：¥{{item.order.purchase}}<br/>
                            本月赚取佣金：¥{{item.order.rebate}}
                        </div>
                    </div>
                    <div class="option-btn">
                        <div class="btn active"
                             @click.stop.prevent='cancelConfirm(item.id)'>
                            取消资格
                        </div>
                    </div>
                </template>
                <template v-if="type == 2">
                    <div class="js-item-part1">
                        <div class="sq-info" v-if="item.status == 2">
                            申请人：{{item.realname}} {{item.phone}}
                        </div>
                        <div class="sq-info" v-if="item.status == 3">
                            代理：{{item.realname}} {{item.phone}}
                        </div>
                        <div class="sq-status">
                            {{getStatus(item.status)}}
                        </div>
                    </div>
                    <div class="js-item-part2 vux-1px-tb">
                        <div>
                            申请等级：{{item.level}}
                    </div>
                        <div>
                            提交时间：{{item.addTime  | dateFormat('YYYY-MM-DD HH:mm:ss') }}
                    </div>
                    </div>
                    <div class="js-item-part2 vux-1px-tb" v-if="item.remark">
                        <div>
                            拒绝原因：{{item.remark || '暂无'}}
                    </div>
                    </div>
                </template>
            </li>
        </ul>
        <Nodata v-if="!markers[type].data.length"></Nodata>
        <infinite-loading @infinite="getList" :distance="100" spinner="circles" ref="infiniteLoading">
            <span slot="no-results">
                <!--暂无数据-->
            </span>
            <span slot="no-more">
                暂无更多数据
            </span>
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import {Tab, TabItem,dateFormat} from 'vux'
    import api from '../../assets/js/api'
    import Nodata from '../../components/nodata.vue'

    export default {
        components: {
            Tab,
            TabItem,
            InfiniteLoading,
            Nodata
        },
        filters: {
            dateFormat
        },
        data () {
            return {
                bottomCount: 0,
                type: 0,
                markers: [
                    {
                        /* 待审核 */
                        page: 1,
                        data: [
                            {
                                "realname": "哈哈",
                                "phone": "1231321",
                                "status": "1",
                                "level": "创客",
                                "addTime": 1312313223,
                                "updateTime": 131321321,
                                "remark": "拒绝原因你太菜了",
                                "order": [
                                    {
                                        "totalAmount": 111,
                                        "totalPurchase": "11",
                                        "totalRebate": "1222",
                                        "amount": "3131",
                                        "purchase": "13123",
                                        "rebate": "131"
                                    }
                                ],
                                "id": "5"
                            }
                        ]
                    },
                    {
                        /* 已代理 */
                        page: 1,
                        data: [{
                            "realname": "哈哈",
                            "phone": "1231321",
                            "status": "1",
                            "level": "创客",
                            "addTime": 1312313223,
                            "updateTime": 131321321,
                            "remark": "拒绝原因你太菜了",
                            "order": [
                                {
                                    "totalAmount": 1,
                                    "totalPurchase": "11",
                                    "totalRebate": "1222",
                                    "amount": "3131",
                                    "purchase": "13123",
                                    "rebate": "131"
                                }
                            ],
                            "id": "5"
                        }]
                    },
                    {
                        /* 已拒绝 */
                        page: 1,
                        data: [{
                            "realname": "哈哈",
                            "phone": "1231321",
                            "status": "2",
                            "level": "创客",
                            "addTime": 1312313223,
                            "updateTime": 131321321,
                            "remark": "拒绝原因你太菜了",
                            "order": [
                                {
                                    "totalAmount": 1,
                                    "totalPurchase": "11",
                                    "totalRebate": "1222",
                                    "amount": "3131",
                                    "purchase": "13123",
                                    "rebate": "131"
                                }
                            ],
                            "id": "5"
                        }]
                    }
                ]
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
            onItemClick(index){
                this.type = index
                this.$nextTick(() => {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                })
            },
            getStatus(status){
                return status == 0 ? '审核中' :  status == 1 ? '已通过' : status == 2 ? '已拒绝' : '已取消资格';
            },
            getList($state){
                let type = this.type == 0 ? 'verify' : this.type == 1 ? 'agent' : 'refuse';
                this.$http.post(api.makerManage,{
                    page: this.markers[this.type].page,
                    type: type
                }).then(res => {
                    if (res.data.length) {
                        this.markers[this.type].data = this.markers[this.type].data.concat(res.data);
                        this.markers[this.type].page++;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }).catch(e => {
                    $state.complete();
                })
            },
            showRefuseConfirm(id){
                const _this = this
                this.$vux.confirm.show({
                    // 组件除show外的属性
                    showInput: true,
                    title: '请填写拒绝原因,反馈给申请人',
                    placeholder: '限15字以内',
                    inputAttrs: {
                        type: 'textarea'
                    },
                    onCancel () {
                        console.log(this) // 非当前 vm
                    },
                    onConfirm (msg) {
                        _this.makerVerifyApply(id,'refuse',msg)
                    }
                })
            },
            cancelConfirm(id){
                const _this = this
                this.$vux.confirm.show({
                    // 组件除show外的属性
                    showInput: true,
                    title: '是否确认取消其代理资格？',
                    placeholder: '（选填）可在此填写取消资格原因',
                    inputAttrs: {
                        type: 'textarea'
                    },
                    onCancel () {
                        console.log(this) // 非当前 vm
                        console.log(_this) // 当前 vm
                    },
                    onConfirm (msg) {
                        _this.makerVerifyApply(id,'cancel',msg)
                    }
                })
            },
            makerVerifyApply(id,type,remark){
                this.showLoading('提交中')
                this.$http.post(api.makerVerifyApply,{
                    id: id,
                    type: type,
                    remark: remark
                }).then(res => {
                    this.hideLoading()
                    this.layer('操作成功')
                    this.markers[this.type].data = []
                    this.markers[this.type].page = 1
                    this.$nextTick(() => {
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                    })
                }).catch(e => {
                    this.hideLoading()
                })
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .chuangke-container {
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
        }

        .js-list {
            padding-top: 44px;
        }

        .js-item {
            margin-top: 10px;
            background: #fff;
            padding: 0 15px;
            padding-top: 6px;
            .js-item-part1 {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid transparent;
                margin-bottom: 6px;
                padding-left: 10px;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 3px;
                    height: 15px;
                    transform: translate(0, -50%);
                    background: #4674E8;

                }
                .sq-info {
                    color: #323232;
                    font-size: 15px;
                }
                .sq-status {
                    color: @mainColor;
                    font-size: 15px;
                }
            }
            .js-item-part2 {
                color: #646464;
                font-size: 14px;
                /*line-height: 2;*/
                padding: 7px 0;
            }
            .js-item-part3 {
                display: flex;
                justify-content: space-between;
                div {
                    width: 50%;
                }
            }
        }

        .option-btn {
            padding: 12px 0;
            font-size: 0;
            text-align: right;
            .btn {
                display: inline-block;
                margin-left: 10px;
                line-height: 30px;
                text-align: center;
                color: #323232;
                font-size: 15px;
                border-radius: 15px;
                padding: 0 15px;
                border: 1px solid #C2C2C2;
                overflow: hidden;
                &.active {
                    color: @mainColor;
                    border: 1px solid @mainColor;
                }
            }

        }
        .total {
            text-align: right;
            font-size: 13px;
            color: #909090;
            padding: 8px 12px;
            span {
                color: #323232;
            }
        }
    }

</style>
