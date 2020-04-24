import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import {request} from "../network/request";
import url from "../network/url";
Vue.prototype.bus = new Vue()
Vue.prototype.request = request
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.url = url

import {Lazyload} from 'vant';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    loading: require('./assets/img/loading.gif'),
    error: require('./assets/img/error.jpg')
});
//显示title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
//获取用户信息
if (sessionStorage.getItem('token')) {
    request({
        url: url.userInfo,
        method: 'get'
    }).then(res => {
        store.commit('ass', res.data)
    })
}
//获取省市
request({
    url:url.area,
}).then(res=>{
    store.commit('updataArea',res.data)

})

