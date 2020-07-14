<template>
    <div>
        <!-- <input type="text" v-model="serchData"> -->
        <button @click="searchHandle">搜索</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      searchData: ''
    }
  },
  mounted () {
    // console.log(this.$store.state.count)
  },
  methods: {
    searchHandle () {
      this.$store.dispatch('search')
    }
  }
}
</script>

<style  scoped>

</style>
