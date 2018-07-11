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
import Qs from 'qs'
import {
  AlertPlugin,
  ToastPlugin,
  AjaxPlugin,
  LoadingPlugin,
  ConfirmPlugin,
  DatetimePlugin,
  cookie
} from 'vux'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {position: 'middle'})
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)
const router = new VueRouter(routes);
let token = cookie.get('token') || '';
// 路由遍历是否已经登录，未登录则跳转登录页面
router.beforeEach((to, from, next) => {
    // ...
    if( to.meta.noNeedLogin || to.path == '/login'){
        next();
    }else{
        if( token ){
            // 已登录
            next();
        }else{
            // 未登录,跳转登录页面
            next('/login')
        }
    }
});

// 初始化axio请求参数
//添加一个请求拦截器
Vue.http.interceptors.request.use(function(config){
    console.dir(config)
    let userToken = cookie.get('token') || '1231321231';
    config.timeout = 2000;
    config.transformRequest = [function(data = {},headers){
        //依自己的需求对请求数据进行处理
        data.token = userToken;
        data.js_code = new Date().getTime();
        data = Qs.stringify(data);
        return data;
    }];
    //在请求发送之前做一些事
    return config;
},function( error ){
    //当出现请求错误是做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
Vue.http.interceptors.response.use(function(response){
    //  对返回的数据进行一些处理
    //  对code码进行统一处理
    return response;
},function(error){
    //对返回的错误进行一些处理
    return Promise.reject(error);
});


const app = new Vue({
    el: '#app',
	  router,
	  // store,
    template: '<App/>',
    components: { App }
});


