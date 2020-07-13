import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
// import Mint from 'mint-ui'
import { Button } from 'mint-ui'
// Vue.use(Mint)

// 使用组件库
// Vue.use(VueResource)

// 注册全局组件
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
