<template>
  <ul>
    <Item v-for="(item, index) in lists" :key="item.id" :item="item" :del="del" :index="index" :update="update"/>
  </ul>
</template>

<script type="text/ecmascript-6">
import Item from './Item.vue'
export default {
  props: ['lists', 'del', 'update'],

  components: {
    Item
  }
}
</script>

<style  scoped>
ul li {
  list-style: none;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
