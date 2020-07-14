<template>
  <li
    :style="{ background: bgColor }"
    @mouseenter="enterHandle(true)"
    @mouseleave="enterHandle(false)"
  >
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-sm btn-primary" v-show="isShow" @click="deleteHandle">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    item: Object,
    index: Number,
    update: Function
  },

  data () {
    return {
      bgColor: '#FFF',
      isShow: false
    }
  },

  methods: {
    deleteHandle () {
      if (confirm('确认删除吗?')) {
        // this.del(this.index)
        this.$EventBus.$emit('del', this.index)
      }
    },
    enterHandle (flag) {
      if (flag) {
        this.bgColor = '#CCC'
        this.isShow = true
      } else {
        this.bgColor = '#FFF'
        this.isShow = false
      }
    }
  },
  computed: {
    isCheck: {
      get () {
        return this.item.complete
      },
      set (value) {
        this.update(this.item, value)
      }
    }
  }
}
</script>

<style  scoped>
li button {
  float: right;
}
</style>
