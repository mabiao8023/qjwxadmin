/**
 * Created by mabiao on 2017/11/22.
 */
// 懒加载
// /* webpackChunkName: "part1" */  注释为相同数据代码块的归类命名
const Index = () =>  import(/* webpackChunkName: "part1" */ '../pages/index/index.vue');	//首页

const AskIndex = () => import(/* webpackChunkName: "part1" */ '../pages/ask/index.vue');	//问题详情页面

const UsercateList = () => import(/* webpackChunkName: "part3" */ '../pages/usercate/list.vue'); 				// 老师列表首页
const HighAnswerList = () => import(/* webpackChunkName: "part3" */ '../pages/usercate/highList.vue'); 			// 老师列表首页

//=== 答主首页 ====
const AnswerIndex = () => import(/* webpackChunkName: "part4 */ '../pages/user/index.vue'); 				// 老师首页
const AnsweredList = () => import(/* webpackChunkName: "part5" */ '../pages/user/answered.vue'); 	// 老师首页回答了问题列表
const CommendList = () => import(/* webpackChunkName: "part5" */ '../pages/user/commendList.vue'); 	// 老师首页评价列表页面
const ChatPaySuc = () => import(/* webpackChunkName: "part5" */ '../pages/user/chatPaySuc.vue'); 			// 老师首页评价列表页面

//=== 答主首页 ====
//=== 闪测模块 ====

const ScIndex = () => import(/* webpackChunkName: "part6" */ '../pages/sc/index.vue');	        // 闪测首页
const ScCateList = () => import(/* webpackChunkName: "part6" */ '../pages/sc/catelist.vue');	// 类别详情
const ScDetail = () => import(/* webpackChunkName: "part7" */ '../pages/sc/detail.vue');	    // 下单详情页
const ScFeedback = () => import(/* webpackChunkName: "part7" */ '../pages/sc/feedback.vue');	// 反馈页面
const ScComment = () => import(/* webpackChunkName: "part7" */ '../pages/sc/comment.vue');	    // 反馈页面
const ScHotlist = () => import(/* webpackChunkName: "part7" */ '../pages/sc/hotlist.vue');   	// 热门闪测列表
//=== 闪测模块 END ====


//=== 个人中心模块 ====
const MeIndex = () => import(/* webpackChunkName: "part8" */ '../pages/me/index.vue');	        			// 个人首页
const MeQrcode = () => import(/* webpackChunkName: "part9" */ '../pages/me/qrcode.vue');	    			// 我的二维码
const MeModify = () => import(/* webpackChunkName: "part9" */ '../pages/me/modify.vue');	    			// 我的二维码
const MeTyrants = () => import(/* webpackChunkName: "part9" */ '../pages/spare/tyrants.vue');				// 我的打赏榜
const MeSpare = () => import(/* webpackChunkName: "part9" */ '../pages/spare/spare.vue');	    			// 打赏
const MeQuestions = () => import(/* webpackChunkName: "part10" */ '../pages/me/asks.vue');	    			// 我的普通问题列表
const MePersonQuestions = () => import(/* webpackChunkName: "part10" */ '../pages/chatroom/chatList.vue');	// 我的个人问题列表
const MePersonChatroom = () => import(/* webpackChunkName: "part11" */ '../pages/chatroom/chatRoom.vue');	// 我的个人问题列表

const MeAskDetail = () => import(/* webpackChunkName: "part12" */ '../pages/ask/askAgain.vue');				// 我的问题详情列表
const CouponIndex = () => import(/* webpackChunkName: "part12" */ '../pages/coupon/index.vue');				// 优惠券首页
const MeTouting = () => import(/* webpackChunkName: "part12" */ '../pages/me/touting.vue');					// 我听页面
const MeIncome = () => import(/* webpackChunkName: "part12" */ '../pages/me/income.vue');					// 我的收入页面
const MeFeedback = () => import(/* webpackChunkName: "part12" */ '../pages/me/feedback.vue');				// 我的收入页面
const MeAgreement = () => import(/* webpackChunkName: "part12" */ '../pages/me/agreement.vue');				// 协议页面
const MeWelcome = () => import(/* webpackChunkName: "part12" */ '../pages/me/welcome.vue');				// 协议页面

const MeAnswerList = () => import(/* webpackChunkName: "part13" */ '../pages/me/answers.vue');				// 老师回答列表
const MeAnswerDetail = () => import(/* webpackChunkName: "part13" */ '../pages/ask/askDetail.vue');			// 老师回答问题详情
const MeAnswerIndex = () => import(/* webpackChunkName: "part13" */ '../pages/me/answer.vue');				// 老师回答语音问题页面

//=== 个人中心模块 END ====

//=== 打赏模块 ====

const SpareSuccess = () => import(/* webpackChunkName: "part9" */ '../pages/spare/spareSuccess.vue');	// 打赏成功

//=== 打赏模块 END ====

//=== 搜索模块 ====
const SearchIndex = () => import(/* webpackChunkName: "part14" */ '../pages/search/search.vue');			// 搜索首页
const SearchList = () => import(/* webpackChunkName: "part14" */ '../pages/search/searchList.vue');		// 搜索首页
//=== 搜索模块 END ====

//=== 手机号注册模块  ====
const AddPhone = () => import(/* webpackChunkName: "part15" */ '../pages/me/addPhone.vue');
//=== 手机号注册模块 END ====
// const NotFindPage = () => import(/* webpackChunkName: "part16" */ '../pages/notFindPage.vue');


