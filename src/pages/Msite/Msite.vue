<template>
   <section class="msite">

        <HeaderTop :title='mytitle'>
			<router-link slot="left" to="/search" class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
			<router-link slot="right" to="/login" class="header_login">
				<span class="header_login_text">登录|注册</span>
			</router-link>
        </HeaderTop>
        <!--首页导航-->
        <!-- 首页占位符 -->
        <MsiteNav></MsiteNav>

        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <!-- 占位符 -->
          <ShopList></ShopList>
          <!-- <ShopList/> -->
        </div>
        </section>
</template>

<script>

import HeaderTop from '../../components/HeaderTop/HeaderTop' 


import MsiteNav from '../../components/MsiteNav/MsiteNav' 

import ShopList  from '../../components/ShopList/ShopList' 
import { reqAddress } from '../../api/index.js';
export default {
    props: {

    },
    data() {
        return {
			mytitle:'昌平区北七家宏福科技园(337省道北)'

        };
    },
    computed: {

    },
    created() {

    },
	mounted() { 
    console.log('xxx');
    
    
    reqAddress().then(res=>{
      console.log(res);
      
    })
		
	},
    watch: {

    },
    methods: {

    },
    components: {
    HeaderTop,
	ShopList,
	MsiteNav
    }
}

</script>

<style scoped  lang='stylus'>
@import '../../common/stylus/mixins.styl'
  	.msite  //首页
          width 100%
          
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            
        
</style>
