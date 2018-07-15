<template>
    <div class="balance-detail-container">
        <div class="shuaixuan">
              <div class="sx-title sx-item">条件筛选</div>
              <div class="sx-con sx-item" @click="isShowRadio = true">
                  {{ option1 }} <i class="arrow-icon"></i>
              </div>
              <div class="sx-date sx-item" @click="showDate">
                  {{ year + '年' + month + '月' }}
                  <i class="arrow-icon"></i>
              </div>
        </div>
        <div v-transfer-dom>
            <popup v-model="isShowRadio">
                <group gutter="0" @click.native="getListByType">
                  <radio :options="options1" v-model="option1"></radio>
                </group>
            </popup>
        </div>
        <ul class="b-d-list">
            <li class="b-item vux-1px-b" v-for="(item,index) in accountLog">
                <div class="b-item-left">
                    <div class="title">
                        {{ item.remark }}
                    </div>
                    <div class="time">
                         {{ item.addtime*1000 | dateFormat('YYYY-MM-DD HH:mm:ss') }}
                    </div>
                </div>
                <div class="b-data" v-if="item.income">
                      + {{ item.income }}
                </div>
                <div class="b-data" v-else>
                     - {{ item.expend }}
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
    import {  Popup, TransferDom, Group, Radio, dateFormat   } from 'vux'
    import InfiniteLoading from 'vue-infinite-loading'
    import api from '../../assets/js/api'

    export default {
        components: {
          Popup,
          Group,
          Radio,
          InfiniteLoading
        },
        filters: {
          dateFormat
        },
        directives: {
          TransferDom
        },
        data () {
            return {
              options1: [
                  '全部',
                  '返利',
                  '支出'],
              option1:'全部',
              bottomCount: 0,
              isShowRadio: false,
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1,
              accountLog: [],
              page: 1,
            }
        },
        compouted:{
          type(){
              return this.option1 == '全部' ? 'all' :
                            this.option1 == '返利' ? 'income' : 'expend';
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
                value: this.year + '-' + this.month, // 其他参数同 props
                format: 'YYYY-MM',
                confirmText:'确认',
                cancelText:'取消',
                minYear: '2018',
                maxYear: new Date().getFullYear(),
                onHide () {
                  const _this = this
                },
                onShow () {
                  const _this = this
                },
                onConfirm(val){
                  _this.year = parseInt(val.split('-')[0]);
                  _this.month = parseInt(val.split('-')[1]);
                  _this.accountLog = [];
                  _this.page = 1;
                  _this.$nextTick(() => {
                    _this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                  });
                }
              })
            },
            getListByType(){
                this.isShowRadio = false
                this.accountLog = [];
                this.page = 1;
                this.$nextTick(() => {
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
                });
            },
            getList ( $state ) {
                this.$http.post( api.accountLog,{
                    type: this.type,
                    year: this.year,
                    month: this.month
                }).then( res => {
                    if( res.code == 1 ){
                        if( res.data.length ){
                            this.page++;
                            this.accountLog = this.accountLog.concat( res.data )
                            $state.loaded();
                        }else{
                            $state.complete();
                        }
                    }
                } ).catch( e => {
                    $state.complete();
                } )
            },
        },
        mounted() {
            document.getElementsByTagName('title')[0].textContent = '账户明细';
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
  .balance-detail-container{
      background: #F5F5F5;
      padding-top: 45px;
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
        border-bottom: 1px solid #eaeaea;
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
  .b-d-list{
      margin-top: 10px;
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
</style>
