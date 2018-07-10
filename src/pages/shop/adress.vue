<template>
    <div>
        <div class="header">
            <div class="title">
                共<span>3</span>条地址记录
            </div>
            <div class="edit" v-if="!isEdit" @click="isEdit = true">
                编辑
            </div>
            <div class="edit complete" v-else>
                完成
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
                <div class="edit-address vux-1px-t" v-if="isEdit">
                    <div class="main-address" @click="setMainAddress">
                        <check-icon size="20" :value.sync="demo1"></check-icon>
                        <span>设为默认地址</span>
                    </div>
                    <div class="edit-address-option">
                        <div class="edit" @click="gotoEdit">
                            编辑
                        </div>
                        <div class="delete" @click="deleteAddress">
                            删除
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="add-adress">
              添加新地址
        </div>
    </div>
</template>

<script>
    import {  CheckIcon   } from 'vux'
    export default {
        components: {
            CheckIcon
        },
        data () {
            return {
                demo1: false,
                bottomCount: 2,
                isEdit: false
            }
        },
        methods:{
            deleteAddress(){
                const _this = this;
                this.$vux.confirm.show({
//                    title: '系统提示',
                    content: '删除后不可恢复，确认删除？',
                    // 组件除show外的属性
                    onCancel () {
                        console.log(this) // 非当前 vm
                        console.log(_this) // 当前 vm
                    },
                    onConfirm () {}
                })
            },
            setMainAddress(){
                const _this = this;
                this.$vux.confirm.show({
  //                    title: '系统提示',
                  content: '确定设置为默认地址？',
                  // 组件除show外的属性
                  onCancel () {
                    console.log(this) // 非当前 vm
                    console.log(_this) // 当前 vm
                  },
                  onConfirm () {}
                })
            },
            gotoEdit(){
                location.href = '/addAddress.html'
            }
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
      .complete{
        color: @fontColor;
      }
  }
  .adress-list{
      .adress-item{
          padding: 12px 14px;
          padding-bottom: 0;
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
              padding-bottom: 10px;
          }
          .edit-address{
              display: flex;
              justify-content: space-between;
              align-items: center;
              line-height: 38px;
          }
          .edit-address-option{
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          .edit{
              padding-left: 19px;
              margin-right: 10px;
              background: url(../../assets/image/write.png) no-repeat left center/15px 15px;
          }
          .delete{
              padding-left: 19px;
              background: url(../../assets/image/delete.png) no-repeat left center/15px 15px;
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
  .weui-icon-circle,.weui-icon-success{
      font-size: 20px!important;
  }
</style>
