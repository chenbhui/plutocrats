import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
//引入表单校验插件
import "@/plugins/validate"
import "./assets/iconfont/iconfont.css"
import "../public/reset.css"
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
