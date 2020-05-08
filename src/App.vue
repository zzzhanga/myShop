<template>
  <div id="app">

    <router-view />

    <!--3 使用组件  -->
    <!-- 方法一 -->

    <FooterGuide />
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
    }

  }

</script>

<style>
</style>
