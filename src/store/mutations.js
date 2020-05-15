
// import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {
    RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO,
    RESET_USER_INFO, RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO


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
    }

}