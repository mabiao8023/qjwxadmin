import Vue from 'vue'
import App from '../../pages/shop/confirmOrder.vue'
// import '../../assets/js/flexible'
import { AlertPlugin, ToastPlugin,Icon  } from 'vux'


Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.component('icon', Icon)

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm  = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
})
