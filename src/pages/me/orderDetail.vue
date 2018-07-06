<template>
    <div class="page-container">
        <div class="header">
            <div class="h-title">
                待结算（元）
            </div>
            <div class="h-money">
                1000.00
            </div>
        </div>
        <ul class="js-list">
            <li class="js-item" v-for="i in bottomCount">
                <div class="js-item-part1">
                    <div class="left">
                        ¥1500.00
                    </div>
                    <div class="right">
                        审核冻结中
                    </div>
                </div>
                <div class="js-item-part2">
                    <div class="left">
                        返利时间：2017.06.10
                    </div>
                    <div>
                        预计解冻时间：2017.07.01
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

    export default {
        components: {
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
  .header{
      width: 100%;
      height: 120px;
      background: @mainColor;
      color: #fff;
      padding: 16px 24px;
      .h-title{
          font-size: 15px;
      }
      .h-money{
          text-align: center;
          font-size: 40px;
      }
  }
  .js-item{
      margin-top: 10px;
      padding: 0 15px;
      background: #fff;
      .js-item-part1{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          .left{
              color: #323232;
              font-size: 20px;
          }
          .right{
              color: @fontColor;
              font-size: 15px;
          }
      }
      .js-item-part2{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          color: #909090;
          font-size: 14px;
      }
  }
</style>
