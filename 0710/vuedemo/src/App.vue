<template>
  <div>
    <!--
      SPA -> 单页应用  Single Page Application
    -->
    <div>
      <!-- 路由链接 -->
      <router-link to="/about">About</router-link>
      <br />
      <router-link to="/home">Home</router-link>
    </div>

    <div>
      <!-- 标识在这里显示路由链接 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style  scoped>
</style>
