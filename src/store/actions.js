// address: {}, // 地址信息对象
//     categorys: [], // 分类数组
//     shops: [], //商家数组

// export const RECEIVE_GOODS = 'receive_goods' // 接收商品数组
// export const RECEIVE_RATINGS = 'receive_ratings' // 接收商家评价数组
// export const RECEIVE_INFO = 'receive_info' // 接收商家信息




import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT

} from './mutation-types'

import {
  reqAddress,
  reqCategory,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api/index.js';

export default {
  //3个方法  
  //方法一   触发 address 
  // 方法二 触发categorys
  // 方法三  触发shops

  // http://localhost:3000/position/40.10038,116.36867
  //获取地址
  async getAddress({
    commit,
    state
  }) {
    //   latitude: 40.10038, // 纬 度
    // longitude: 116.36867, // 经 度
    let {
      latitude,
      longitude
    } = state
    // let latitude=state.latitude
    // let longitude=state.longitude
    // data ={
    //     latitude:latitude,
    //     longitude:longitude
    // }
    // commit(RECEIVE_ADDRESS,data)
    let params = latitude + ',' + longitude


    let result = await reqAddress(params)
    console.log(result);

    // commit 指的mutations里面的方法
    commit(RECEIVE_ADDRESS, {
      address: result.data
    })
  },

  //获取产品分类
  async getCategorys({
    commit
  }) {

    let result = await reqCategory()
    // commit('mutations里面的方法名字','传递的对象')
    commit(RECEIVE_CATEGORYS, {
      categorysx: result.data
    })
  }

  ,

  //获取商家
  async getShops({
    commit,
    state
  }) {

    let {
      latitude,
      longitude
    } = state
    let result = await reqShops({
      latitude,
      longitude
    })

    commit(RECEIVE_SHOPS, {
      shops: result.data
    })
  }

  ,
  //获取个人信息
  recordUser({ commit }, user) {
    console.log(user);

    commit(RECEIVE_USER_INFO, { userInfo: user })

  },


  //异步 获取用户会话信息 
  async  getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code == 0) {
      let user = result.data
      commit(RECEIVE_USER_INFO, { userInfo: user })

    }
  },


  // 异步退出用户登录 
  async   getLogout({ commit }) {


    let result = await reqLogout()

    if (result.code == 0) {
      commit(RESET_USER_INFO)

    }
  },



  //异步获取商家商品信息 

  async   getShopGoods({ commit },callback) {
    let result = await reqShopGoods()
    if (result.code == 0) {
      let goods = result.data
      commit(RECEIVE_GOODS, { goods })
      callback&callback()
    }
  },


    //异步获取商家个人信息

    async   getShopInfo({ commit }) {
      let result = await reqShopInfo()
      if (result.code == 0) {
        let info = result.data
        commit(RECEIVE_INFO, { info })
      }
    },



    //异步获取商家商品评价
    async   getShopRatings({ commit }) {
      let result = await reqShopRatings()
      if (result.code == 0) {
        let ratings = result.data
        commit(RECEIVE_RATINGS, { ratings })
      }
    },


    // 更新购物车数量方法 

    updateFoodCount({commit},{isflag,food}) {
     
        if(isflag) { //表示添加
          
          commit(INCREMENT_FOOD_COUNT,{food})


        }else { //表示减少

          commit(DECREMENT_FOOD_COUNT,{food})



        }

    }
  
  







}
