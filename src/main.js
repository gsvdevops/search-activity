import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.prototype.moment = moment

new Vue({
  el: '#app',
  render: h => h(App)
})
