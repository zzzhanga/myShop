
// import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'

import Vue from 'vue'
import {
    RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO,
    RESET_USER_INFO, RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART




} from './mutation-types'

// export const RECEIVE_GOODS = 'receive_goods' // 接收商品数组
// export const RECEIVE_RATINGS = 'receive_ratings' // 接收商家评价数组
// export const RECEIVE_INFO = 'receive_info' // 接收商家信息





export default {

    //存储我们地址信息
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    //存储我们的分类
    [RECEIVE_CATEGORYS](state, { categorysx }) {
        state.categorys = categorysx
    },

    //存储商家信息
    [RECEIVE_SHOPS](state, { shops }) {
        // console.log(shops)
        state.shops = shops
    },
    //存储个人信息
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },

    //重置个人信息 
    [RESET_USER_INFO](state) {

        state.userInfo = {}
    },

    //商家商品goods数组获取
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    //商家商品评价数组获取
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    //商家商品info个人信息获取
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },

    //input 数量增加
    [INCREMENT_FOOD_COUNT](state, { food }) {
        // alert('增加')

        // console.log(food);

        if (food.count) {
            food.count++  //不能实现双向数据绑定


        } else {
            // food.count=1
            Vue.set(food, 'count', 1)
            // 每次加一件商品的时候也需要把这件商品加入购物车
            state.cartFoods.push(food)

        }


    },
    //input 数量增加
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) {
            food.count--;
            //减少商品的时候 如果这个商品的数量已经减到0了 那么需要把这个商品从购物车里面移除
            if(food.count==0) {
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            } 
        }
    },
    //清空购物车
    [CLEAR_CART](state) {

     state.cartFoods.forEach(food=>food.count=0) //把后面追加的count也变为0
     state.cartFoods=[]  //清空购物车
    }


}