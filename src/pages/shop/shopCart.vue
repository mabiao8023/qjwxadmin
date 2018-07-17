<template>
    <div>
        <div class="sc-nav">
            <div class="nav-l">
                共<span>{{total.totalNumber}}</span>件商品
            </div>
            <div class="nav-r"
                 v-if="!isEdit"
                 @click="isEdit = true"
            >
                编辑
            </div>
            <div class="options"
                 v-else
            >
                <span class="options-del" @click="deleteGoods">
                    删除
                </span>
                <span class="options-com"
                      @click="editGoods"
                >
                    完成
                </span>
            </div>
        </div>
        <div class="shop-cart-box">
            <div v-for="(item,index) in goods" class="shop-container vux-1px-t">
                    <div class="checked">
                        <check-icon :value.sync="item.checked"></check-icon>
                    </div>
                    <div class="shop-img">
                        <x-img class="shop-detail-image"
                               :src="item.good_photo" alt="">
                        </x-img>
                    </div>
                    <div class="shop-detail">
                        <div class="shop-title">
                            {{item.good_name}}
                        </div>
                        <div class="shop-data">
                            <div class="shop-price">￥{{item.good_price}}(返利¥{{item.rebate}})</div>
                            <div class="shop-choice-nums" style="text-align:center;">
                            <span v-if="!isEdit">×{{item.amount}}</span>
                            <inline-x-number v-else button-style="round" v-model="item.amount" :min="0" width="30px"></inline-x-number>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <infinite-loading @infinite="getGoods" :distance="100" spinner="circles" ref="infiniteLoading">
            <span slot="no-results">
                暂无商品
            </span>
            <span slot="no-more">
                暂无更多商品
            </span>
        </infinite-loading>
      <!-- 去购物车 -->
        <div class="shopping-cart-edit">
            <div class="all-checked" @click="allChecked">
              <div>
                  <check-icon :value.sync="demo1"></check-icon>
              </div>
              <div>全选</div>
            </div>
            <div class="total-price">
                <div class="total">
                    合计：<span>￥{{total.totalMoney}}</span>
                </div>
                <div class="no-yunfei">
                    不含运费 | 返利¥{{total.totalReMoney}}
                </div>
            </div>
            <div class="shopping-cart-btn" @click="submitOrder">
                提交订单
            </div>
        </div>
    </div>
</template>

