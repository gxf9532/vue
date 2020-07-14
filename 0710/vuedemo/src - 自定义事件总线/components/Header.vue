<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="请输入并使用回车键确认"
      v-model="title"
      @keyup.enter="addHandle"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props: {
  //   add: {
  //     type: Function,
  //     required: true
  //   }
  // },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addHandle () {
      const title = this.title.trim()

      if (!title) {
        alert('请输入数据')
        return false
      }
      const addData = {
        id: Date.now(),
        complete: false,
        title
      }
      // 向父组件分发 this是组件对象 $vm->$emit()
      this.$emit('add', addData)

      // 清空title信息
      this.title = ''
    }
  }
}
</script>

<style  scoped>
</style>
