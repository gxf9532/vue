<template>
  <div>
    <div>点击了{{ count }}次,数字是{{ isOdd2 }}数</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数增加</button>
    <button @click="incrementSync">async</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters({
      isOdd2: 'isOdd'
    })
  },
  methods: {
    ...mapMutations({
      increment: 'INCREMENT',
      decrement: 'DECREMENT'
    }),

    ...mapActions(['incrementOdd', 'incrementSync'])
  }
}
</script>

<style  scoped>
</style>
