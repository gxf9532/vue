<template>
  <div>
    <mt-button type="primary" @click="halt" style="width: 100%">弹出</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
export default {
  methods: {
    halt () {
      Toast({
        message: '提示信息',
        position: 'middle'
      })
    }
  }
}

</script>

<style  scoped>
</style>
