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

Vue.use(VueRouter);
// 配置http头部授权头部
// Vue.http.headers.common['Authorization'] = token;
// Vue.http.options.emulateJSON = true;

const router = new VueRouter(routes);
const store = new Vuex.Store(vuexs);
const app = new Vue({
    el: '#app',
	  router,
	  store,
    template: '<App/>',
    components: { App }
});


