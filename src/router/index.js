import Vue from 'vue'
import Router from 'vue-router'

// 路由配置
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'


import Search from '@/pages/Search/Search.vue'


import Login from '@/pages/Login/Login.vue'


Vue.use(Router)

export default new Router(

  {
    mode: "history",
    routes: [

      {
        path: '/',
        redirect: '/msite'
      },
      {
        path: '/msite',
		component: Msite,
		meta: { requiresAuth: true }
      },
      {
        path: '/order',
		component: Order,
		meta: { requiresAuth: true }
      },
      {
        path: '/profile',
		component: Profile,
		meta: { requiresAuth: true }
      },
      {
        path: '/search',
		component: Search,
		meta: { requiresAuth: true }
	  },
	  {
        path: '/login',
        component: Login
	  }
	  	 
    ]
  })
