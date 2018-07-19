/**
 * Created by mabiao on 2018/7/15/015.
 */
export default {
  //  接口路径
  login: '/api/User/login',                 // 用户登录
  getCode: '/api/Sms/send',                 // 获取手机号验证码
  checkCode: '/api/Sms/check',              // 验证手机号验证码
  resetpwd: '/api/User/resetpwd',           // 重置密码
  getUserInfo: '/api/User/index',           // 用户首页信息
  modifyPwd: '/api/User/changepwd',         // 修改密码
  getAccount: '/api/Account/getAccount',    // 账号余额
  getCash: '/api/Account/cash',             // 提现现金
  accountLog:'/api/Account/accountLog',     // 账户明细
  accountFrostLog: '/api/Account/accountFrostLog',  // 待结算
  accountLogDetail: '/api/Account/accountLogDetail',// 待结算详情
  getGoods: '/api/Good/index',                      // 获取商品
  shoppingTrolley: '/api/Good/shoppingTrolley',     // 购物车内容
  shoppingTrolleyEdit: '/api/Good/shoppingTrolleyEdit', // 编辑购物车
  shoppingTrolleyAdd: '/api/Good/shoppingTrolleyAdd',   // 添加进购物车
  addOrder: '/api/Good/addOrder',                       // 确认订单
  addressManage: '/api/address/index',                  // 地址管理
  addressEditConfirm: '/api/address/editConfirm',       // 地址编辑确认
  addressGet: '/api/address/edit',                     // 编辑收地址页面数据获取

}
