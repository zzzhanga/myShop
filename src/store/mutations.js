
// import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS} from './mutation-types'




export  default  {

[RECEIVE_ADDRESS](state,{address}) {
    state.address=address
},
[RECEIVE_CATEGORYS](state,{categorysx}) {
    state.categorys=categorysx
}

}