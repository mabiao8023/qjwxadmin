<template>
    <div class="viewcer-container">
        <div class="viewcer-part1">
            <div class="viewcer-amount vux-1px-b">
                <div class="title">
                    打款金额：
                </div>
                <div class="amount">
                    ￥1234
                </div>
            </div>
            <div class="viewcer-desc">
                <div class="title">
                    打款备注：
                </div>
                <div class="desc">
                    圣诞节哈收到回复对方哈哈发货附近发掘到
                </div>
            </div>
        </div>
        <div class="viewcer-part2">
            <div class="title">
                打款凭证（共3张）
            </div>
            <div class="img-preview">
                <scroller lock-y scrollbar-x>
                    <div class="box1">
                        <div v-for="(item,index) in list" class="img-item">
                            <img :src="item.src" @click="show(index)"  alt="">
                        </div>
                    </div>
                </scroller>
            </div>
        </div>
        <div v-transfer-dom>
          <previewer :list="list" ref="previewer"  @on-index-change="logIndexChange"></previewer>
        </div>
    </div>
</template>

<script>
  import { Previewer,TransferDom,Scroller  } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
        Previewer,
        Scroller
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
        show (index) {
            this.$refs.previewer.show(index)
        },
        logIndexChange(index){

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
    .viewcer-part1{
        background: #fff;
        margin-top: 10px;
        padding: 0 16px;
        .viewcer-amount{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            color: #323232;
            font-size: 15px;
            .amount{
                color: #909090;
            }
        }
        .viewcer-desc{
            padding: 10px 0;
            color: #323232;
            font-size: 15px;
            .desc{
                color: #909090;
            }
        }
    }
    .viewcer-part2{
        margin-top: 10px;
        background: #fff;
        padding: 0 16px;
        padding-bottom: 16px;
        .title{
            color: #323232;
            font-size: 15px;
            padding: 10px 0;
        }
        .img-preview{
            .box1{
                width: 450px;
            }
            .img-item{
                display: inline-block;
                width: 140px;
                margin-right: 10px;
            }
        }
    }
</style>
