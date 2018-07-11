/**
 * Created by mabiao on 2018/07/10.
 */
// 懒加载
// /* webpackChunkName: "part1" */  注释为相同数据代码块的归类命名
//  登录
const Login = () =>  import(/* webpackChunkName: "part1" */ '../pages/login/login.vue');	 // 登录页面
const ForgetPwd = () =>  import(/* webpackChunkName: "part1" */ '../pages/login/forgetPwd.vue');	 // 忘记密码
// 内购商城
const Market = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/goods.vue');	 // 内购商场
const ShopCart = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/shopCart.vue');	 // 购物车
const Pay = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/confirmOrder.vue');	 // 支付页面
const Address = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/address.vue');	 // 地址页面
const AddAddress = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/addAddress.vue');	 // 增加地址
const SelfGet = () =>  import(/* webpackChunkName: "part2" */ '../pages/shop/ziti.vue');	 // 字体配置

// 个人中心
const MeIndex = () =>  import(/* webpackChunkName: "part1" */ '../pages/me/me.vue');	      // 个人中心首页
const Balance = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/balance.vue');	  // 待结算
const BalanceDetail = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/balanceDetail.vue');	  // 账户明细
const Chuangke = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/chuangke.vue');	  // 创客管理
const Settle = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/jiesuan.vue');	  // 结算
const ModifyPwd = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/modifyPwd.vue');	  // 修改密码
const OrderDetail = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/orderDetail.vue');	  // 订单详情
const Orders = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/orders.vue');	  // 订单列表
const Setting = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/setting.vue');	  // 设置中心
const Received = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/shouhuosuc.vue');	  // 收货成功
const Tixian = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/tixian.vue');	  // 提现
const TiXianSuc = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/tixiansuc.vue');	  // 提现成功
const Invite = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/yaoqing.vue');	  // 邀请
const PostSuc = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/youjisuc.vue');	  // 邮寄成功
const ResCK = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/zhuceck.vue');	  // 注册创客
const SelfGetSuc = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/zitisuc.vue');	  // 自提成功
const Fahuo = () =>  import(/* webpackChunkName: "part3" */ '../pages/me/fahuo.vue');	  // 发货管理

export default {
      mode: 'history',
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
              /* 自提设置 */
              path:'/selfGet',
              component: SelfGet,
              meta: {  }
          },
          {
              /* 个人中心 */
              path:'/meIndex',
              component: MeIndex,
              meta: {  }
          },
          {
              /* 待结算 */
              path:'/balance',
              component: Balance,
              meta: {  }
          },
          {
              /* 账户明细 */
              path:'/balanceDetail',
              component: BalanceDetail,
              meta: {  }
          },
          {
              /* 创客管理 */
              path:'/chuangke',
              component: Chuangke,
              meta: {  }
          },
          {
              /* 结算 */
              path:'/settle',
              component: Settle,
              meta: {  }
          },
          {
              /* 修改密码 */
              path:'/modifyPwd',
              component: ModifyPwd,
              meta: {  }
          },
          {
              /* 订单详情 */
              path:'/orderDetail',
              component: OrderDetail,
              meta: {  }
          },
          {
              /* 订单列表 */
              path:'/orders',
              component: Orders,
              meta: {  }
          },
          {
              /* 设置中心 */
              path:'/setting',
              component: Setting,
              meta: {  }
          },
          {
              /* 收货成功 */
              path:'/received',
              component: Received,
              meta: {  }
          },
          {
            /* 提现 */
            path:'/tixian',
            component: Tixian,
            meta: {  }
          },
          {
              /* 提现成功 */
              path:'/tixiansuc',
              component: TiXianSuc,
              meta: {  }
          },
          {
              /* 邀请 */
              path:'/invite',
              component: Invite,
              meta: {  }
          },
          {
              /* 邮寄成功 */
              path:'/postSuc',
              component: PostSuc,
              meta: {  }
          },
          {
              /* 注册创客 */
              path:'/reschuangke',
              component: ResCK,
              meta: {
                  /* 该路由无需登录 */
                  noNeedLogin: true
              }
          },
          {
              /* 自提成功 */
              path:'/selfGetSuc',
              component: SelfGetSuc,
              meta: {  }
          },
          {
              /* 发货管理 */
              path:'/fahuo',
              component: Fahuo,
              meta: {  }
          },
      ]
}
