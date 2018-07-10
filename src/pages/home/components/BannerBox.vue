<template>
  <div class="banner-box-root">
    <div class="banner-img" :style="`background-image: url('${bannerImg}');`"></div>
  </div>
</template>

<script>
import imageService from '@/services/imageService'

export default {
  computed: {
    bannerImg () {
      return imageService.banner
    }
  }
}
</script>

<style lang="less" scoped>
.banner-box-root{
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  .banner-img{
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
