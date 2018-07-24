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
    accountLog: '/api/Account/accountLog',     // 账户明细
    accountFrostLog: '/api/Account/accountFrostLog',  // 待结算
    accountLogDetail: '/api/Account/accountLogDetail',// 待结算详情
    getGoods: '/api/Good/index',                      // 获取商品
    shoppingTrolley: '/api/Good/shoppingTrolley',     // 购物车内容
    shoppingTrolleyEdit: '/api/Good/shoppingTrolleyEdit', // 编辑购物车
    shoppingTrolleyAdd: '/api/Good/shoppingTrolleyAdd',   // 添加进购物车
    addOrder: '/api/Order/addOrder',                       // 确认订单
    addressManage: '/api/Address/index',                  // 地址管理
    addressEditConfirm: '/api/Address/editConfirm',       // 地址编辑确认
    addressGet: '/api/Address/edit',                     // 编辑收地址页面数据获取
    confirmOrder: '/api/Order/confirmOrder',             // 确认订单页面
    settlementOrder: '/api/Order/SettlementOrder',       // 结算订单
    orderIndex: '/api/Order/index',                      // 订单管理页面
    operateAddress: '/api/Address/operateAddress',       // 编辑地址
    getSelfAddress: '/api/Address/getSelfAddress',       // 获取提货人信息
    editSelfAddress: '/api/Address/editSelfAddress',     // 编辑提货人信息
    changeOrderStatus: '/api/Order/changeOrderStatus',   // 改变订单状态
    logistics: '/api/Order/logistics',                   // 查看物流信息
    uploadVoucher: '/api/Order/uploadVoucher',           // 上传支付凭证
    getVoucher: '/api/Order/getVoucher',                 // 查看支付凭证
    inviteMaker: '/api/Maker/invite',                    // 邀请创客
    registerMaker: '/api/Maker/register',                // 创客注册
    delivery: '/api/Order/delivery',                     // 发货管理
    deliveryOrderDetail: '/api/Order/deliveryOrderDetail', // 发货管理详情
    verify: '/api/order/verify',                         // 审核退款/审核凭证
    makerManage: '/api/Maker/manage',                    // 创客管理
    makerVerifyApply: '/api/Maker/verifyApply',          // 拒绝/取消代理资格
}
