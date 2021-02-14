import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './http/index.js'
import './assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
