<template>
  <div class="offine-container">
      <div class="upload-header">
          请确认您已成功打款再创建打款凭证，以下信息请一 定认真填写
      </div>
      <div class="upload-part1">
            <div class="dakuan vux-1px-b" @click="isShowDesc = true">
                线下打款说明
            </div>
            <div class="bind-dakuan" @click="isShowZh = true">
                指定打款账号
            </div>
      </div>
      <div class="upload-part2">
            <div class="title">
                打款金额<span>*</span>
            </div>
            <div class="input">
                <x-input
                    v-model="amount"
                    placeholder="请输入打款金额"
                ></x-input>
            </div>
      </div>
      <div class="upload-part3">
          <div class="title">
              打款备注（选填）
          </div>
          <div class="input">
              <x-input
                  v-model="amount"
                  placeholder="请输入打款备注"
              ></x-input>
          </div>
      </div>
      <div class="upload-img">
          <div class="title">
              <div>
                  上传打印凭证<span>*</span>
              </div>
              <div class="tip">
                最多添加6张图片
              </div>
          </div>
          <div class="upload-photo">
              <div class="upload-item" v-for="(item, index) in list">
                  <div class="delete-photo" @click="deletePhoto(index)">
                  </div>
                  <img :src="item.src" @click="show(index)" alt="">
              </div>
              <div class="upload-item" @click="chooseImg">

              </div>
          </div>
      </div>
      <div class="upload-submit">
          确认提交
      </div>
      <transition name="fade">
          <div class="desc-pop" v-if="isShowDesc">
              <div class="desc-pop-box">
                  <div class="title vux-1px-b">
                      线下打款说明
                  </div>
                  <div class="sub-desc vux-1px-b">
                      请认真阅读以下线下打款说明和指定打款帐号， 若因打款金额不对造成问题，由自己负责，谨记！
                  </div>
                  <div class="sm-content vux-1px-b">
                      <div class="sub-title">
                          注意点
                      </div>
                      <div class="sub-content">
                          线下打款的含义是您自己通过除了本平台直接付款以外的其他打款操作将钱打至总部或创客空间账户，打款完成请保存打款截图，并上传凭证至此。
                      </div>
                  </div>
                  <div class="sm-content">
                      <div class="sub-title">
                          流程
                      </div>
                      <div class="sub-content">
                        1.将订单需要支付的钱打到总部或创客空间指定的账户中，同时将您的打款凭证截图保留。<br/>
                        2.打款成功后，将您的打款凭证上传提交。 <br/>
                        3.总部或创客空间在审核并确认您的打款申请后，将会第一时间进行发货，或您自己前去提货，请及时留意该订单的状态变化。
                      </div>
                  </div>
                  <div class="pop-sure-btn" @click="isShowDesc = false">确定</div>
              </div>
          </div>
      </transition>
      <!-- 指定账号弹窗 -->
      <transition name="fade">
          <div class="desc-pop" v-if="isShowZh">
              <div class="desc-pop-box">
            <div class="title vux-1px-b">
              指定打款帐号
          </div>
            <div class="sub-desc vux-1px-b">
              以下为总部指定财务账户，请选择一种打款方式
          </div>
            <div class="sm-content vux-1px-b">
              <div class="sub-content">
                  支付宝账户：123456@111.com<br/>
                  支付宝户名：xxx
              </div>
            </div>
            <div class="sm-content">
              <div class="sub-content">
                开户行：中国银行xxxx支行 <br/>
                账号：1234578995555<br/>
                户名：xxx
              </div>
            </div>
            <div class="pop-sure-btn" @click="isShowZh = false">确定</div>
          </div>
          </div>
      </transition>
    <!-- 图片上传组件 -->
    <UploadPhoto ref="uploadPhoto"
                 @getImgData="getImgDataUrl"
                 @progress="uploadProgress"
                 @uploadResData="uploadResData"
    ></UploadPhoto>
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script>
  import { XInput,Previewer,TransferDom   } from 'vux'
  import UploadPhoto from '../../components/uploadPhoto.vue'
  export default {
    directives: {
      TransferDom
    },
    components: {
        XInput,
        UploadPhoto,
        Previewer
    },
    data () {
        return {
            isShowDesc: false,
            isShowZh: false,
            amount: '',
          list: [{
               msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
               src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
            },
            {
              msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
              src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            }, {
              msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
              src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
            }],
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
        chooseImg(){
          this.$refs['uploadPhoto'].$el.click();
        },
        // 父组件监听子组件上传图片返回的base64的数据，用于本地显示图片
        getImgDataUrl( value ){
              //  value -> 图片base64的数
              //  console.log(value);
        },
        uploadProgress(value){
              // value -> 图片上传的进度百分比，会实时更新，用于进度条显示
              // console.log(value);
        },
        uploadResData(value){
            if(value.type == 'success'){
                let img = new Image();
                let that = this;
                img.src = value.image_url;
                // 加载完成后在进行发消息
                img.onload = function(){
                    //  提示上传成功
                }
            }else{
                    // 上传失败
            }
        },
        show (index) {
            this.$refs.previewer.show(index)
        },
        deletePhoto (index){
            this.list.splice(index,1);
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
      background: #eeeeee;
      font-size: 15px;
  }
  .desc-pop{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(0,0,0,.5);
      .desc-pop-box{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          border-radius: 10px;
          transform: translate(-50%,-50%);
          background: #fff;
          .title{
              color: #323232;
              font-size: 18px;
              padding: 10px 0;
              text-align: center;
          }
          .sub-desc{
              color: #F52C2C;
              font-size: 13px;
              padding: 10px;
          }
          .sm-content{
              padding: 10px;
              .sub-title{
                  color: @fontColor;
                  font-size: 15px;
              }
              .sub-content{
                  color: #323232;
                  font-size: 13px;
              }
          }
          .pop-sure-btn{
              margin: 10px 36px 20px;
              line-height: 40px;
              border-radius: 20px;
              text-align: center;
              color: #323232;
              font-size: 18px;
              background: @mainColor;
          }
      }
  }
  .upload-header{
      color: #F52C2C;
      font-size: 15px;
      padding: 14px 18px;
  }
  .upload-part1{
      background: #fff;
      padding: 0 16px;
      .dakuan{
          padding: 10px 0;
          color: #646464;
          font-size: 15px;
          background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
      }
      .bind-dakuan{
          padding: 10px 0;
          color: #646464;
          font-size: 15px;
          background: url(../../assets/image/more-arrow.png) no-repeat right center/8px 13px;
      }
  }
  .upload-part2,.upload-part3{
      .title{
          padding: 12px 17px;
          font-size: 15px;
          color: #646464;
          span{
              color:#F52C2C;
          }
      }
      .input{
          background: #fff;
      }
  }
  .upload-img{
      .title{
          padding: 12px 17px;
          font-size: 15px;
          color: #646464;
          justify-content: space-between;
          align-items: center;
          display: flex;
          span{
              color:#F52C2C;
          }
          .tip{
              color: #909090;
              font-size: 12px;
          }
      }
      .upload-photo{
          background: #fff;
      }
  }
  .upload-photo{
      padding: 12px 15px;
      font-size: 0;
      display: flex;
      flex-wrap: wrap;
      .upload-item{
          position: relative;
          width: 74px;
          height: 74px;
          margin-right: 10px;
          /*border-radius: 10px;*/
          background: url(../../assets/image/add-photo.png) no-repeat center center/100% 100%;
          img{
              width: 100%;
              height: 100%;
          }
            .delete-photo{
                position: absolute;
                top: -7px;
                right: -7px;
                width: 15px;
                height: 15px;
                background: url(../../assets/image/photo-delete.png) no-repeat center center/100% 100%;
            }
      }

  }
  .upload-submit{
      margin: 55px 17px 0;
      background: @mainColor;
      line-height: 45px;
      text-align: center;
      color: #323232;
      border-radius: 5px;
      font-size: 18px;
  }
</style>
