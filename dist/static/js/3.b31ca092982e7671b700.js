webpackJsonp([3],{"3vn/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Mpi1"),n=i("gwNS"),o=i("LOkV"),r={components:{},data:function(){return{code:Object(o.a)().code||"",order_id:Object(o.a)().order_id||"",delivery:Object(o.a)().delivery||""}},methods:{layer:function(e){this.$vux.toast.text(e||"hello","middle")},showLoading:function(e){this.$vux.loading.show({text:e||"加载中"})},hideLoading:function(){this.$vux.loading.hide()},goPay:function(){var e=this;this.$http.post(n.a.paymentReady,{ordersn:this.order_id}).then(function(t){var i=e;e.hideLoading(),e.$wechat.chooseWXPay({timestamp:t.data.timeStamp,nonceStr:t.data.nonceStr,package:t.data.package,signType:t.data.signType,paySign:t.data.paySign,success:function(e){1==i.delivery?i.$router.replace({path:"/postSuc?order_id="+i.order_id}):i.$router.replace({path:"/selfGetSuc?order_id="+i.order_id})},fail:function(e){i.layer(e)}})}).catch(function(t){e.hideLoading()})},getConfig:function(){var e=this;this.$http.post(n.a.orderPayment,{ordersn:this.order_id}).then(function(t){e.$wechat.config({debug:!1,appId:t.data.signPackage.appId,timestamp:t.data.signPackage.timestamp,nonceStr:t.data.signPackage.nonceStr,signature:t.data.signPackage.signature,jsApiList:["chooseWXPay"]}),e.$wechat.ready(function(){e.goPay()})}).catch(function(t){e.hideLoading()})},login:function(){var e=this;this.$http.post(n.a.wxLogin,{wx_code:this.code}).then(function(t){t.data.openId&&a.a.set("my_openId",t.data.openId,{expires:30}),e.getConfig()}).catch(function(t){e.hideLoading()})}},mounted:function(){document.getElementsByTagName("title")[0].textContent="正在支付",this.showLoading("正在支付"),a.a.get("my_openId")?this.getConfig():this.login()}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wxpay-container"},[t("div",{staticClass:"wxpay-header"},[t("img",{staticClass:"h-logo",attrs:{src:i("KItN"),alt:""}}),this._v(" "),t("p",{staticClass:"h-title"},[this._v("正在跳转支付，请稍等......")])])])}]};var s=i("D8HT")(r,d,!1,function(e){i("uz6t")},null,null);t.default=s.exports},FRKL:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Mpi1"),n=i("gwNS"),o=i("LOkV"),r={components:{},data:function(){return{code:Object(o.a)().code||""}},methods:{layer:function(e){this.$vux.toast.text(e||"hello","middle")},showLoading:function(e){this.$vux.loading.show({text:e||"加载中"})},hideLoading:function(){this.$vux.loading.hide()},login:function(){var e=this;this.showLoading("正在登录"),this.$http.post(n.a.wxLogin,{wx_code:this.code}).then(function(t){e.hideLoading(),t.data.openId&&a.a.set("my_openId",t.data.openId,{expires:30}),e.$router.replace({path:"/tixian"})}).catch(function(t){e.hideLoading()})}},mounted:function(){document.getElementsByTagName("title")[0].textContent="正在登录",this.login()}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wxpay-container"},[t("div",{staticClass:"wxpay-header"},[t("img",{staticClass:"h-logo",attrs:{src:i("KItN"),alt:""}}),this._v(" "),t("p",{staticClass:"h-title"},[this._v("正在跳转登录，请稍等......")])])])}]};var s=i("D8HT")(r,d,!1,function(e){i("hftX")},null,null);t.default=s.exports},KItN:function(e,t,i){e.exports=i.p+"static/img/logo.04fb7a5.png"},gwNS:function(e,t,i){"use strict";var a="//qjwx.1sk1.com";t.a={login:a+"/api/User/login",getCode:a+"/api/Sms/send",checkCode:a+"/api/Sms/check",resetpwd:a+"/api/User/resetpwd",getUserInfo:a+"/api/User/index",modifyPwd:a+"/api/User/changepwd",getAccount:a+"/api/Account/getAccount",getCash:a+"/api/Account/cash",accountLog:a+"/api/Account/accountLog",accountFrostLog:a+"/api/Account/accountFrostLog",accountLogDetail:a+"/api/Account/accountLogDetail",getGoods:a+"/api/Good/index",shoppingTrolley:a+"/api/Good/shoppingTrolley",shoppingTrolleyEdit:a+"/api/Good/shoppingTrolleyEdit",shoppingTrolleyAdd:a+"/api/Good/shoppingTrolleyAdd",addOrder:a+"/api/Order/addOrder",addressManage:a+"/api/Address/index",addressEditConfirm:a+"/api/Address/editConfirm",addressGet:a+"/api/Address/edit",confirmOrder:a+"/api/Order/confirmOrder",settlementOrder:a+"/api/Order/SettlementOrder",orderIndex:a+"/api/Order/index",orderDetail:a+"/api/Order/orderDetail",operateAddress:a+"/api/Address/operateAddress",getSelfAddress:a+"/api/Address/getSelfAddress",editSelfAddress:a+"/api/Address/editSelfAddress",changeOrderStatus:a+"/api/Order/changeOrderStatus",logistics:a+"/api/Order/logistics",uploadVoucher:a+"/api/Order/uploadVoucher",getVoucher:a+"/api/Order/getVoucher",inviteMaker:a+"/api/Maker/invite",registerMaker:a+"/api/Maker/register",delivery:a+"/api/Order/delivery",deliveryOrderDetail:a+"/api/Order/deliveryOrderDetail",verify:a+"/api/order/verify",makerManage:a+"/api/Maker/manage",makerVerifyApply:a+"/api/Maker/verifyApply",uploadImage:a+"/api/Common/upload",orderPayment:a+"/api/Order/payment",paymentReady:a+"/api/Order/paymentReady",wxLogin:a+"/api/Common/wxLogin",orderAccount:a+"/api/Order/account",deliveryAddress:a+"/api/Order/deliveryAddress"}},hftX:function(e,t){},uz6t:function(e,t){}});
//# sourceMappingURL=3.b31ca092982e7671b700.js.map