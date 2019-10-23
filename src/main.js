import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$EventBus = new Vue();
// Vue.prototype.$Bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
