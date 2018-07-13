<template>
  <div class="banner-box-root">
    <div class="banner-img" :style="`background-image: url('${bannerImg}');`"></div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      bannerImg: ''
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.bannerImg = res.data.info.url
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(21)
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
