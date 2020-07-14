<template>
  <div>
    <div>点击了{{ count }}次,数字是{{ isOdd }}数</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数增加</button>
    <button @click="incrementSync">async</button>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    isOdd () {
      return this.count % 2 === 1 ? '奇' : '偶'
    }
  },

  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    incrementOdd () {
      if (this.count % 2 === 1) {
        this.count++
      }
    },
    incrementSync () {
      setTimeout(() => {
        this.count++
      }, 500)
    }

  }
}
</script>

<style  scoped>
</style>
