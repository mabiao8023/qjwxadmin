<template>
    <div class="page-container">
        <div class="header">
            交易完成
        </div>
        <div class="wuliu-msg">
            <div class="title">
                物流信息：
            </div>
            <div class="wuliu-method">
                申通快递
            </div>
            <div class="wuliu-number" ref="numbers">
                2234342532452
            </div>
            <div class="copy-btn" @click="copy">
                复制
            </div>
        </div>
        <div class="dashed-line">

        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {

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
            copy(){
                let content = this.$refs.numbers;
                try{
                    window.clipboardData.setData("Text",'asdfasdfadsfds');
                    this.layer('复制成功')
                }catch (e){
                    console.log(e)
                    this.layer('复制失败，请手动复制')
                }

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
  .header{
      width: 100%;
      background: @mainColor;
      color: #fff;
      font-size: 19px;
      padding: 18px;
  }
  .wuliu-msg{
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 12px;
      color: #646464;
      font-size: 15px;
      .title{
          padding-left: 28px;
          background: url(../../assets/image/wuliu.png) no-repeat left center/18px 18px;

      }
      .wuliu-number{
          flex: 1;
          padding-left: 10px;
      }
      .copy-btn{
          color: #5B8EF0;
      }
  }
  .dashed-line{
      width: 100%;
      height: 3px;
      background: url(../../assets/image/hengtiao.png) no-repeat center center/100% 100%;
  }
</style>
