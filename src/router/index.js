/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profily from '../pages/Profily/Profily.vue'

Vue.use(VueRouter)
//向外暴露vuerouter对象
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/shopCart',
      component: ShopCart,
    },
    {
      path: '/profily',
      component: Profily,
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
