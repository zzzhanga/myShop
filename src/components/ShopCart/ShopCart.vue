<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left"    @click='toggleShow' >
           
          <div class="logo-wrapper">
            <div class="logo"  
            :class="{highlight: totalCount}"
            >
       
              <i class="iconfont icon-shopping_cart"   :class="{highlight:totalCount}" ></i>
            </div>

            <!-- v-if='totalCount' -->
            <!-- {{totalCount}} -->
            <div class="num"   v-if='totalCount'>{{totalCount}}</div>
          </div>

          <!-- {{totalPrice}} -->
          <div class="price highlight" >￥{{totalPrice}}</div>

          <!--  -->
          <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          
           <!-- {{payText}} -->
           <!--:class="payClass"  -->
           <!-- 计算属性 -->
          <div class="pay"   :class="payClass" >  
        {{payText}} 
           
          </div>
        </div>
      </div>
      <transition name="move">
          <!-- v-show="listShow"  -->
        <div class="shopcart-list"    v-show='listShow'>
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>

    </div>
     <!-- v-show="listShow"   -->
    <div class="list-mask"   v-show="listShow"
    @click="toggleShow"></div>
  </div>
</template>
<script>

import   CartControl  from '../CartControl/CartControl'
import {mapState,mapGetters}  from 'vuex'


// 第一步引入  
import BScroll from 'better-scroll'

//第二步实例化


// import { MessageBox } from 'mint-ui';


export default {
    data() {
        return {
            isShow:false

        }
    },
    computed: {
         ...mapState(['cartFoods','info']),
         ...mapGetters(['totalCount','totalPrice']),

         
         //价格样式高亮
         payClass(){

      //  总的价格大于最小起送价格 那么就高亮   否则就不高亮
         let {totalPrice}=this
         let  {minPrice}=this.info

           return   totalPrice>minPrice? 'enough':'not-enough'  
         },
          //价格文字显示
         payText(){
            let  {minPrice}=this.info
              let {totalPrice}=this
          if(totalPrice===0) {
            return   `￥${minPrice}元起送`
 
          }else if(totalPrice<minPrice) {
            return `还差￥${minPrice-totalPrice}元起送`
          }else  {
            return '小二结算'
          }



         },

         listShow() {
           //如果没有商品数量 mask已经list-content  不能显示
           let {totalCount}=this
           if(totalCount==0) {
             this.isShow=false
             return  false
           }
           return this.isShow

        
         }


    },

    mounted() {

                
             
    },
       //js的设计模式   new 的对象是实例对象   
      //  var  p1=new Person()
      //  var p2=new Person()
    methods: {
        // 显示与隐藏切换
        toggleShow(){
            this.isShow=!this.isShow

            this.$nextTick(()=>{  //dom元素更新后
             // 思考一下  //单例模式  提高性能  解决逻辑错误bug
             if(!this.scroll) {  //表示没有
             this.scroll=new  BScroll('.list-content',{
               click:true
             })
             }else  {  //已经new  了  重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                this.scroll.refresh()  //如果有重新直接读取当前的dom的高度
             }
            })


            
            
        },

        //清空购物车  
       clearCart(){
         //给用户一个提示
         //方法一
      //    MessageBox.confirm('Are you sure delete?').then(sure => {
      //       this.$store.dispatch('clearCart')  
      //     },(cancel)=>{});      
      //  }
      // 方法二   
               this.$messagebox.confirm('Are you sure delete?').then(sure => {
                  this.$store.dispatch('clearCart')  
                  this.$toast({
                  message: '删除成功',
                  iconClass: 'icon icon-success'
                });
           },(cancel)=>{});      
        }
    },
    components:{
      CartControl
    }
}
</script>





<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 48px
    .content
      display flex
      background #141d27
      font-size 0
      color rgba(255, 255, 255, 0.4)
      .content-left
        flex 1
        .logo-wrapper
          display inline-block
          vertical-align top
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            text-align center
            background #2b343c
            &.highlight
              background $green
            .icon-shopping_cart
              line-height 44px
              font-size 24px
              color #80858a
              &.highlight
                color #fff
          .num
            position absolute
            top 0
            right 0
            width 24px
            height 16px
            line-height 16px
            text-align center
            border-radius 16px
            font-size 9px
            font-weight 700
            color #ffffff
            background rgb(240, 20, 20)
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display inline-block
          vertical-align top
          margin-top 5px
          line-height 24px
          padding-right 12px
          box-sizing border-box
          font-size 16px
          font-weight 700
          color #fff
          &.highlight
            color #fff
        .desc
          display inline-block
          vertical-align bottom
          margin-bottom 15px
          margin-left -45px
          font-size 10px
      .content-right
        flex 0 0 105px
        width 105px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 12px
          font-weight 700
          color #fff
          &.not-enough
            background #2b333b
          &.enough
            background #00b43c
            color #fff
    .ball-container
      .ball
        position fixed
        left 32px
        bottom 22px
        z-index 200
        transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width 16px
          height 16px
          border-radius 50%
          background $green
          transition all 0.4s linear
    .shopcart-list
      position absolute
      left 0
      top 0
      z-index -1
      width 100%
      transform translateY(-100%)
      &.move-enter-active, &.move-leave-active
        transition transform .3s
      &.move-enter, &.move-leave-to
        transform translateY(0)
      .list-header
        height 40px
        line-height 40px
        padding 0 18px
        background #f3f5f7
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        .title
          float left
          font-size 14px
          color rgb(7, 17, 27)
        .empty
          float right
          font-size 12px
          color rgb(0, 160, 220)

      .list-content
        padding 0 18px
        max-height 217px
        overflow hidden
        background #fff
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height 24px
            font-size 14px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240, 20, 20)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 6px

  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    backdrop-filter blur(10px)
    opacity 1
    background rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background rgba(7, 17, 27, 0)
</style>
