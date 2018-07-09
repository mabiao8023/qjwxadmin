<template>
    <div>
        <div class="header">
            <div class="title">
                共<span>3</span>条地址记录
            </div>
            <div class="edit">
                编辑
            </div>
        </div>
        <div class="adress-list">
            <div class="adress-item vux-1px-b">
                <div class="info">
                    <div class="name">
                        王琪
                    </div>
                    <div class="phone">
                        123683738
                    </div>
                </div>
                <div class="adress">
                    <span>[默认地址]</span>广东省广州市天河区建中路66号
                </div>
            </div>
        </div>
        <div class="add-adress">
              添加新地址
        </div>
        <x-address style="display:none;" title="" v-model="address" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
    </div>
</template>

<script>
    import {   XAddress, ChinaAddressV4Data  } from 'vux'
    export default {
        components: {
           XAddress
        },
        data () {
            return {
                demo1: true,
                bottomCount: 2,
                addressData: ChinaAddressV4Data,
                showAddress: false
            }
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
  .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      color: #323232;
      font-size: 15px;
      span{
          color: #F52C2C;
      }
  }
  .adress-list{
      .adress-item{
          padding: 12px 14px;
          color: #323232;
          font-size: 15px;
          background: #fff;
          margin-top: 10px;
          .info{
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          .adress{
              span{
                  color: @fontColor;
              }
          }
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
