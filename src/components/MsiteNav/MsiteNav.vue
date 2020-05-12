<template>
 <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for='(items,index) in categorysArr' 
              :key="index">
                <a href="javascript:" class="link_to_food" v-for='(item,index) in items' :key="index">
                  <div class="food_container">
                    <img :src="  imgBaseUrl+  item.image_url">
                  </div>
                  <span>{{item.title}}</span>
                </a>
                
              </div>
             
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
</template>

<script>

// 1引入我们的swiper插件 
  import Swiper from 'swiper'
 //2 swiper  css  
 import 'swiper/css/swiper.min.css'

 //第一步引进来我们的映射 
 import   {mapState}  from 'vuex'


export default {
	props: {

	},
	data() {
		return {

      imgBaseUrl: 'https://fuss10.elemecdn.com'

		};
	},
	computed: {
    ...mapState(['categorys']),
    categorysArr() {
      // [18]==[[8],[8],[2]]
      let bigArr=[]
      let smallArr=[]
      let max=8 
      // let categorys=this.categorys
      let {categorys}=this  //this=>vue实例对象
      categorys.forEach(v=>{
        if(smallArr.length==0) {
            bigArr.push(smallArr)     // 第一次[[]]   第二次的时候 [[8],[]]
        }
        smallArr.push(v)         // smallArr=>[8]
        if(smallArr.length==max){
          smallArr=[]
          // smallArr.length=0
        }     
      })
         return bigArr
    }

	},
	created() {

	},
	mounted() {
		//dom才可以拿到dom的数据   应该要等页面的所有的轮播图都渲染完成后才能进行轮播
  //   setTimeout(()=>{
  //     	var mySwiper = new Swiper ('.swiper-container', {
	// // direction: 'vertical', // 垂直切换选项
	// loop: true, // 循环模式选项

	// // 如果需要分页器
	// pagination: {
	// el: '.swiper-pagination',
	// },
	// })
  //   },500)

	},
	watch: {

    categorys(newVal,oldVal) {
      if(newVal) {   //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(v=>{
           	var mySwiper = new Swiper ('.swiper-container', {
	// direction: 'vertical', // 垂直切换选项
	     loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
      },
      })
            })
      }

    }




	},
	methods: {

	},
	components: {

	},
};
</script>

<style scoped  lang='stylus'>
@import '../../common/stylus/mixins.styl'
 .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
</style>
