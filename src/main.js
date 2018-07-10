/**
 * @file 全家微选管理系统入口文件
 * @author mabiao
 * @version v1.0.0
 * @createDate 2018-07-10 14:40
 */
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './router/index.js';
import { AlertPlugin, ToastPlugin, AjaxPlugin, LoadingPlugin, ConfirmPlugin  } from 'vux'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(AlertPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {position: 'middle'})
Vue.use(VueRouter)
Vue.use(ConfirmPlugin)
// 配置http头部授权头部
// Vue.http.headers.common['Authorization'] = token;
// Vue.http.options.emulateJSON = true;

const router = new VueRouter(routes);
const app = new Vue({
    el: '#app',
	  router,
	  // store,
    template: '<App/>',
    components: { App }
});


