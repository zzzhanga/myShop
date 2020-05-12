// address: {}, // 地址信息对象
//     categorys: [], // 分类数组
//     shops: [], //商家数组

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqCategory,
  reqShops
} from '../api/index.js';

export default {
  //3个方法  
  //方法一   触发 address 
  // 方法二 触发categorys
  // 方法三  触发shops

  // http://localhost:3000/position/40.10038,116.36867

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







}
