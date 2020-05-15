import Mock  from 'mockjs'

import  data  from './data.json'


/**
 * 
 * 
@param:url:'请求路径',
@param:template:'模板数据返回数据结果'

Mock.mock('url','template')

记录数据模板。当拦截到匹配 url 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
 * 
 */

 //获取商家商品数组  //  code :0 表示成功返回
 Mock.mock('/goods',{code:0,data:data.goods})
  //获取商家评价数组
  Mock.mock('/ratings',{code:0,data:data.ratings})

   //获取商家个人信息数组
 Mock.mock('/info',{code:0,data:data.info})








