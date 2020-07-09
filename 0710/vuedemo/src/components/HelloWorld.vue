<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      title: '这里是helloworld的子组件'
    }
  }
}
</script>

<style scoped>
/*
    scoped：只对当前组件产生影响
*/
    h1 {
        color: #F00;
    }
</style>
