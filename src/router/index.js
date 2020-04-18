import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/reg', component: () => import('@/views/login/reg'), hidden: true},
{path: '/404', component: () => import('@/views/404'), hidden: true},
{
  path: '',
    component: Layout,
  redirect: '/home',
  children: [{
  path: 'home',
  name: 'home',
  component: () => import('@/views/home/index'),
  meta: {title: '首页', icon: 'home'}
}]
},
{
  path: '/pms',
    component: Layout,
  redirect: '/pms/product',
  name: 'pms',
  meta: {title: '商品', icon: 'product'},
  children: [{
    path: 'product',
    name: 'product',
    component: () => import('@/views/pms/product/index'),
    meta: {title: '商品列表', icon: 'product-list'}
},
  {
    path: 'addProduct',
      name: 'addProduct',
    component: () => import('@/views/pms/product/add'),
    meta: {title: '添加商品', icon: 'product-add'}
  },
  {
    path: 'updateProduct',
      name: 'updateProduct',
    component: () => import('@/views/pms/product/update'),
    meta: {title: '修改商品', icon: 'product-add'},
    hidden: true
  },
  {
    path: 'productRecycle',
      name: 'productRecycle',
    component: () => import('@/views/pms/product/index'),
    meta: {title: '商品回收站', icon: 'product-recycle'},
    hidden: true
  },
  {
    path: 'productComment',
      name: 'productComment',
    component: () => import('@/views/pms/product/index'),
    meta: {title: '商品评价', icon: 'product-comment'},
    hidden: true
  },
  {
    path: 'productCate',
      name: 'productCate',
    component: () => import('@/views/pms/productCate/index'),
    meta: {title: '商品分类', icon: 'product-cate'}
  },
  {
    path: 'addProductCate',
      name: 'addProductCate',
    component: () => import('@/views/pms/productCate/add'),
    meta: {title: '添加商品分类'},
    hidden: true
  },
  {
    path: 'updateProductCate',
      name: 'updateProductCate',
    component: () => import('@/views/pms/productCate/update'),
    meta: {title: '修改商品分类'},
    hidden: true
  },
  {
    path: 'productAttr',
      name: 'productAttr',
    component: () => import('@/views/pms/productAttr/index'),
    meta: {title: '商品类型', icon: 'product-attr'}
  },
  {
    path: 'productAttrList',
      name: 'productAttrList',
    component: () => import('@/views/pms/productAttr/productAttrList'),
    meta: {title: '商品属性列表'},
    hidden: true
  },
  {
    path: 'addProductAttr',
      name: 'addProductAttr',
    component: () => import('@/views/pms/productAttr/addProductAttr'),
    meta: {title: '添加商品属性'},
    hidden: true
  },
  {
    path: 'updateProductAttr',
      name: 'updateProductAttr',
    component: () => import('@/views/pms/productAttr/updateProductAttr'),
    meta: {title: '修改商品属性'},
    hidden: true
  },
  {
    path: 'brand',
      name: 'brand',
    component: () => import('@/views/pms/brand/index'),
    meta: {title: '品牌管理', icon: 'product-brand'}
  },
  {
    path: 'addBrand',
      name: 'addBrand',
    component: () => import('@/views/pms/brand/add'),
    meta: {title: '添加品牌'},
    hidden: true
  },
  {
    path: 'updateBrand',
      name: 'updateBrand',
    component: () => import('@/views/pms/brand/update'),
    meta: {title: '编辑品牌'},
    hidden: true
  }
]
},
{
  path: '/oms',
    component: Layout,
  redirect: '/oms/order',
  name: 'oms',
  meta: {title: '订单', icon: 'order'},
  children: [
    {
      path: 'order',
      name: 'order',
      component: () => import('@/views/oms/order/index'),
    meta: {title: '订单列表', icon: 'product-list'}
},
  {
    path: 'orderDetail',
      name: 'orderDetail',
    component: () => import('@/views/oms/order/orderDetail'),
    meta: {title: '订单详情'},
    hidden:true
  },
  {
    path: 'deliverOrderList',
      name: 'deliverOrderList',
    component: () => import('@/views/oms/order/deliverOrderList'),
    meta: {title: '发货列表'},
    hidden:true
  },
  {
    path: 'orderSetting',
      name: 'orderSetting',
    component: () => import('@/views/oms/order/setting'),
    meta: {title: '订单设置', icon: 'order-setting'}
  },
  {
    path: 'returnApply',
      name: 'returnApply',
    component: () => import('@/views/oms/apply/index'),
    meta: {title: '退货申请处理', icon: 'order-return'}
  },
  {
    path: 'returnReason',
      name: 'returnReason',
    component: () => import('@/views/oms/apply/reason'),
    meta: {title: '退货原因设置', icon: 'order-return-reason'}
  },
  {
    path: 'returnApplyDetail',
      name: 'returnApplyDetail',
    component: () => import('@/views/oms/apply/applyDetail'),
    meta: {title: '退货原因详情'},
    hidden:true
  }
]
},
{
  path:'/sms',
    component: Layout,
  redirect: '/sms/coupon',
  name: 'sms',
  meta: {title: '营销', icon: 'sms'},
  children: [
    {
      path: 'flash',
      name: 'flash',
      component: () => import('@/views/sms/flash/index'),
    meta: {title: '秒杀活动列表', icon: 'sms-flash'}
},
  {
    path: 'flashSession',
      name: 'flashSession',
    component: () => import('@/views/sms/flash/sessionList'),
    meta: {title: '秒杀时间段列表'},
    hidden:true
  },
  {
    path: 'selectSession',
      name: 'selectSession',
    component: () => import('@/views/sms/flash/selectSessionList'),
    meta: {title: '秒杀时间段选择'},
    hidden:true
  },
  {
    path: 'flashProductRelation',
      name: 'flashProductRelation',
    component: () => import('@/views/sms/flash/productRelationList'),
    meta: {title: '秒杀商品列表'},
    hidden:true
  },
  {
    path: 'coupon',
      name: 'coupon',
    component: () => import('@/views/sms/coupon/index'),
    meta: {title: '优惠券列表', icon: 'sms-coupon'}
  },
  {
    path: 'addCoupon',
      name: 'addCoupon',
    component: () => import('@/views/sms/coupon/add'),
    meta: {title: '添加优惠券'},
    hidden:true
  },
  {
    path: 'updateCoupon',
      name: 'updateCoupon',
    component: () => import('@/views/sms/coupon/update'),
    meta: {title: '修改优惠券'},
    hidden:true
  },
  {
    path: 'couponHistory',
      name: 'couponHistory',
    component: () => import('@/views/sms/coupon/history'),
    meta: {title: '优惠券领取详情'},
    hidden:true
  },
  {
    path: 'homeBrand',
      name: 'homeBrand',
    component: () => import('@/views/sms/brand/index'),
    meta: {title: '品牌推荐', icon: 'product-brand'}
  },
  {
    path: 'homeNew',
      name: 'homeNew',
    component: () => import('@/views/sms/new/index'),
    meta: {title: '新品推荐', icon: 'sms-new'}
  },
  {
    path: 'homeHot',
      name: 'homeHot',
    component: () => import('@/views/sms/hot/index'),
    meta: {title: '人气推荐', icon: 'sms-hot'}
  },
  {
    path: 'homeSubject',
      name: 'homeSubject',
    component: () => import('@/views/sms/subject/index'),
    meta: {title: '专题推荐', icon: 'sms-subject'}
  },
  {
    path: 'homeAdvertise',
      name: 'homeAdvertise',
    component: () => import('@/views/sms/advertise/index'),
    meta: {title: '广告列表', icon: 'sms-ad'}
  },
  {
    path: 'addHomeAdvertise',
      name: 'addHomeAdvertise',
    component: () => import('@/views/sms/advertise/add'),
    meta: {title: '添加广告'},
    hidden:true
  },
  {
    path: 'updateHomeAdvertise',
      name: 'updateHomeAdvertise',
    component: () => import('@/views/sms/advertise/update'),
    meta: {title: '编辑广告'},
    hidden:true
  },
  {
    path: 'group',
      name: 'group',
    component: () => import('@/views/sms/group/index'),
    meta: {title: '拼团列表', icon: 'product-list'}
  },
  {
    path: 'groupHistory',
      name: 'groupHistory',
    component: () => import('@/views/sms/group/detail'),
    meta: {title: '拼团详情'},
    hidden:true
  },
  {
    path: 'addGroup',
      name: 'addGroup',
    component: () => import('@/views/sms/group/add'),
    meta: {title: '添加拼团'},
    hidden: true
  },
  {
    path: 'updateGroup',
      name: 'updateGroup',
    component: () => import('@/views/sms/group/update'),
    meta: {title: '编辑拼团'},
    hidden: true
  },
  {
    path: 'redPacket',
      name: 'redPacket',
    component: () => import('@/views/sms/redPacket/index'),
    meta: {title: '红包列表', icon: 'product-list'}
  },

  {
    path: 'addRedPacket',
      name: 'addRedPacket',
    component: () => import('@/views/sms/redPacket/add'),
    meta: {title: '添加红包'},
    hidden: true
  },
  {
    path: 'updateRedPacket',
      name: 'updateRedPacket',
    component: () => import('@/views/sms/redPacket/update'),
    meta: {title: '编辑红包'},
    hidden: true
  }
]
},
{
  path: '/ums',
    component: Layout,
  redirect: '/ums/member',
  name: 'ums',
  meta: {title: '会员', icon: 'home'},
  children: [
    {
      path: 'member',
      name: 'member',
      component: () => import('@/views/ums/member/index'),
    meta: {title: '会员列表', icon: 'product-list'}
},

  {
    path: 'addMember',
      name: 'addMember',
    component: () => import('@/views/ums/member/add'),
    meta: {title: '添加会员'},
    hidden: true
  },
  {
    path: 'updateMember',
      name: 'updateMember',
    component: () => import('@/views/ums/member/update'),
    meta: {title: '编辑会员'},
    hidden: true
  }, {
  path: 'memberLevel',
    name: 'memberLevel',
    component: () => import('@/views/ums/memberLevel/index'),
    meta: {title: '会员等级列表', icon: 'product-list'}
},

  {
    path: 'addMemberLevel',
      name: 'addMemberLevel',
    component: () => import('@/views/ums/memberLevel/add'),
    meta: {title: '添加会员等级'},
    hidden: true
  },
  {
    path: 'updateMemberLevel',
      name: 'updateMemberLevel',
    component: () => import('@/views/ums/memberLevel/update'),
    meta: {title: '编辑会员等级'},
    hidden: true
  }, {
  path: 'school',
    name: 'school',
    component: () => import('@/views/ums/school/index'),
    meta: {title: '学校列表', icon: 'product-list'}
},

  {
    path: 'addSchool',
      name: 'addSchool',
    component: () => import('@/views/ums/school/add'),
    meta: {title: '添加学校'},
    hidden: true
  },
  {
    path: 'updateSchool',
      name: 'updateSchool',
    component: () => import('@/views/ums/school/update'),
    meta: {title: '编辑学校'},
    hidden: true
  }, {
  path: 'memberBlanceLog',
    name: 'memberBlanceLog',
    component: () => import('@/views/ums/memberBlanceLog/index'),
    meta: {title: '余额日志记录', icon: 'product-list'}
}

]
},
{
  path: '/sys',
    component: Layout,
  redirect: '/sys/user',
  name: 'sys',
  meta: {title: '系统管理', icon: 'home'},
  children: [
    {
      path: 'admin',
      name: 'admin',
      component: () => import('@/views/sys/admin/index'),
    meta: {title: '用户列表', icon: 'product-list'}
},
  {
    path: 'gen',
      name: 'gen',
    component: () => import('@/views/sys/gen/index'),
    meta: {title: '代码生成', icon: 'product-list'}
  },
  {
    path: 'addAdmin',
      name: 'addAdmin',
    component: () => import('@/views/sys/admin/add'),
    meta: {title: '添加用户'},
    hidden: true
  },
  {
    path: 'updateAdmin',
      name: 'updateAdmin',
    component: () => import('@/views/sys/admin/update'),
    meta: {title: '编辑用户'},
    hidden: true
  },{
  path: 'role',
    name: 'role',
    component: () => import('@/views/sys/role/index'),
    meta: {title: '角色列表', icon: 'product-list'}
},
  {
    path: 'addRole',
      name: 'addRole',
    component: () => import('@/views/sys/role/add'),
    meta: {title: '添加角色'},
    hidden: true
  },
  {
    path: 'updateRole',
      name: 'updateRole',
    component: () => import('@/views/sys/role/update'),
    meta: {title: '编辑角色'},
    hidden: true
  }, {
  path: 'permission',
    name: 'permission',
    component: () => import('@/views/sys/permission/index'),
    meta: {title: '权限列表', icon: 'product-list'}
},
  {
    path: 'addPermission',
      name: 'addPermission',
    component: () => import('@/views/sys/permission/add'),
    meta: {title: '添加权限'},
    hidden: true
  },
  {
    path: 'updatePermission',
      name: 'updatePermission',
    component: () => import('@/views/sys/permission/update'),
    meta: {title: '编辑权限'},
    hidden: true
  },
  {
    path: 'area',
      name: 'area',
    component: () => import('@/views/sys/area/index'),
    meta: {title: '权限列表', icon: 'product-list'}
  },
  {
    path: 'addArea',
      name: 'addArea',
    component: () => import('@/views/sys/area/add'),
    meta: {title: '添加权限'},
    hidden: true
  },
  {
    path: 'updateArea',
      name: 'updateArea',
    component: () => import('@/views/sys/area/update'),
    meta: {title: '编辑权限'},
    hidden: true
  },
  {
    path: 'webLog',
      name: 'webLog',
    component: () => import('@/views/sys/webLog/index'),
    meta: {title: '前台日志列表', icon: 'product-list'}
  },{
  path: 'adminLog',
    name: 'adminLog',
    component: () => import('@/views/sys/adminLog/index'),
    meta: {title: '后台日志列表', icon: 'product-list'}
},

]
},
{
  path: '/cms',
    component: Layout,
  redirect: '/cms/help',
  name: 'cms',
  meta: {title: '内容管理', icon: 'home'},
  children: [
    {
      path: 'help',
      name: 'help',
      component: () => import('@/views/cms/help/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
}, {
  path: 'addHelp',
    name: 'addHelp',
    component: () => import('@/views/cms/help/add'),
    meta: {title: '添加帮助'},
  hidden: true
},
  {
    path: 'updateHelp',
      name: 'updateHelp',
    component: () => import('@/views/cms/help/update'),
    meta: {title: '编辑帮助'},
    hidden: true
  },
  {
    path: 'subject',
      name: 'subject',
    component: () => import('@/views/cms/subject/index'),
    meta: {title: '专题列表', icon: 'product-list'}
  }, {
  path: 'addSubject',
    name: 'addSubject',
    component: () => import('@/views/cms/subject/add'),
    meta: {title: '添加专题'},
  hidden: true
},
  {
    path: 'updateSubject',
      name: 'updateSubject',
    component: () => import('@/views/cms/subject/update'),
    meta: {title: '编辑专题'},
    hidden: true
  }
,
  {
    path: 'helpCategory',
      name: 'helpCategory',
    component: () => import('@/views/cms/helpCategory/index'),
    meta: {title: '专题分类列表', icon: 'product-list'}
  }, {
  path: 'addHelpCategory',
    name: 'addHelpCategory',
    component: () => import('@/views/cms/helpCategory/add'),
    meta: {title: '添加专题分类'},
  hidden: true
},
  {
    path: 'updateHelpCategory',
      name: 'updateHelpCategory',
    component: () => import('@/views/cms/helpCategory/update'),
    meta: {title: '编辑专题分类'},
    hidden: true
  }
,
  {
    path: 'memberReport',
      name: 'memberReport',
    component: () => import('@/views/cms/memberReport/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
  }, {
  path: 'addMemberReport',
    name: 'addMemberReport',
    component: () => import('@/views/cms/memberReport/add'),
    meta: {title: '添加权限'},
  hidden: true
},
  {
    path: 'updateMemberReport',
      name: 'updateMemberReport',
    component: () => import('@/views/cms/memberReport/update'),
    meta: {title: '编辑权限'},
    hidden: true
  }
,
  {
    path: 'prefrenceArea',
      name: 'prefrenceArea',
    component: () => import('@/views/cms/prefrenceArea/index'),
    meta: {title: '偏爱专区列表', icon: 'product-list'}
  }, {
  path: 'addPrefrenceArea',
    name: 'addPrefrenceArea',
    component: () => import('@/views/cms/prefrenceArea/add'),
    meta: {title: '添加偏爱专区'},
  hidden: true
},
  {
    path: 'updatePrefrenceArea',
      name: 'updatePrefrenceArea',
    component: () => import('@/views/cms/prefrenceArea/update'),
    meta: {title: '编辑偏爱专区'},
    hidden: true
  }

,
  {
    path: 'subjectCategory',
      name: 'subjectCategory',
    component: () => import('@/views/cms/subjectCategory/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
  }, {
  path: 'addSubjectCategory',
    name: 'addSubjectCategory',
    component: () => import('@/views/cms/subjectCategory/add'),
    meta: {title: '添加权限'},
  hidden: true
},
  {
    path: 'updateSubjectCategory',
      name: 'updateSubjectCategory',
    component: () => import('@/views/cms/subjectCategory/update'),
    meta: {title: '编辑权限'},
    hidden: true
  }

,
  {
    path: 'subjectComment',
      name: 'subjectComment',
    component: () => import('@/views/cms/subjectComment/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
  }, {
  path: 'addSubjectComment',
    name: 'addSubjectComment',
    component: () => import('@/views/cms/subjectComment/add'),
    meta: {title: '添加权限'},
  hidden: true
},
  {
    path: 'updateSubjectComment',
      name: 'updateSubjectComment',
    component: () => import('@/views/cms/subjectComment/update'),
    meta: {title: '编辑权限'},
    hidden: true
  }

,{
  path: 'topic',
    name: 'topic',
    component: () => import('@/views/cms/topic/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
}, {
  path: 'addTopic',
    name: 'addTopic',
    component: () => import('@/views/cms/topic/add'),
    meta: {title: '添加权限'},
  hidden: true
},
  {
    path: 'updateTopic',
      name: 'updateTopic',
    component: () => import('@/views/cms/topic/update'),
    meta: {title: '编辑权限'},
    hidden: true
  }

,{
  path: 'topicCategory',
    name: 'topicCategory',
    component: () => import('@/views/cms/topicCategory/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
}, {
  path: 'addTopicCategory',
    name: 'addTopicCategory',
    component: () => import('@/views/cms/topicCategory/add'),
    meta: {title: '添加权限'},
  hidden: true
},
  {
    path: 'updateTopicCategory',
      name: 'updateTopicCategory',
    component: () => import('@/views/cms/topicCategory/update'),
    meta: {title: '编辑权限'},
    hidden: true
  }

,{
  path: 'topicComment',
    name: 'topicComment',
    component: () => import('@/views/cms/topicComment/index'),
    meta: {title: '帮助列表', icon: 'product-list'}
}
]
},

{path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

