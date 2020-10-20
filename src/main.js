import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import ProgressBar from './components/ProgressBar.vue'
import storeConfig from './store/store-config'
import routerConfig from './router/router-config'

Vue.use(Vuex)
Vue.use(Router)

const store = new Vuex.Store(storeConfig)
const router = new Router(routerConfig)

Vue.config.productionTip = false

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
