webpackJsonp([3],{"3vn/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("3SZ7"),r=a.n(i),n=a("Mpi1"),o=a("gwNS"),d=a("LOkV"),s={components:{},data:function(){return{code:Object(d.a)().code||"",order_id:Object(d.a)().order_id||"",delivery:Object(d.a)().delivery||""}},methods:{layer:function(e){this.$vux.toast.text(e||"hello","middle")},showLoading:function(e){this.$vux.loading.show({text:e||"加载中"})},hideLoading:function(){this.$vux.loading.hide()},goPay:function(){var e=this;this.$http.post(o.a.paymentReady,{ordersn:this.order_id}).then(function(t){var a=e;e.hideLoading(),e.$wechat.chooseWXPay({timestamp:t.data.timeStamp,nonceStr:t.data.nonceStr,package:t.data.package,signType:t.data.signType,paySign:t.data.paySign,success:function(e){1==a.delivery?a.$router.replace({path:"/postSuc?order_id="+a.order_id}):a.$router.replace({path:"/selfGetSuc?order_id="+a.order_id})},fail:function(e){a.layer(e),n.a.remove("my_openId"),a.$router.replace({path:"/pay?order_id="+a.order_id})},cancel:function(){a.layer("您已放弃支付"),a.$router.replace({path:"/orderDetail?order_id="+a.order_id})}})}).catch(function(t){e.hideLoading()})},getConfig:function(){var e=this;this.$http.post(o.a.orderPayment,{ordersn:this.order_id}).then(function(t){if(!t.data.signPackage||!t.data.signPackage.appId)return e.layer("没有返回signPackage");e.$wechat.config({debug:!1,appId:t.data.signPackage.appId,timestamp:t.data.signPackage.timestamp,nonceStr:t.data.signPackage.nonceStr,signature:t.data.signPackage.signature,jsApiList:["chooseWXPay"]}),e.$wechat.ready(function(){e.goPay()}),e.$wechat.error(function(t){e.layer("微信config验证失败，失败原因："+r()(t))})}).catch(function(t){e.hideLoading()})},login:function(){var e=this;this.$http.post(o.a.wxLogin,{wx_code:this.code}).then(function(t){t.data.openId&&n.a.set("my_openId",t.data.openId,{expires:30}),e.getConfig()}).catch(function(t){e.hideLoading()})}},mounted:function(){document.getElementsByTagName("title")[0].textContent="正在支付",this.showLoading("正在支付"),n.a.get("my_openId")?this.getConfig():this.login()}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wxpay-container"},[t("div",{staticClass:"wxpay-header"},[t("img",{staticClass:"h-logo",attrs:{src:a("KItN"),alt:""}}),this._v(" "),t("p",{staticClass:"h-title"},[this._v("正在跳转支付，请稍等......")])])])}]};var p=a("D8HT")(s,c,!1,function(e){a("ZpBc")},null,null);t.default=p.exports},FRKL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Mpi1"),r=a("gwNS"),n=a("LOkV"),o={components:{},data:function(){return{code:Object(n.a)().code||""}},methods:{layer:function(e){this.$vux.toast.text(e||"hello","middle")},showLoading:function(e){this.$vux.loading.show({text:e||"加载中"})},hideLoading:function(){this.$vux.loading.hide()},login:function(){var e=this;this.showLoading("正在登录"),this.$http.post(r.a.wxLogin,{wx_code:this.code}).then(function(t){e.hideLoading(),t.data.openId&&i.a.set("my_openId",t.data.openId,{expires:30}),e.$router.replace({path:"/tixian"})}).catch(function(t){e.hideLoading()})}},mounted:function(){document.getElementsByTagName("title")[0].textContent="正在登录",this.login()}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wxpay-container"},[t("div",{staticClass:"wxpay-header"},[t("img",{staticClass:"h-logo",attrs:{src:a("KItN"),alt:""}}),this._v(" "),t("p",{staticClass:"h-title"},[this._v("正在跳转登录，请稍等......")])])])}]};var s=a("D8HT")(o,d,!1,function(e){a("brTz")},null,null);t.default=s.exports},KItN:function(e,t,a){e.exports=a.p+"static/img/logo.04fb7a5.png"},ZpBc:function(e,t){},brTz:function(e,t){},gwNS:function(e,t,a){"use strict";var i="//qjwx.1sk1.com";t.a={login:i+"/api/User/login",getCode:i+"/api/Sms/send",checkCode:i+"/api/Sms/check",resetpwd:i+"/api/User/resetpwd",getUserInfo:i+"/api/User/index",modifyPwd:i+"/api/User/changepwd",getAccount:i+"/api/Account/getAccount",getCash:i+"/api/Account/cash",accountLog:i+"/api/Account/accountLog",accountFrostLog:i+"/api/Account/accountRebate",accountLogDetail:i+"/api/Account/accountLogDetail",getGoods:i+"/api/Good/index",shoppingTrolley:i+"/api/Good/shoppingTrolley",shoppingTrolleyEdit:i+"/api/Good/shoppingTrolleyEdit",shoppingTrolleyAdd:i+"/api/Good/shoppingTrolleyAdd",addOrder:i+"/api/Order/addOrder",addressManage:i+"/api/Address/index",addressEditConfirm:i+"/api/Address/editConfirm",addressGet:i+"/api/Address/edit",confirmOrder:i+"/api/Order/confirmOrder",settlementOrder:i+"/api/Order/SettlementOrder",orderIndex:i+"/api/Order/index",orderDetail:i+"/api/Order/orderDetail",operateAddress:i+"/api/Address/operateAddress",getSelfAddress:i+"/api/Address/getSelfAddress",editSelfAddress:i+"/api/Address/editSelfAddress",changeOrderStatus:i+"/api/Order/changeOrderStatus",logistics:i+"/api/Order/logistics",uploadVoucher:i+"/api/Order/addVoucher",getVoucher:i+"/api/Order/getVoucher",inviteMaker:i+"/api/Maker/invite",registerMaker:i+"/api/User/register",delivery:i+"/api/Order/delivery",deliveryOrderDetail:i+"/api/Order/deliveryOrderDetail",verify:i+"/api/order/verify",makerManage:i+"/api/Maker/manage",makerVerifyApply:i+"/api/Maker/verifyApply",uploadImage:i+"/api/Common/upload",orderPayment:i+"/api/Order/payment",paymentReady:i+"/api/Order/paymentReady",wxLogin:i+"/api/Common/wxLogin",orderAccount:i+"/api/Order/account",deliveryAddress:i+"/api/Order/deliveryAddress",wxConfig:i+"/api/Common/wxConfig",getContract:i+"/api/Maker/contract"}}});
//# sourceMappingURL=3.bde01e0f2a7e35dadb14.js.map