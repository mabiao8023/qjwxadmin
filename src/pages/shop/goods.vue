<template>
    <div>
        <div class="goods-header">
            <search
                @on-change="getResult"
                v-model="search"
                :auto-fixed="false"
                @on-submit="onSubmit"
                placeholder="请输入商品名称"
                ref="search">
            </search>
            <tab class="tab">
                <tab-item selected @on-item-click="onItemClick">全部</tab-item>
                <tab-item @on-item-click="onItemClick">促销</tab-item>
                <tab-item @on-item-click="onItemClick">正价</tab-item>
            </tab>
        </div>
        <div class="goods-box2">
            <div v-for="(item,index) in goods" class="shop-container vux-1px-b">
                <div class="shop-img">
                    <x-img class="shop-detail-image"
                           :src="item.good_photo" alt="">
                    </x-img>
                </div>
                <div class="shop-detail">
                    <div class="shop-title">
                        {{ item.good_name }}


                    </div>
                    <div class="shop-nums">
                        库存：{{item.stock}}


                    </div>
                    <div class="shop-data">
                        <div class="shop-price">￥{{item.good_price}}(返利￥{{item.rebate}})</div>
                        <inline-x-number button-style="round" v-model="item.number" :min="0" :max="item.stock"
                                         width="30px"></inline-x-number>
                    </div>
                </div>
            </div>
        </div>
        <Nodata v-if="!goods.length"></Nodata>
        <infinite-loading @infinite="getGoods" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">

                </span>
            <span slot="no-more">
                    暂无更多商品
                </span>
        </infinite-loading>
        <!-- 去购物车 -->
        <div class="shopping-cart">
            <div class="total-price">
                合计：<span>￥{{total.totalMoney}}（返利¥{{total.totalReMoney}}）</span>
            </div>
            <div class="shopping-cart-btn" @click="gotoShopCart">
                进货车({{total.totalNumber}})


            </div>
        </div>
    </div>
</template>

