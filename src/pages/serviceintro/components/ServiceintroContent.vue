<template>
  <div class="service-info-page-root">
    <page-header noMenu>
      <span slot="title">服务介绍</span>
    </page-header>
    <div class="service-info-content-box" v-html="contentInfo">
      <!-- {{content}} -->
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'
import PageHeader from '@/components/PageHeader'

export default {
  components: { PageHeader },
  data () {
    return {
      contentInfo: ''
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.contentInfo = res.data.info.value
        // console.log(res)
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(13)
  }

}
</script>

<style lang="less" scoped>
.service-info-page-root {
  width: 100%;
  box-sizing: border-box;
  .service-info-content-box {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>

<style lang="less">
.service-info-page-root {
  .service-info-content-box {
    img{
      max-width: 100%;
    }
  }
}
</style>
