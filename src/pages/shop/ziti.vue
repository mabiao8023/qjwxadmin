<template>
    <div>
        <div class="list">
            <div class="item vux-1px-b">
                <div class="title">
                    收货人
                </div>
                <div class="input">
                    <x-input
                      v-model="tjname"
                      placeholder="请输入收货人"
                    ></x-input>
                </div>
            </div>
            <div class="item vux-1px-tb">
                <div class="title">
                    联系电话
                </div>
                <div class="input">
                    <x-input
                      v-model="tjname"
                      placeholder="请输入联系电话"
                    ></x-input>
                </div>
            </div>
        </div>
        <div class="add-adress">
           保存
        </div>
    </div>
</template>

<script>
    import {  XInput  } from 'vux'
    export default {
        components: {
            XInput
        },
        data () {
            return {
                demo1: true,
                tjname: ''
            }
        },
        computed:{
        },
        methods:{

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
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .item{
    display: flex;
    justify-content: space-between;
    background: #fff;
    font-size: 15px;
    padding: 0 12px;
    .title{
      width: 68px;
      color: #646464;
      line-height: 49px;
    }
    .input{
      flex: 1;
      color: #323232;
    }
    .diqu{
      line-height: 49px;
      padding:  0 15px;
      background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
    }
  }
  .add-adress{
      position: fixed;
      z-index: 100;
      bottom: 0;
      left: 0;
      right: 0;
      line-height: 45px;
      text-align: center;
      background: @mainColor;
      font-size: 15px;
      color: #323232;
  }
</style>
