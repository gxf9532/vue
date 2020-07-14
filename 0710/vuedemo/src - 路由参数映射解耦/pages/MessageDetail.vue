<template>
  <div>
    <ul>
      <li>id: {{ id }}</li>
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
  props: {
    id: Number
  },
  data () {
    return {
      mesDetailData: {}
    }
  },
  methods: {
    sendMessage (value) {
      setTimeout(() => {
        value = value || this.$route
        const detail = mesDetailData.find(detail => detail.id === this.id)
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
    // 这里不再监听路由params 而去监听props的id变化!
    id (value) {
      setTimeout(() => {
        const detail = mesDetailData.find(detail => detail.id === value * 1)
        this.mesDetailData = detail
      }, 200)
    },
    immediate: true
  }
}
</script>

<style  scoped>
</style>
