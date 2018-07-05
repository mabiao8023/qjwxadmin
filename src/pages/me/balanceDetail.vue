<template>
    <div class="page-container">
        <div class="shuaixuan">
              <div class="sx-title sx-item">条件筛选</div>
              <div class="sx-con sx-item">
                <popup-radio :options="options1" v-model="option1"></popup-radio>
              </div>
              <div class="sx-date sx-item" @click="showDate">
                  {{date.split('-')[0] + '年' + date.split('-')[1] + '月' }}
              </div>
        </div>
        <ul class="b-list">
            <li class="b-item vux-1px-b">
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
            <li class="b-item">
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
    </div>
</template>

<script>
    import { XInput, PopupRadio   } from 'vux'
    export default {
        components: {
          XInput,
          PopupRadio
        },
        data () {
            return {
              date:'2017-05',
              options1: ['全部','未开始','已结算'],
              option1:'全部'
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
  @import '../../assets/css/reset';
  body{
      background: #F5F5F5;
      font-size: 15px;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  .shuaixuan{
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
        .sx-date{
            text-align: center;
            color: #646464;
        }
  }
  .b-list{
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
