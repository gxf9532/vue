<template>
  <div class="main form-group">
    <Header :add="add"></Header>
    <List :lists="lists" :del="del" :update="update"></List>
    <Footer :delChecked="delChecked" :lists="lists" :selectAll="selectAll"></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
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
