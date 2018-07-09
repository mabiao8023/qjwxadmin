<template>
    <div class="page-container">
      <div class="nav">
          <tab class="tab" scroll-threshold="5" >
              <tab-item selected @on-item-click="onItemClick">待审核</tab-item>
              <tab-item @on-item-click="onItemClick">已代理</tab-item>
              <tab-item @on-item-click="onItemClick">已拒绝</tab-item>
          </tab>
      </div>
        <ul class="js-list">
            <li class="js-item" v-for="i in bottomCount">
                <div class="js-item-part1">
                    <div class="sq-info">
                        申请人：黄明明 13600136000
                    </div>
                    <div class="sq-status">
                        待审核
                    </div>
                </div>
                <div class="js-item-part2 vux-1px-tb">
                    <div>
                        申请等级：创客
                    </div>
                    <div>
                        提交时间：2017/06/06 13:4
                    </div>
                </div>
                <div class="js-item-part3 js-item-part2 vux-1px-b">
                  <div>
                    总订单数：5<br/>
                    总购买金额：¥15000<br/>
                    总赚取佣金：¥500
                  </div>
                  <div>
                    本月订单数：5<br/>
                    本月购买金额：¥15000<br/>
                    本月赚取佣金：¥500
                  </div>
                </div>
              <div class="js-item-part2 vux-1px-tb">
                  <div>
                     拒绝原因：不符合申请资格
                  </div>
              </div>
              <div class="option-btn">
                  <div class="btn" @click='showConfirm'>
                      拒绝申请
                  </div>
                  <div class="btn active">
                      通过申请
                  </div>
                  <div class="btn active">
                      取消资格
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
    import { Tab, TabItem,  } from 'vux'
    export default {
        components: {
          Tab,
          TabItem,
          InfiniteLoading
        },
        data () {
            return {
                bottomCount: 0,
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
            showConfirm(){
                this.$vux.confirm.show({
                    // 组件除show外的属性
                    showInput: true,
                    title: '请填写拒绝原因,反馈给申请人',
                    placeholder:'限15字以内',
                    onCancel () {
                      console.log(this) // 非当前 vm
                      console.log(_this) // 当前 vm
                    },
                    onConfirm () {}
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
      background: #EEEEEE;
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
  .nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
  }
  .js-list{
      padding-top: 44px;
  }
  .js-item{
      margin-top: 10px;
      background: #fff;
      padding: 0 15px;
      padding-top: 6px;
      .js-item-part1{
          display: flex;
          justify-content: space-between;
          border-top: 1px solid transparent;
          margin-bottom: 6px;
          padding-left: 5px;
          border-left: 3px solid #4674E8;
          line-height: 1.2;
        .sq-info{
          color: #323232;
          font-size: 15px;
        }
        .sq-status{
          color: @mainColor;
          font-size: 15px;
        }
      }
      .js-item-part2{
          color: #646464;
          font-size: 14px;
          /*line-height: 2;*/
          padding: 7px 0;
      }
      .js-item-part3{
          display: flex;
          justify-content: space-between;
          div{
              width: 50%;
          }
      }
  }
  .option-btn{
      padding: 12px 0;
      font-size: 0;
      text-align: right;
      .btn{
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
            &.active{
                color: @mainColor;
                border: 1px solid @mainColor;
             }
      }

  }

  .total{
      text-align: right;
      font-size: 13px;
      color: #909090;
      padding: 8px 12px;
      span{
          color: #323232;
      }
  }
</style>
