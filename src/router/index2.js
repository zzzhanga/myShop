import Vue from 'vue'
import Router from 'vue-router'

// 路由配置
// import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'


// import Search from '@/pages/Search/Search.vue'


// import Login from '@/pages/Login/Login.vue'


import Shop from '@/pages/Shop/Shop.vue'


import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods'

import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo'

import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings'

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
        component: ()=>import('../pages/Msite/Msite.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/order',
        component: ()=>import('../pages/Order/Order.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/profile',
        component: ()=>import('../pages/Msite/Msite.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/search',
        component: ()=>import('../pages/Search/Search.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/login',
        component: ()=>import('../pages/Login/Login.vue'),
      },


      {
        path: '/shop',
        component: Shop,
        children:[
          {
            path: '/shop/goods',
            component: ShopGoods
          },
          {
            path: '/shop/ratings',
            component: ShopRatings
          },
    
          {
            path: '/shop/info',
            component: ShopInfo
          },
          {
            path:'',
            redirect:'/shop/goods'
          }
    
    




        ]
      },
      

    ]
  })
