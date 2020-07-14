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
      <keep-alive><!-- 保存input中的输入信息 -->
        <router-view msg="这里是给about传递的数据"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style  scoped>
</style>
