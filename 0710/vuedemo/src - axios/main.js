import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 使用组件库
Vue.use(VueResource)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
