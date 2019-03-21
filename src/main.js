import Vue from 'vue'
import App from './App.vue'
import EventBus from '@/Plugins/event-bus'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
