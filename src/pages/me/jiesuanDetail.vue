<template>
    <div class="js-detail-container">
        <div class="js-detail-header">
            <div class="title">
                入账金额
            </div>
            <div class="amount">
               70.00
            </div>
        </div>
        <div class="js-detail-section vux-1px-tb">
            <div class="item">
               <div class="left"> 类型</div>
               <div class="right">货款+返利收入</div>
            </div>
            <div class="item">
              <div class="left"> 时间</div>
              <div class="right"> 2017-7-31 12:57</div>
            </div>
            <div class="item">
              <div class="left"> 交易单号</div>
              <div class="right">20180731123455149</div>
            </div>
            <div class="item">
              <div class="left"> 订单编号</div>
              <div class="right">20180731123455149</div>
            </div>
            <div class="goto-order">
              查看订单>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../../assets/js/api'
    import {  dateFormat   } from 'vux'
    import { getParams } from '../../assets/js/util'
    export default {
        components: {
        },
        filters: {
          dateFormat
        },
        data () {
            return {
              detail:{},
              nid: getParams()['nid'] || ''
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
            getDetail(  ) {
                this.$http.post( api.accountLogDetail,{
                    nid: this.nid
                } ).then( res => {
                    if( res.code == 1 ){
                        this.detail = res.data
                    }
                } )
            },
        },
        mounted() {
            this.getDetail()
            document.getElementsByTagName('title')[0].textContent = '结算详情';
        }
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  @import '../../assets/css/reset';
  body{
      background: #ffffff;
      font-size: 15px;
  }
  .js-detail-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 15px;
      /*margin-top: 10px;*/
      color: #909090;
      font-size: 13px;
      background: #ffffff;
      .amount{
          color: #323232;
          font-size: 20px;
      }
  }
  .js-detail-section{
      padding: 10px 15px;
      background: #ffffff;
      .item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #909090;
          font-size: 13px;
          padding-bottom: 10px;
      }
  }
  .goto-order{
      text-align: right;
      color: #323232;
      font-size: 13px;
  }
</style>
