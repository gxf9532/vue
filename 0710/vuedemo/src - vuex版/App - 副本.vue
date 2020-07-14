<template>
  <div>
    <div>点击了{{ $store.state.count }}次,数字是{{ $store.getters.isOdd }}数</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数增加</button>
    <button @click="incrementSync">async</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      //   this.$store.dispatch('decrement')
      this.$store.commit('DECREMENT')
    },
    incrementOdd () {
      this.$store.dispatch('incrementOdd')
    },
    incrementSync () {
      this.$store.dispatch('incrementSync')
    }
  }
}
</script>

<style  scoped>
</style>
