<template>
  <div id="app">

    <router-view />

    <!--3 使用组件  -->
    <!-- 方法一 -->

         <FooterGuide   v-show='$route.meta.requiresAuth' > </FooterGuide>


		    <!-- <FooterGuide   v-show='flag' > </FooterGuide> -->
    <!-- 方法二 -->
    <!-- <footer-guide></footer-guide> -->

    <!-- 引入公共组件 -->
  </div>
</template>

<script>
  // 1引入 底部导航栏组件
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide //2 挂载组件
	},
	data() {
		return {
			flag:true
		}
	},
	watch: {
	//  "$router"(path) {
    //    if(path==='/login') {
	// 	   this.flag=false
	//    }else {
	// 	 this.flag=true  
	//    }
	//  },
	 '$route.path':function(newVal,oldVal){
		console.log(newVal+"---"+oldVal);
        if(newVal === '/login'){
           this.flag=false
        }else {
			this.flag=true  
		}
      }

	},

  }
//   vue的核心就是操作数据
  //在登陆组件的时候  让flag ===>false  其他情况下 flag为true

</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
    width 100%
    height 100%
    background #f5f5f5
</style>
