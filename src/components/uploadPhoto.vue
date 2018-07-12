<template>
    <input class="upload-photo"
           type="file"
           ref="photos"
           accept="image/*"
           @change="choosePhoto($event)"
    >
</template>
<script>
//  import { apiPath } from '../../common/js/config.js';
export default {
    name: 'UploadPhoto',
    data() {
        return {
            file:'',  // 上传表单中的文件
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
        // 上传图片回显到本地并上传到服务器
        choosePhoto(event){
            let that = this;
            let target = event.currentTarget;
            this.file = target.files[0];
            // 判断图片的类型和大小
            let imgType = /\.jpg|\.png|\.jpeg/i;
            if( !imgType.test( this.file.name ) ){
                return this.layer("只支持图片上传，请选择正确的图片格式");
            }else if((this.file.size/1024000) > 5){
                return this.layer("图片大小不能超过5M，请压缩后上传");
            }

            // 利用fileReader 预览图片
            if( typeof FileReader == "undefined" ){
                this.layer("您的浏览器不支持图片预览功能，请换浏览器重试");
            }else{
                this.showLoading('上传中...');
                // 实例化图片读取
                let reader = new FileReader();
                reader.readAsDataURL( this.file );
                reader.onload = function(){
                    // 广播图片的base64数据到父组件,用于显示
                    that.$emit('getImgData',reader.result);
                    // input清空，防止两次请求同一个时不能选中
                    target.value = '';
                    that.ajaxUploadApi();
                }
            }
        },
        // 上传图片的ajax请求
        ajaxUploadApi(){
            // 表单上传图片方式
            let  form = new FormData();
            let  that = this;
            form.append("Filedata",this.file);
            this.$http.post(apiPath.uploadPhoto,form,{
                'headers':{
                    'mimeType':'multipart/form-data'
                },
                progress:function(event){
                    let precent = event.loaded/event.total * 100 + "%";
                    // 广播上传的进度d的百分比
                    that.$emit('progress',precent);
                }
            }).then( res => {
                that.hideLoading();
                if( res.body.code == 1 ){
                    res.body.data.type = 'success';
                    that.$emit('uploadResData',res.body.data);
                }else{
                    that.layer('发送失败，请重新发送');
                    that.$emit('uploadResData',{ type : 'fail' });
                }
            }, err => {
                that.hideLoading();
                that.layer('上传失败，请重新发送');
                that.$emit('uploadResData',{ type : 'fail' });
            });
        },
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .upload-photo{
        width:0;
        height:0;
        display:none;
    }
</style>
