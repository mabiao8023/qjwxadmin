<!--没有数据-->
<template>
    <div class="no-data">
        <img src="../assets/image/nodata.png" alt="">
        <p>暂无内容</p>
    </div>
</template>
<script>
    //  import { apiPath } from '../../common/js/config.js';
    export default {
        name: 'nodata',
        data() {
            return {
                file: '',  // 上传表单中的文件
            }
        },
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .no-data {
        padding: 167px 0;
        /*background: #FFFFFF;*/
        text-align: center;
        img {
            width: 148px;
            height: 103px;
        }
        p {
            margin-top: 18px;
            color: #909090;
            font-size: 15px;
        }
    }
</style>
