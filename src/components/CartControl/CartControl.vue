<template>
  <div class="cartcontrol">
     <transition name='fade'>
 <div class="iconfont icon-remove_circle_outline"  v-if='food.count'  
    
    
    @click.stop="updateFoodCount(false)" ></div>     
     </transition>
    <div class="cart-count" v-if='food.count'  >{{food.count}}</div>
    <div class="iconfont icon-add_circle"  @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  props: {
    food:{
      type:Object,
      isAdd:true
    }
  },
  data() {
    return {

    };
  },
  computed: {},
  created() {},
  mounted() {},
 
  methods: {
    updateFoodCount(isflag) {
      let {food}=this
       this.$store.dispatch('updateFoodCount',{isflag,food})
    }
  },

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.fade-enter-active, &.fade-leave-active
        transition all .3s
      &.fade-enter, &.fade-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
