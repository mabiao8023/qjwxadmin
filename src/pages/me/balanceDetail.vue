<template>
    <div class="page-container">
        <div class="shuaixuan vux-1px-b">
              <div class="sx-title sx-item">条件筛选</div>
              <div class="sx-con sx-item" @click="isShowRadio = true">
                  {{ option1 }} <i class="arrow-icon"></i>
              </div>
              <div class="sx-date sx-item" @click="showDate">
                  {{date.split('-')[0] + '年' + date.split('-')[1] + '月' }}
                  <i class="arrow-icon"></i>
              </div>
        </div>
        <div v-transfer-dom>
            <popup v-model="isShowRadio">
                <group gutter="0" @click.native="isShowRadio = false">
                  <radio :options="options1" v-model="option1"></radio>
                </group>
            </popup>
        </div>
        <ul class="b-list">
            <li class="b-item vux-1px-b" v-for="i in bottomCount">
                <div class="b-item-left">
                    <div class="title">
                        返利收入
                    </div>
                    <div class="time">
                         2018-7-31 12:53
                    </div>
                </div>
                <div class="b-data">
                      + 70.00
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
    import {  Popup, TransferDom, Group, Radio   } from 'vux'
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        components: {
          Popup,
          Group,
          Radio,
          InfiniteLoading
        },
      directives: {
        TransferDom
      },
        data () {
            return {
              date:'2017-05',
              options1: ['全部','未开始','已结算'],
              option1:'全部',
              bottomCount: 0,
              isShowRadio: false
            }
        },
        methods:{
            layer( text ){
                this.$vux.toast.text( text || 'hello', 'middle')
            },
            showLoading(){
                this.$vux.loading.show({
                  text: '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            showDate(){
              const _this = this
              this.$vux.datetime.show({
                value: this.date, // 其他参数同 props
                format: 'YYYY-MM',
                confirmText:'确认',
                cancelText:'取消',
                onHide () {
                  const _this = this
                },
                onShow () {
                  const _this = this
                },
                onConfirm(val){
                   _this.date = val
                }
              })
            },
            getList ( $state ) {
              setTimeout(() => {
                this.bottomCount += 10
                if( this.bottomCount < 50 ){
                    $state.loaded();
                } else{
                    $state.complete();
                }
              }, 1000)
            },
        },
        mounted() {

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
      font-size: 15px;
  }
  .shuaixuan{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        background: #fff;
        line-height: 45px;
        align-items: center;
        font-size: 15px;
        .sx-item{
            width: 33.33%;
        }
        .sx-title{
            padding-left: 17px;
            color: #323232;
        }
        .sx-con{
            text-align: center;
            color: #646464;
        }
        .arrow-icon{
            display: inline-block;
            width: 11px;
            height: 7px;
            vertical-align: middle;
            background: url(../../assets/image/down-arrow.png) no-repeat center center/100% 100%;
        }
        .sx-date{
            text-align: center;
            color: #646464;
        }
  }
  .b-list{
      margin-top: 55px;
      padding: 0 18px;
      background: #fff;
      .b-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          .title{
              color: #323232;
              font-size: 15px;
          }
          .time{
            color: #909090;
            font-size: 12px;
          }
      }
      .b-data{
          color: @fontColor;
          font-size: 20px;
      }
  }
    /* 隐藏显示 */
  .popup-radio{
      width: 0;
      height: 0;
      opacity: 0;
  }
</style>
