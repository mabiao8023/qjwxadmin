<template>
    <div>
        <group>
           <x-input title="title" v-model="value"></x-input>
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
                list: [{
                  label: 'Apple',
                  value: '3.29'
                }, {
                  label: 'Banana',
                  value: '1.04'
                }, {
                  label: 'Fish',
                  value: '8.00'
                }]
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
