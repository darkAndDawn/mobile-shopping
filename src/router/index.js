import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const User = () => import('views/user/User')
const Product = () => import('views/product/Product')
const Login = () => import('views/login/Login')
const OrderConfirm = () => import('views/orderconfirm/OrderConfirm')
const Address = () => import('views/address/Address')
const AddressEdit = () => import('views/addressEdit/AddressEdit')
const OrderInfo = () => import('views/orderinfo/OrderInfo')
const PaySuccess = () => import('views/paysuccess/PaySuccess')
Vue.use(VueRouter)

const routes = [
    {
        path: '/paySuccess',
        name: 'PaySuccess',
        component: PaySuccess,

    },
    {
        path: '/orderInfo',
        name: 'OrderInfo',
        component: OrderInfo,
        meta: {
            jurisdFlag: true
        }
    },
    {
        path: '/addressEdit',
        name: 'AddressEdit',
        component: AddressEdit,
        meta: {
            title: '编辑收货地址',
        }
    },
    {
        path: '/address',
        name: 'Address',
        component: Address,
        meta: {
            title: '收货地址',
        }
    },
    {
        path: '/orderConfirm',
        name: 'OrderConfirm',
        component: OrderConfirm,
        meta: {
            title: '结算',
            jurisdFlag: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录/注册'
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            title: '宝贝详情'
        }
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            title: '购物车',
            jurisdFlag: true
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/',
        redirect: 'home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.jurisdFlag) {
        if (sessionStorage.getItem('token')) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }

})
export default router
