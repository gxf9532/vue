<template>
  <div class="main">
    <input type="text" v-model="type" placeholder="请输入关键字..." />
    <button @click="searchHandle">搜索</button>
    <div v-if="repoData.length === 0">loading...</div>
    <div v-else>
      <ul>
        <li v-for="(news, index) in repoData" :key="news.uniquekey">
          <a :href="news.url">{{ news.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
axios.defaults.baseURL = '/api'

export default {
  data () {
    return {
      repoData: [],
      type: ''
    }
  },

  methods: {
    searchHandle () {
      this.repoData = []
      // 使用vue-resource发送请求
      const url = `/toutiao/index?type=${this.type}&key=83bbec82517e511e35d1d516e4688645`

      axios
        .get(url)
        .then(response => {
          //   console.log(response)
          this.repoData = response.data.result.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

}
</script>

<style  scoped>
.main {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px auto;
  width: 70%;
}
</style>
