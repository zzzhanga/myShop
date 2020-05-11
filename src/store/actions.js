// address: {}, // 地址信息对象
//     categorys: [], // 分类数组
//     shops: [], //商家数组

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'

import { reqAddress,reqCategory } from '../api/index.js';

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
    // console.log(params);
    
    let result = await reqAddress(params)

    commit(RECEIVE_ADDRESS, {
      address: result.data
    })
  },

  async getCategorys({commit}) {

    let result = await reqCategory()
    commit(RECEIVE_CATEGORYS, {
      categorys: result.data
    })
  },


  getShops() {

  }







}
