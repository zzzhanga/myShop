<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " @click='gochange("/msite")'   :class='{on:isflag("/msite")}'>
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" @click='gochange("/search")'    :class='{on:isflag("/search")}'>
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" @click='gochange("/order")'  :class='{on:isflag("/order")}'>
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" @click='gochange("/profile")'  :class='{on:isflag("/profile")}'>
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>
<script>
  export default {
    props: {

    },
    data() {
      return {
       


      };
    },
    computed: {

     
      
      
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      // 路由路径跳转
      gochange(paths) {
      
        // console.log(this.$router);
        // 编程式路由实现跳转
        // this.$router.push(path)  //会一直保持栈  会消耗内存 
        this.$router.replace(paths)  //这个把体会之前的栈  保留一个  提高性能

      },
      
        isflag(paths) {
			console.log(paths===this.$route.path);
			
        return paths===this.$route.path
        }

        


    },
    components: {

    },
  };
</script>

<style scoped lang='stylus'>
  @import '../../common/stylus/mixins'
  // @import '@@/stylus/mixins'
 .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px


 
</style>
