import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router//结果：所有路由组件都多了两个属性：$route/router
})
