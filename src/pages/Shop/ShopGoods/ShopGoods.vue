<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul  class="ulBox" ref='ulBox'>
          <!--current 表示高亮-->
          <li class="menu-item" v-for="(good, index) in goods" :key="index"
              :class="{current: index===currentIndex}" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl" class="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods"
                  :key="index" 
                  
                 
                  >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                   <!-- 购物车 的商品计算 -->
                        <CartControl :food='food'/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- <ShopCart /> -->
    </div>
    <!-- <Food :food="food" ref="food"/> -->
  </div>
</template>


<script>


import  CartControl from   '../../../components/CartControl/CartControl.vue'

import  {mapState} from 'vuex'
// 第一步引入  
import BScroll from 'better-scroll'

//第二步实例化





export default {

    data(){
        return {
            // currentIndex:'',  //当前左边菜单高亮的索引
            tops:[] ,//获取所有food里面的li的滚出去的高度值
            scrollY:''  //获取时候滚动的高度

        }
    },
    components:{
        CartControl
    },
    computed: {
        ...mapState(['goods']),

          currentIndex() {  //计算左边对应的分类高亮   //当前左边菜单高亮的索引
               let {tops,scrollY}=this
                let  index= tops.findIndex((item,index)=>{
                    return   scrollY>= tops[index] && scrollY<tops[index+1]
                })
                console.log(index);
    

  
 
          return index

        }


       

    },
    mounted() {
        //在异步请求完数据之后  等待dom更新 后再去执行滚动监听事件

        this.$store.dispatch('getShopGoods',()=>{
            //下一次dom更新后执行
            this.$nextTick(()=>{
                //调用我们的getScroll
                this._getScroll()   
                this._initFood()
                     
            })

      

        })

       


    },
    methods:{
        _getScroll() {
            // 左边滚动
              this.menuScroll = new BScroll('.menu-wrapper',{
                   probeType:2,
                   click:true  //可以触发点击事件
              })

            //右边滚动
              this.foodScroll = new BScroll('.foods-wrapper',{
                  probeType:2,
                   click:true
              })

       

            //实时监听滚动事件
            this.foodScroll.on('scroll', ({x,y})=>{
            
            // console.log(y)
            let scrolly=Math.abs(y) 
              this.scrollY=scrolly //获取滚动实时的高度
                })
            //滚动停止的时候当前的y 也就是滚动的距离
            this.foodScroll.on('scrollEnd',({x,y})=>{
               this.scrollY= Math.abs(y)
                // console.log(y);
                
            })    

              
        } ,
        _initFood() {
                     // 1给右边的food绑定滚动监听事件    目的 实时的可以监听到滚动的高度
        //2  获取到滚动的高度  通过计算     然后来判断 当前的高度在 food整个盒子的具体位置
            //获取不到foodScroll
              let top=0; //初始高度 默认是0
            let tops=[]  //存放 每个li的滚出去的高度
            tops.push(top)

    
            let ul=  this.$refs.foodsUl
           let lis=ul.children
            // console.log(ul.children); 
            Array.from(lis,(li,index)=>{
                let liHeight=li.clientHeight
                // console.log(liHeight);
                top+=liHeight
                tops.push(top)                
            })
            this.tops=tops
        },

        clickMenuItem(index) {
            // console.log(index);
           //右边food应该滚动的高度值
           let top= this.tops[index]
           console.log(top);
           
           //怎么样触发右边的滚动事件 并且让右边food滚动到当前位置
        //    scrollTo(x, y, time, easing)
            this.scrollY=top
           this.foodScroll.scrollTo(0,-top,300)

            
        }






    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
