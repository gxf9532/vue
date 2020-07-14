<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
          <!-- <router-link :to="'/home/message/detail/'+message.id">{{ message.title }}</router-link> -->
          <router-link :to="`/home/message/detail/${message.id}?title=${message.title}`">{{ message.title }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      messages: []
    }
  },

  mounted () {
    setTimeout(() => {
      // 定义一个模拟数据
      const listData = [
        { id: 1, title: '容祖儿再次...' },
        { id: 2, title: '广州高温...' },
        { id: 3, title: '甄子丹再次...' }
      ]

      this.messages = listData
    }, 200)
  }
}
</script>

<style  scoped>
</style>
