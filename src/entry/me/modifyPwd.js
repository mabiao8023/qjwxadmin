import Vue from 'vue'
import App from '../../pages/me/modifyPwd.vue'
// import '../../assets/js/flexible'
import { AlertPlugin, ToastPlugin, AjaxPlugin, LoadingPlugin  } from 'vux'


Vue.use(AlertPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
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
