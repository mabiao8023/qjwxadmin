/**
 * Created by mabiao on 2018/7/15/015.
 */
export default {
  login: '/api/User/login',                 // 用户登录
  getCode: '/api/Sms/send',                 // 获取手机号验证码
  checkCode: '/api/Sms/check',              // 验证手机号验证码
  resetpwd: '/api/User/resetpwd',           // 重置密码
  getUserInfo: '/api/User/index',           // 用户首页信息
  modifyPwd: '/api/User/changepwd',         // 修改密码
  getAccount: '/api/Account/getAccount',    // 账号余额
  getCash: '/api/Account/cash',             // 提现现金
  accountLog:'/api/Account/accountLog',     // 账户明细
  accountFrostLog: '/api/Account/accountFrostLog', // 待结算
  accountLogDetail: '/api/Account/accountLogDetail',// 待结算详情
  getGoods: '/api/Good/index',              // 获取商品
}