<script>
    import {  XImg,  InlineXNumber, CheckIcon    } from 'vux'
    import InfiniteLoading from 'vue-infinite-loading';
    import api from '../../assets/js/api'
    export default {
        components: {
            XImg,
            InlineXNumber,
            CheckIcon,
            InfiniteLoading
        },
        data () {
            return {
                bottomCount: 0,
                changeValue: 1,
                value: 1,
                demo1: true,
                isEdit: false,          // 是否处于编辑状态
                goods: [{
                    "good_name": "杜蕾斯",
                    "stock": 10,
                    "good_price": 188,
                    "rebate": 5,
                    "id": "1",
                    "checked": true,
                    "amount": 12,
                    "good_photo": "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1415756910,4153057836&fm=202&mola=new&crop=v1"
                }],
                count: 0,
                page: 1,
            }
        },
        computed: {
            total(){
              let allMoney = 0,
                allReMoney = 0,
                allNumber = 0;
              this.goods.forEach(val => {
                if (val.amount > 0 && val.checked) {
                  allMoney += val.good_price * val.amount;
                  allReMoney += val.rebate * val.amount;
                  allNumber += val.amount;
                }
              })
              return {
                totalMoney: allMoney || 0,
                totalNumber: (allNumber + this.count) || 0,
                totalReMoney: allReMoney || 0
              };
            },
            checkedGood(){
                let deleteArr = [],
                    editArr = [];
                this.goods.forEach( val => {
                    if( val.checked ){
                        deleteArr.push({
                            good_id: val.good_id
                        });
                        editArr.push({
                            good_id: val.good_id,
                            amount: val.amount
                        });
                    }
                });
                return {
                    deleteArr,
                    editArr
                }
            }
        },
        watch:{
           demo1(curval){
              this.goods.forEach( val => {
                 val.checked =  curval
              });
           }
        },
        methods:{
            layer( text ){
              this.$vux.toast.text( text || 'hello', 'middle')
            },
            showLoading(text){
              this.$vux.loading.show({
                text: text || '加载中'
              })
            },
            hideLoading(){
              this.$vux.loading.hide()
            },
            getGoods ( $state ) {
                this.$http.post(api.shoppingTrolley)
                      .then( res => {
                            this.count = res.count
                            if( res.list.length ){
                                res.list.forEach( val => {
                                    val.checked = true
                                })
                                this.page++
                                this.goods = this.goods.concat(res.list)
                                 $state.loaded();
                            }else{
                                $state.complete();
                            }
                      }).catch( e => {
                          $state.complete();
                      })
            },
            submitOrder(){
                this.$router.push({
                    path: '/pay'
                })
            },
            deleteGoods(){
                this.showLoading('删除中')
                this.$http.post(api.shoppingTrolleyEdit,{
                    type: 'delete',
                    good: this.checkedGood.deleteArr
                }).then( res => {

                    this.hideLoading();
                    this.layer('删除成功')
                } ).catch( e => {
                    this.hideLoading();
                } )
            },
            editGoods(){
                this.showLoading('提交中')
                this.$http.post(api.shoppingTrolleyEdit,{
                  type: 'modify',
                  good: this.checkedGood.editArr
                }).then( res => {
                  this.isEdit = false;
                  this.hideLoading();
                  this.layer('编辑成功')
                } ).catch( e => {
                  this.hideLoading();
                } )
            },
            allChecked(){
                this.goods.forEach( val => {
                    if( demo1 ){
                      val.checked = true;
                    }else{
                      val.checked = false;
                    }
                } )
            },
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import '../../assets/css/reset';
    body{
        background: #F5F5F5;
        padding-bottom: 50px;
    }
    /* 购物车导航 */
    .sc-nav{
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 0 15px;
        width: 100%;
        background: #fff;
        line-height: 41px;
        font-size: 15px;
        color: #323232;
        border-bottom: 1px solid #eaeaea;
        span{
          color: #F52C2C;
          font-size: 15px;
        }
        /* 编辑处理 */
        .options{
            .options-del{
                margin-right: 10px;
                color: #F52C2C;
            }
            .options-com{
                color: @fontColor;
            }
        }
    }
    .shop-cart-box{
        background: #fff;
        margin-top: 41px;
        .shop-container{
          display: flex;
          align-items: center;
          padding: 15px;
          .shop-img{
            width: 70px;
            height: 70px;
            overflow: hidden;
            margin-right: 20px;
            .shop-detail-image{
              width: 70px;
              height: 70px;
            }
          }
          .shop-detail{
            display: flex;
            flex: 1;
            height: 70px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: left;
            font-size: 15px;
            .shop-title{
              width: 100%;
              color: #323232;
            }
            .shop-nums{
              width: 100%;
              margin-top: 10px;
              font-size: 13px;
              color: #909090;
            }
          }
        }
        .shop-data{
          display: flex;
          /*margin-top: 7px;*/
          width: 100%;
          justify-content: space-between;
          align-items: center;
          color: #E1B113;
          .shop-choice-nums{
            color: #909090;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .vux-number-selector-plus{
          padding: 0px 0px!important;
        }
        .vux-number-selector-sub{
          padding: 0px 0px!important;
        }
        .vux-number-input{
          font-size: 14px!important;
        }
        svg{
          width: 15px;
          height: 15px;
          margin-bottom: 2px;
        }
    }
    .shopping-cart-edit{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 45px;
    font-size: 15px;
    background: #fff;
    .no-yunfei{
        color: #909090;
        font-size: 13px;
    }
    .total-price{
      flex: 1;
      color: #323232;
      /*padding-top: 1px;*/
      padding-left: 15px;
      font-size: 15px;
      text-align: right;
      padding-right: 4px;
      span{
        color: #F52C2C;
      }
    }
    .shopping-cart-btn{
      width: 127px;
      color: #000;
      line-height: 45px;
      background: #F9CD3B url(../../assets/image/shopcar.png) no-repeat 16px center/18px 18px;
      padding-left: 38.5px;
    }
      .all-checked{
          display: flex;
          line-height: 43px;
          align-items: center;
          color: #323232;
          font-size: 15px;
          padding-left: 10px;
      }
  }
    .weui-icon-circle,.weui-icon-success{
      font-size: 20px!important;
    }
</style>
