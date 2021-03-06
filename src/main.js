// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vuex  的store

import store  from './store'






import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)



//引入模拟mock数据 
import  './mock/mockServer'




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //挂载store
  components: { App },
  template: '<App/>'
})
