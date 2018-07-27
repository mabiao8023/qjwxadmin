/**
 * Created by mabiao on 2018/7/15/015.
 */
// 解析链接查询字符串
import  {querystring} from 'vux'
let appid = 'wx638359a81275bd8d'
let wechatPayUrl = `${location.origin}/weChatPay?order_id=`
let wechatAuthUrl = `${location.origin}/weChatAuth`
export let getParams = () => {
    let search = location.search
    return querystring.parse(search)
}

export let weChatPay = (order_id,isPost) => {
    let redirect_url = `${wechatPayUrl}${order_id}&isPost=${isPost}`
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_url}&response_type=code&scope=snsapi_login,snsapi_userinfo&state=1,0#wechat_redirect`
}

export let weChatAuth = () => {
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${wechatAuthUrl}&response_type=code&scope=snsapi_login,snsapi_userinfo&state=1,0#wechat_redirect`
}
