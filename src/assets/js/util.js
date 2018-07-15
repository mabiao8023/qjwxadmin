/**
 * Created by mabiao on 2018/7/15/015.
 */
// 解析链接查询字符串
import  { querystring } from 'vux'

export let getParams = () =>  {
    let search = location.search
    return querystring.parse(search)
}
