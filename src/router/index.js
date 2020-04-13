import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";
import Cart from "../views/cart/Cart";
import User from "../views/user/User";
import Product from "../views/product/Product";
Vue.use(VueRouter)

  const routes = [
    {
      path:'/product',
      name:'Product',
      component:Product,
      meta:{
        title:'详情页'
      }
    },
    {
      path:'/user',
      name:'User',
      component:User,
      meta:{
        title:'我的'
      }
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
      meta:{
        title: '购物车'
      }
    },
    {
      path: '/home',
      name:'Home',
      component:Home,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/',
      redirect:'home'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
