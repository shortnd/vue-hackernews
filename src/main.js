import Vue from 'vue'
import App from './App'
import ProgressBar from './components/ProgressBar.vue'

Vue.config.productionTip = false

// import { fetchListData } from './api/api'

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  render: h => h(App)
})

// function getTopItems () {
//   return fetchListData('top')
//     .then(items => items)
// }

// getTopItems().then((items) => {
//   window.items = items
//   new Vue({
//     el: '#app',
//     render: h => h(App)
//   })
// })
