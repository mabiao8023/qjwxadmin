<template>
    <div class="contract-container">
        <div class="contract-section">
            <img :src="img_url">
        </div>
        <Nodata v-if="!img_url"></Nodata>
    </div>
</template>
<script>
    import api from '../../assets/js/api'
    import Nodata from '../../components/nodata.vue'
    export default {
        components: {
            Nodata
        },
        data () {
            return {
                img_url: ''
            }
        },
        methods: {
            layer(text){
                this.$vux.toast.text(text || 'hello', 'middle')
            },
            showLoading(text){
                this.$vux.loading.show({
                    text: text || '加载中'
                })
            },
            hideLoading(){
                this.$vux.loading.hide()
            },
            gotoInputInfo(){
                // 可能需要跳转才行
                this.$router.push({
                    path:  `/reschuangke?id=${this.makerId}&name=${this.name}`
                })
            },
            getData(){
                this.showLoading()
                this.$http.post(api.getContract)
                    .then(res => {
                        this.hideLoading()
                        this.img_url = res.data.contract
                    }).catch( e => {
                        this.hideLoading()
                    })
            }
        },
        mounted() {
            this.getData()
            //  设置标题
            document.getElementsByTagName('title')[0].textContent = '授权合同';
        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';
    @import "../../assets/css/common.less";

    /*.main-section {*/
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*background: #E3A216;*/
        /*.btn {*/
            /*position: absolute;*/
            /*top: 470px;*/
            /*width: 250px;*/
            /*left: 50%;*/
            /*transform: translate(-50%, 0);*/
        /*}*/
    /*}*/
</style>
