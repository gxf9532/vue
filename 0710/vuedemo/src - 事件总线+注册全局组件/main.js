import Vue from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'
// 创建一个事件总线对象 并将它挂载在Vue的原型对象上面 所有的组件对象都可以访问它 并利用它进行组件之间的通信
Vue.prototype.$EventBus = new Vue()

// Vue.prototype.adminName = 'admin'

// 注册全局组件
Vue.component('Item', Item)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
