
// import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO} from './mutation-types'




export  default  {

//存储我们地址信息
[RECEIVE_ADDRESS](state,{address}) {
    state.address=address
},
//存储我们的分类
[RECEIVE_CATEGORYS](state,{categorysx}) {
    state.categorys=categorysx
},

//存储商家信息
[RECEIVE_SHOPS](state,{shops}) {
    // console.log(shops)
    state.shops=shops
},
//存储个人信息
[RECEIVE_USER_INFO](state,{userInfo}) {
    state.userInfo=userInfo
}

}