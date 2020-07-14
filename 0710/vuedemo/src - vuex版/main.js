import Vue from 'vue'
import App from './App.vue'

// 引入vueX核心
import store from './vuex/store'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 所有的组件对象中都会有一个属性$store
  store
})
