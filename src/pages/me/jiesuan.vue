<template>
    <div class="jiesuan-container">
        <div class="js-header">
            <div class="h-title">
                待结算（元）


            </div>
            <div class="h-money">
                {{ frost }}


            </div>
        </div>
        <ul class="js-list">
            <li class="js-item"
                v-for="(item,index) in frostLog"
                @click="gotoSettleDetail(item.id)"
            >
                <div class="js-item-part1">
                    <div class="left">
                        {{ item.money }}


                    </div>
                    <div class="right">
                        {{ item.status == 0 ? '审核冻结中' : item.status == 1 ? '审核通过' : '审核失败' }}


                    </div>
                </div>
                <div class="js-item-part2">
                    <div class="left">
                        返利时间：{{ item.addTime | dateFormat('YYYY-MM-DD') }}


                    </div>
                    <div>
                        预计解冻时间：{{ item.thawingTime | dateFormat('YYYY-MM-DD') }}


                    </div>
                </div>
            </li>
        </ul>
        <infinite-loading @infinite="getList" :distance="100" spinner="circles" ref="infiniteLoading">
          <span slot="no-results">
              暂无数据
          </span>
            <span slot="no-more">
              暂无更多数据
          </span>
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import api from '../../assets/js/api'
    import {dateFormat} from 'vux'
    export default {
        components: {
            InfiniteLoading
        },
        filters: {
            dateFormat
        },
        data () {
            return {
                page: 1,
                frost: 0,
                frostLog: [
                    {
                        "rebate": 1,
                        "addTime": 1,
                        "thawingTime": 1,
                        "status": 1,
                        "id": "11"
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
            getList ($state) {
                this.$http.post(api.accountFrostLog)
                    .then(res => {
                        if (res.code == 1) {
                            this.frost = res.data.frost
                            if (res.data.frostLog.length) {
                                this.page++
                                this.frostLog = this.frostLog.concat(res.data.frostLog)
                                $state.loaded()
                            } else {
                                $state.complete()
                            }
                        }
                    }).catch(e => {
                    $state.complete()
                })
            },
            gotoSettleDetail(id){
                this.$router.push({
                    path: `/settleDetail?nid=${id}`
                })
            }
        },
        mounted() {
            document.getElementsByTagName('title')[0].textContent = '待结算';
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    .jiesuan-container {
        .js-header {
            width: 100%;
            height: 120px;
            background: @mainColor;
            color: #fff;
            padding: 16px 24px;
            .h-title {
                font-size: 15px;
            }
            .h-money {
                text-align: center;
                font-size: 40px;
            }
        }

        .js-item {
            margin-top: 10px;
            padding: 0 15px;
            background: #fff;
            .js-item-part1 {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                .left {
                    color: #323232;
                    font-size: 20px;
                }
                .right {
                    color: @fontColor;
                    font-size: 15px;
                }
            }
            .js-item-part2 {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 8px;
                color: #909090;
                font-size: 14px;
            }
        }
    }

</style>
