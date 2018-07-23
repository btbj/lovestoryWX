<template>
  <div class="banner-box-root">
    <mt-swipe :auto="4000" class="banner-img-box">
      <mt-swipe-item class="banner-img-item" v-for="(pic, index) in bannerList" :key="index">
        <div class="banner-img" :style="`background-image: url('${pic.url}');`"></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.bannerList = res.data.info.images
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(26)
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
