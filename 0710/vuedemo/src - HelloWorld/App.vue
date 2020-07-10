<template>
  <div>
    <h1>App</h1>
    <img src="./assets/logo.png" alt="logo" />
    <!-- 使用子组件 -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="">
    img {
        width: 400px;
        height: 400px;
    }
/*
    h1 {
        color: #F00;
    } */
</style>
