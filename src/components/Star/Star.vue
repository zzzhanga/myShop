<template>
  <div class="star"    :class="`star-${size}`">
    <span class="star-item"   
     v-for='(c,index) in StarClass' 
    :key="index"
    :class="c"
    >

    </span>
    <!-- <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span> -->
  </div>
</template>

<script>

const  ON='on'
const  HALF='half'
const  OFF='off'
export default {
  props: {
      score:{
          type:Number
      },
      size:{
          type:Number
      }
  },
  data() {
    return {};
  },
  computed: {
    //   4.7   几个全星  几个半星       4个全星     1个半星 （大于0.5小于1 就是半星）
    //   3.2   几个全星  几个半星    几个剩下的星    3 个全星   0个半星     2个off星
    StarClass() {
        let starArr=[]
        //依据评价来计算星星    // 假设 score 是3.7
        let  {score} =this
        let  intNum=Math.floor(score)
        for(var i=0;i<intNum;i++) {
          starArr.push(ON)
        }
        //在js里面   0.1+0.2!=0.3    0.2-0.1!=0.1
        //在js里面 尽量不用直接用小数进行计算 采用整数进行计算 更加严谨
          if(score*10-intNum*10>5){
           starArr.push(HALF)
          }
          while(starArr.length<5) {
              starArr.push(OFF)
          }
      return starArr
    }






  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
     



  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl'
                        .star 
                            float left
                            font-size 0
                            .star-item
                              display inline-block
                              background-repeat no-repeat
                            &.star-48
                              .star-item
                                width 20px
                                height 20px
                                margin-right 22px
                                background-size 20px 20px
                                &:last-child
                                  margin-right: 0
                                &.on
                                  bg-image('./images/stars/star48_on')
                                &.half
                                  bg-image('./images/stars/star48_half')
                                &.off
                                  bg-image('./images/stars/star48_off')
                            &.star-36
                              .star-item
                                width 15px
                                height 15px
                                margin-right 6px
                                background-size 15px 15px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('./images/stars/star36_on')
                                &.half
                                  bg-image('./images/stars/star36_half')
                                &.off
                                  bg-image('./images/stars/star36_off')
                            &.star-24
                              .star-item
                                width 10px
                                height 10px
                                margin-right 3px
                                background-size 10px 10px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('./images/stars/star24_on')
                                &.half
                                  bg-image('./images/stars/star24_half')
                                &.off
                                  bg-image('./images/stars/star24_off')
                        

</style>
