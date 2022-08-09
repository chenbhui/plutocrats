import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
import '@/custom-component';//注册自定义组件
//引入表单校验插件
import "@/plugins/validate"
// 引入样式
import "./assets/iconfont/iconfont.css"
import "@/styles/reset.less";
import "@/styles/iconfont.css";
import "@/styles/global.less";
import "@/styles/animate.less";
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
