/**
 * Created by mabiao on 2018/07/10.
 */
// 懒加载
// /* webpackChunkName: "part1" */  注释为相同数据代码块的归类命名
const Login = () =>  import(/* webpackChunkName: "part1" */ '../pages/login/login.vue');	 // 登录页面
const ForgetPwd = () =>  import(/* webpackChunkName: "part1" */ '../pages/login/forgetPwd.vue');	 // 忘记密码
const Market = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/goods.vue');	 // 内购商场
const ShopCart = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/shopCart.vue');	 // 购物车
const Pay = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/confirmOrder.vue');	 // 支付页面
const Address = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/address.vue');	 // 地址页面
const AddAddress = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/addAddress.vue');	 // 增加地址
const SelfGet = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/ziti.vue');	 // 字体配置




export default {
      mode:'history',
      // scrollBehavior (to, from, savedPosition) {
      // 	if (savedPosition) {
      // 		// savedPosition is only available for popstate navigations.
      // 		return savedPosition
      // 	}
      // },
      routes:[
          {
              /* 登陆页面 */
              path:'/',
              component: Login,
              meta: { scrollNum: 1 }
          },
          {
              /* 登陆页面 */
              path:'/login',
              component: Login,
              meta: { scrollNum: 1 }
          },
          {
              /* 登陆页面 */
              path:'/forgetPwd',
              component: ForgetPwd,
              meta: {  }
          },
          {
              /* 内购商城 */
              path:'/market',
              component: Market,
              meta: {  }
          },
          {
              /* 购物车 */
              path:'/shopCart',
              component: ShopCart,
              meta: {  }
          },
          {
              /* 货物支付页面 */
              path:'/pay',
              component: Pay,
              meta: {  }
          },
          {
              /* 地址列表 */
              path:'/address',
              component: Address,
              meta: {  }
          },
          {
              /* 添加地址 */
              path:'/addAddress',
              component: AddAddress,
              meta: {  }
          },
          {
              /* 添加地址 */
              path:'/selfGet',
              component: SelfGet,
              meta: {  }
          },
      ]
}
