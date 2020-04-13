import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import {request} from "../network/request";
import url from "../network/url";
Vue.prototype.request = request
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.url = url

import { Lazyload } from 'vant';

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  loading:require('./assets/img/loading.gif'),
  error:require('./assets/img/error.jpg')
});

router.beforeEach((to, from, next)=>{
  if (to.meta.title){
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
