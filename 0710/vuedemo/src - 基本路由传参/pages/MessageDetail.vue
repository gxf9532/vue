<template>
  <div>
    <ul>
      <li>id: {{ $route.params.id }}</li>
      <li>title: {{ mesDetailData.title }}</li>
      <li>content: {{ mesDetailData.content }}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
const mesDetailData = [
  { id: 1, title: '容祖儿再次出道', content: '1111111111111111' },
  { id: 2, title: '广州高温天气来袭', content: '2222222222222222' },
  { id: 3, title: '甄子丹又接拍动作戏', content: '3333333333333333' }
]
export default {
  data () {
    return {
      mesDetailData: {}
    }
  },
  methods: {
    sendMessage (value) {
      setTimeout(() => {
        value = value || this.$route
        // 获取id
        const id = value.params.id * 1
        // console.log(typeof id)
        // https://blog.csdn.net/lhjuejiang/article/details/80112547 数组常用查找方法
        const detail = mesDetailData.find(detail => detail.id === id)
        this.mesDetailData = detail
      }, 200)
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    this.sendMessage()
  },

  // 监听
  watch: {
    $route (value) {
    //   console.log(value)
      this.sendMessage(value)
    },
    immediate: true
  }
}
</script>

<style  scoped>
</style>