//=== 销售渠道老师咨询室下单页面 ===
const SaleIndex = () => import(/* webpackChunkName: "part17" */ '../pages/sale/saleIndex.vue');
//=== 销售渠道老师咨询室下单页面 END ===

//=== 推广页面 ===
const spread = () => import(/* webpackChunkName: "part17" */ '../pages/spread/index.vue');
const money = () => import(/* webpackChunkName: "part17" */ '../pages/spread/money.vue');
//=== 课程模块 ===
const courseIndex = () => import(/* webpackChunkName: "part18" */ '../pages/course/index.vue');
const courseDetail = () => import(/* webpackChunkName: "part18" */ '../pages/course/course_detail.vue');
const courseIng = () => import(/* webpackChunkName: "part18" */ '../pages/course/course_ing.vue');
const myCourse = () => import(/* webpackChunkName: "part18" */ '../pages/course/my_course.vue');
const tuwenDetail = () => import(/* webpackChunkName: "part18" */ '../pages/course/tuwen_detail.vue');

//=== 课程模块 END ===

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
			/* 首页页面 */
			path:'/',
			component:Index,
			meta: { scrollNum: 1 }
		},
		{
			/* 偷听页面 */
			path:'/askIndex',
			component:AskIndex
		},
		{
			/* 老师列表 */
			path:'/usercateList',
			component:UsercateList
		},
		{
			/* 高价老师列表 */
			path:'/highAnswerList',
			component:HighAnswerList
		},
		{
			/* 老师首页 */
			path:'/answerIndex',
			component:AnswerIndex
		},
		{
			/* 老师首页回答了问题的页面 */
			path:'/answeredList',
			component:AnsweredList
		},
		{
			/* 老师首页评价列表页面 */
			path:'/commendList',
			component:CommendList
		},
		{
			/* 高价服务订单页面 */
			path:'/chatPaySuc',
			component:ChatPaySuc
		},
		{
			/* 个人中心 */
			path:'/meIndex',
			component:MeIndex
		},
		{
			/* 老师二维码 */
			path:'/MeQrcode',
			component:MeQrcode
		},
		{
			/* 老师资料修改 */
			path:'/MeModify',
			component:MeModify
		},
		{
			/* 打赏榜单 */
			path:'/MeTyrants',
			component:MeTyrants
		},
		{
			/* 打赏页面 */
			path:'/MeSpare',
			component:MeSpare
		},
		{
			/* 我的普通问题 */
			path:'/MeQuestions',
			component:MeQuestions
		},
		{
			/* 我的个人问题 */
			path:'/MePersonQuestions',
			component:MePersonQuestions
		},
		{
			/* 我的个人聊天室问题 */
			path:'/MePersonChatroom',
			component:MePersonChatroom
		},
		{
			/* 我的问题详情 */
			path:'/MeAskDetail',
			component:MeAskDetail
		},

		{
			/* 优惠券页面 */
			path:'/CouponIndex',
			component:CouponIndex
		},
			/* 我听页面 */
		{
			path:'/MeTouting',
			component:MeTouting
		},
			/* 我的收入页面 */
		{
			path:'/MeIncome',
			component:MeIncome
		},
			/* 我的反馈页面 */
		{
			path:'/MeFeedback',
			component:MeFeedback
		},
			/* 我的答主申请页面 */
		{
			path:'/MeWelcome',
			component:MeWelcome
		},
			/* 协议页面 */
		{
			path:'/MeAgreement',
			component:MeAgreement
		},
		{
			path:'/scIndex',
			component:ScIndex
		},
		{
			path:'/ScCateList',
			component:ScCateList
		},
		{
			path:'/ScDetail',
			component:ScDetail
		},
		{
			path:'/ScFeedback',
			component:ScFeedback
		},
		{
			path:'/ScComment',
			component:ScComment
		},
		{
			path:'/ScHotlist',
			component:ScHotlist
		},
		{
			/* 打赏成功后 */
			path:'/SpareSuccess',
			component:SpareSuccess
		},
		{
			/* 搜索首页 */
			path:'/SearchIndex',
			component:SearchIndex
		},
		{
			/* 搜索结果页 */
			path:'/SearchList',
			component:SearchList
		},
		{
			/* 老师回答问题列表 */
			path:'/MeAnswerList',
			component:MeAnswerList
		},
		{
			/* 老师回答问题详情 */
			path:'/MeAnswerDetail',
			component:MeAnswerDetail
		},
		{
			/* 老师回答语音页面 */
			path:'/MeAnswerIndex',
			component:MeAnswerIndex
		},
		{
			/* 手机号注册 */
			path:'/AddPhone',
			component:AddPhone
		},
		{
			path:'/saleIndex',
			component:SaleIndex
		},
		{
			path:'*',
			// component:Index,
			redirect:'/'
		},
		{
			path:'/spread',
			component:spread
		},
		{
			path:'/money',
			component:money
		},
		{
			/*课程首页*/
			path:'/courseIndex',
			component:courseIndex
		},
		{
			/*课程详情*/
			path:'/courseDetail',
			component:courseDetail
		},
		{
			/*课程详情*/
			path:'/courseIng',
			component:courseIng
		},
		{
			/*我的课程列表*/
			path:'/myCourse',
			component:myCourse
		},
		{
			/*课程学习图文信息*/
			path:'/tuwenDetail',
			component:tuwenDetail
		}
	]
}
