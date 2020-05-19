export default {

    //   商品的总数量
     totalCount(state) {
        return   state.cartFoods.reduce((pre,current)=>pre+current.count ,0)

       
     },

    // 商品的总价格
     totalPrice(state) {
         return  state.cartFoods.reduce((pre,current)=>pre+current.count*current.price,0)
     }

}