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
  WechatPlugin,
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
Vue.use(WechatPlugin)

// 配置微信

// Vue.http.get('/api', ({data}) => {
//   Vue.wechat.config(data.data)
// })

const router = new VueRouter(routes);
let token = cookie.get('token') || '77878';
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
    let userToken = cookie.get('token') || '';
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
    let data  = response.data;
    if( data.code == 0 ){
        Vue.$vux.toast.text( data.msg, 'middle')
        return Promise.reject( data.msg );
    }else if( data.code == 401 ){
        Vue.$vux.toast.text( '未登录', 'middle')
        location.href = '/login'
        return Promise.reject( data.msg );
    }else if( data.code == 403 ){
        Vue.$vux.toast.text( '未授权', 'middle')
        return Promise.reject( data.msg );
        //  跳转授权
    }else{
        return data;
    }
},function(error){
    //对返回的错误进行一些处理
    let status  = error.response.status;
    if( status == 0 ){
      Vue.$vux.toast.text( data.msg, 'middle')
    }else if( status == 401 ){
      Vue.$vux.toast.text( '未登录', 'middle')
      location.href = '/login'
    }else if( status == 403 ){
      Vue.$vux.toast.text( '未授权', 'middle')
      //  跳转授权
    }else{
      Vue.$vux.toast.text( '请求接口报错', 'middle')
    }
    return Promise.reject(error);
});


const app = new Vue({
    el: '#app',
    router,
      // store,
    template: '<App/>',
    components: { App }
});


