<template>
  <div class="main form-group">
    <Header ref="header"></Header>
    <List :lists="lists"></List>
    <!-- <Footer :delChecked="delChecked" :lists="lists" :selectAll="selectAll"></Footer> -->
    <Footer>
      <input type="checkbox" slot="left" v-model="selectAll" />
      <span slot="middle">全部</span>
      <button slot="right" class="btn btn-sm btn-danger" @click="delChecked" v-if="total>0">清除选中</button>
    </Footer>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入pubsub
import PubSub from 'pubsub-js'

// 导入子组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {
      lists: JSON.parse(localStorage.getItem('list_key') || '[]')
    }
  },

  mounted () {
    // 通过ref找到子组件并且给子组件绑定监听事件(实现子组件与父组件之间的通信)
    // console.log(this.$refs.header)
    this.$refs.header.$on('add', this.add)

    // 通过事件总线绑定事件
    this.$EventBus.$on('del', this.del)

    // 订阅消息
    this.token = PubSub.subscribe('update', (msg, { item, value }) => {
      this.update(item, value)
    })
  },

  beforeDestroy () {
    // 事件总线解除绑定
    this.$refs.header.$off('add')
    this.$EventBus.$off('del')
    // 取消订阅
    PubSub.unsubscribe(this.token)
  },

  methods: {
    add (addData) {
      this.lists.unshift(addData)
    },
    del (index) {
      this.lists.splice(index, 1)
    },

    delChecked () {
      this.lists = this.lists.filter(item => !item.complete)
    },
    // 全选/全不选
    selectAll (isChecked) {
      this.lists.forEach(item => (item.complete = isChecked))
    },
    update (item, value) {
      item.complete = value
    }
  },
  computed: {
    total () {
      return 0
    }
  },
  watch: {
    lists: {
      // 进行深度监听
      deep: true,
      handler: function (value) {
        // 将数据写入本地存储
        localStorage.setItem('list_key', JSON.stringify(value))
      }
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style  scoped>
.main {
  width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 80px auto;
}
</style>
