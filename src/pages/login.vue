<template>
    <div>
        <group>
           <x-input title="用户名"
                    required
                    v-model="name"
                    placeholder="请输入用户名"
           ></x-input>
           <x-input title="密 码"
                    required
                    type="password"
                    v-model="pwd"
                    placeholder="请输入密码"
           ></x-input>
        </group>
    </div>
</template>

<script>
    import { Group, XInput  } from 'vux'
    export default {
        components: {
            XInput,
            Group
        },
        data () {
            return {
                name: '',
                pwd: ''
            }
        }
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  @import '../assets/css/reset';
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>
