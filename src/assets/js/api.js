/**
 * Created by mabiao on 2018/7/15/015.
 */
let host = '//qjwx.1sk1.com'
export default {
    //  接口路径
    login: `${host}/api/User/login`,                 // 用户登录
    getCode: `${host}/api/Sms/send`,                 // 获取手机号验证码
    checkCode: `${host}/api/Sms/check`,              // 验证手机号验证码
    resetpwd: `${host}/api/User/resetpwd`,           // 重置密码
    getUserInfo: `${host}/api/User/index`,           // 用户首页信息
    modifyPwd: `${host}/api/User/changepwd`,         // 修改密码
    getAccount: `${host}/api/Account/getAccount`,    // 账号余额
    getCash: `${host}/api/Account/cash`,             // 提现现金
    accountLog: `${host}/api/Account/accountLog`,     // 账户明细
    accountFrostLog: `${host}/api/Account/accountFrostLog`,  // 待结算
    accountLogDetail: `${host}/api/Account/accountLogDetail`,// 待结算详情
    getGoods: `${host}/api/Good/index`,                      // 获取商品
    shoppingTrolley: `${host}/api/Good/shoppingTrolley`,     // 购物车内容
    shoppingTrolleyEdit: `${host}/api/Good/shoppingTrolleyEdit`, // 编辑购物车
    shoppingTrolleyAdd: `${host}/api/Good/shoppingTrolleyAdd`,   // 添加进购物车
    addOrder: `${host}/api/Order/addOrder`,                       // 确认订单
    addressManage: `${host}/api/Address/index`,                  // 地址管理
    addressEditConfirm: `${host}/api/Address/editConfirm`,       // 地址编辑确认
    addressGet: `${host}/api/Address/edit`,                     // 编辑收地址页面数据获取
    confirmOrder: `${host}/api/Order/confirmOrder`,             // 确认订单页面
    settlementOrder: `${host}/api/Order/SettlementOrder`,       // 结算订单
    orderIndex: `${host}/api/Order/index`,                      // 订单管理页面
    orderDetail: `${host}/api/Order/orderDetail`,               // 订单详情
    operateAddress: `${host}/api/Address/operateAddress`,       // 编辑地址
    getSelfAddress: `${host}/api/Address/getSelfAddress`,       // 获取提货人信息
    editSelfAddress: `${host}/api/Address/editSelfAddress`,     // 编辑提货人信息
    changeOrderStatus: `${host}/api/Order/changeOrderStatus`,   // 改变订单状态
    logistics: `${host}/api/Order/logistics`,                   // 查看物流信息
    uploadVoucher: `${host}/api/Order/uploadVoucher`,           // 上传支付凭证
    getVoucher: `${host}/api/Order/getVoucher`,                 // 查看支付凭证
    inviteMaker: `${host}/api/Maker/invite`,                    // 邀请创客
    registerMaker: `${host}/api/Maker/register`,                // 创客注册
    delivery: `${host}/api/Order/delivery`,                     // 发货管理
    deliveryOrderDetail: `${host}/api/Order/deliveryOrderDetail`, // 发货管理详情
    verify: `${host}/api/order/verify`,                         // 审核退款/审核凭证
    makerManage: `${host}/api/Maker/manage`,                    // 创客管理
    makerVerifyApply: `${host}/api/Maker/verifyApply`,          // 拒绝/取消代理资格
    uploadImage: `${host}/api/Common/upload`,                   // 上传图片
    orderPayment: `${host}/api/Order/payment`,                  // 微信支付
    paymentReady: `${host}/api/Order/paymentReady`,             // 支付第二波
    wxLogin: `${host}/api/Common/wxLogin`,                      // 微信登录接口
    orderAccount: `${host}/api/Order/account`,                  // 打款账号
    deliveryAddress: `${host}/api/Order/deliveryAddress`,       // 支付后获取提货地址
}