<script>
    import {Search, Tab, TabItem, XImg, InlineXNumber,} from 'vux'
    import InfiniteLoading from 'vue-infinite-loading'
    import Nodata from '../../components/nodata.vue'
    import api from '../../assets/js/api'
    export default {
        components: {
            Search,
            Tab,
            TabItem,
            XImg,
            InlineXNumber,
            InfiniteLoading,
            Nodata
        },
        data () {
            return {
                search: '',
                onFetching: false,
                bottomCount: 0,
                changeValue: 1,
                value: 1,
                type: 'all',
                types: ['all', 'discount', 'count'],
                all: {
                    page: 1,
                    data: [
//                        {
//                            "good_name": "杜蕾斯",
//                            "stock": 10,
//                            "good_price": 88,
//                            "rebate": 2,
//                            "id": "1",
//                            "good_photo": "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1415756910,4153057836&fm=202&mola=new&crop=v1"
//                        }
                    ]
                },
                discount: {
                    page: 1,
                    data: [
//                        {
//                        "good_name": "杜蕾斯",
//                        "stock": 10,
//                        "good_price": 288,
//                        "rebate": 12,
//                        "id": "1",
//                        "good_photo": "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1415756910,4153057836&fm=202&mola=new&crop=v1"
//                    }
                    ]
                },
                count: {
                    page: 1,
                    data: [
//                        {
//                        "good_name": "杜蕾斯",
//                        "stock": 10,
//                        "good_price": 188,
//                        "rebate": 5,
//                        "id": "1",
//                        "good_photo": "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1415756910,4153057836&fm=202&mola=new&crop=v1"
//                    }
                    ]
                },
                shoppingTrolley: 0,
                // 添加进购物车

            }
        },
        computed: {
            goods(){
                return this[this.type].data;
            },
            total(){
                let allMoney = 0,
                    discountMoney = 0,
                    countMoney = 0,
                    allReMoney = 0,
                    discountReMoney = 0,
                    countReMoney = 0,
                    allNumber = 0,
                    discountNumber = 0,
                    countNumber = 0,
                    checkedGoods = [];
                this.all.data.forEach(val => {
                    if (val.number > 0) {
                        allMoney += val.good_price * val.number;
                        allReMoney += val.rebate * val.number;
                        allNumber += val.number;
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                this.discount.data.forEach(val => {
                    if (val.number > 0) {
                        discountMoney += val.good_price * val.number
                        discountReMoney += val.rebate * val.number
                        discountNumber += val.number;
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                this.count.data.forEach(val => {
                    if (val.number > 0) {
                        countMoney += val.good_price * val.number
                        countReMoney += val.rebate * val.number
                        countNumber += val.number;
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                return {
                    totalMoney: (allMoney + discountMoney + countMoney) || 0,
                    totalNumber: (allNumber + discountNumber + countNumber) || 0,
                    totalReMoney: (allReMoney + discountReMoney + countReMoney) || 0
                };
            },
            totalRebate(){

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
            onSubmit () {
                // 搜索
                this.$refs.search.setBlur()
                this.resetData();
            },
            resetData(){
                this.all.page = 1;
                this.all.data = [];
                this.discount.page = 1;
                this.discount.data = [];
                this.count.page = 1;
                this.count.data = [];
                this.$nextTick(() => {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                })
            },
            getResult(){
                this.resetData();
            },
            getGoods ($state) {
                //  获取商品列表
                this.$http.post(api.getGoods, {
                    type: this.type,
                    page: this[this.type].page,
                    name: this.search
                }).then(res => {
                    if (res.data.length) {
                        res.data.forEach(val => {
                            val.number = 0
                        })
                        this[this.type].data = this[this.type].data.concat(res.data);
                        this[this.type].page++;
                        this.shoppingTrolley = res.data.shoppingTrolley;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }).catch(e => {
                    $state.complete();
                })
            },
            change(data){
                console.log(data)
            },
            onItemClick(index){
                this.type = this.types[index]
                this.$nextTick(() => {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                })
            },
            gotoShopCart(){
                let checkedGoods = [];
                this.all.data.forEach(val => {
                    if (val.number > 0) {
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                this.discount.data.forEach(val => {
                    if (val.number > 0) {
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                this.count.data.forEach(val => {
                    if (val.number > 0) {
                        checkedGoods.push({
                            good_id: val.id,
                            amount: val.number
                        })
                    }
                })
                if (checkedGoods.length <= 0) {
                    return this.layer('请选择商品')
                }
                this.showLoading('正在添加')
                this.$http.post(api.shoppingTrolleyAdd, {
                    good: checkedGoods
                }).then(res => {
                    this.hideLoading()
                    this.$router.push({
                        path: '/shopCart'
                    })
                }).catch(e => {
                    this.hideLoading()
                })
                this.$router.push({
                    path: '/shopCart'
                })
            }
        },
        mounted(){
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '内购商城';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    body {
        padding-bottom: 50px;
    }

    .goods-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        .tab {
            margin-top: -2px;
        }
        .weui-search-bar__label {
            text-align: left !important;
            background: #F5F5F5 !important;
            color: #ACACAC !important;
            font-size: 15px !important;
            padding-left: 6px;
        }
        .weui-search-bar__form{
            border-radius: 4px;
        }
        .weui-icon-search,.weui-icon-clear{
            line-height: 37px!important;
        }
        .weui-search-bar__input{
            line-height: 37px!important;
            height: 37px!important;
            padding: 0!important;
        }
        .weui-search-bar__cancel-btn {
            font-size: 15px;
            line-height: 37px
        }
        .weui-search-bar__label span{
            font-size: 15px;
        }
        .weui-search-bar {
            padding-bottom: 4px !important;
        }
        .vux-tab-item {
            line-height: 40px !important;
        }
        .vux-tab {
            height: 40px !important;
        }
    }

    .goods-box2 {
        margin-top: 83px;
        padding: 0 10px;
        /*padding-bottom: 50px;*/
        background: #fff;
        .shop-container {
            display: flex;
            padding: 10px 0;
            .shop-img {
                width: 70px;
                height: 70px;
                overflow: hidden;
                margin-right: 20px;
                .shop-detail-image {
                    width: 70px;
                    height: 70px;
                }
            }
            .shop-detail {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                text-align: left;
                font-size: 15px;
                .shop-title {
                    width: 100%;
                    color: #323232;
                    font-size: 15px;
                }
                .shop-nums {
                    width: 100%;
                    margin-top: 25px;
                    font-size: 13px;
                    color: #909090;
                }
            }
        }
        .shop-data {
            display: flex;
            margin-top: 5px;
            width: 100%;

            justify-content: space-between;
            align-items: center;
            color: #E1B113;
            .shop-price {
                font-size: 15px;
            }
        }
    }

    .vux-number-selector-plus {
        padding: 0px 0px !important;
    }

    .vux-number-selector-sub {
        padding: 0px 0px !important;
    }

    .vux-number-input {
        font-size: 14px !important;
    }

    svg {
        width: 15px;
        height: 15px;
        margin-bottom: 2px;
    }

    .shopping-cart {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        background: #fff;
        border-top: 1px solid #eaeaea;
        .total-price {
            flex: 1;
            color: #323232;
            padding-left: 15px;
            span {
                color: #F52C2C;
            }
        }
        .shopping-cart-btn {
            width: 127px;
            color: #000;
            background: #F9CD3B url(../../assets/image/shopcar.png) no-repeat 16px center/18px 18px;
            padding-left: 38.5px;
        }
    }
</style>
