import Vue from 'vue'
import App from './App.vue'
import EventBus from '@/Plugins/event-bus'
import VueRouter from 'vue-router'
import routes from '@/routes'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/Directives/blur'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
