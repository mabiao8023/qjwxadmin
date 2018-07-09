import Vue from 'vue'
import App from '../../pages/me/zhuceck.vue'
// import '../../assets/js/flexible'
import { AlertPlugin, ToastPlugin, AjaxPlugin, LoadingPlugin, ConfirmPlugin  } from 'vux'


Vue.use(AlertPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin, {position: 'middle'})


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
