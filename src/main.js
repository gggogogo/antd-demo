import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

// permission control
import './permission' 

// 项目中使用的模块
import './core/use'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
