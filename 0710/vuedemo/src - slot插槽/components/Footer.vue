<template>
  <div>
    <label for>
      <!-- <input type="checkbox" v-model="checkAll" />
       -->
       <slot name="left"></slot>
    </label>
    <!-- <span>全部</span>
     -->
     <slot name="middle"></slot>
    <!-- <button class="btn btn-sm btn-danger" @click="delChecked" v-if="total>0">清除选中</button> -->
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    lists: Array,
    selectAll: Function,
    delChecked: Function
  },

  computed: {

    total () {
      return 0
    //   return this.lists.reduce((pre, item) => pre + (item.complete ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return ''
      },
      // 用户操作时自动调用
      set (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>

<style  scoped>
</style>
