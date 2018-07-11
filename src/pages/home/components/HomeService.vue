<template>
  <div class="home-service-root">
    <div class="service-bg-box" :style="`background-image: url('${processImg}')`"></div>
  </div>
</template>

<script>
import imageService from '@/services/imageService'

export default {
  computed: {
    processImg () {
      return imageService.wxprocess
    }
  }
}
</script>

<style lang="less" scoped>
.home-service-root {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0;
  margin-bottom: 30px;
  .service-bg-box {
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
  }
}

</style>
