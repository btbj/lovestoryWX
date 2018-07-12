<template>
  <div class="about-us-page-root">
    <page-header>
      <span slot="title">关于我们</span>
      <span slot="nav-item" @click="changeType('companyintro')">公司介绍</span>
      <span slot="nav-item" @click="changeType('officeenviro')">办公环境</span>
      <span slot="nav-item" @click="changeType('contactus')">联系我们</span>
    </page-header>
    <div class="about-us-title">{{titleText}}</div>
    <div class="about-us-content-box" v-html="contentInfo">
      <!-- {{content}} -->
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import siteService from '@/services/siteService'

export default {
  components: { PageHeader },
  data () {
    return {
      type: 'companyintro',
      contentInfo: ''
    }
  },
  methods: {
    changeType (type) {
      console.log(type)
      let typeIndex = {
        'companyintro': 1,
        'officeenviro': 2,
        'contactus': 3
      }
      this.type = type
      this.getSiteInfo(typeIndex[type])
    },
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
  computed: {
    titleText () {
      let result = ''
      switch (this.type) {
        case 'companyintro': result = '公司介绍'; break
        case 'officeenviro': result = '办公环境'; break
        case 'contactus': result = '联系我们'; break
        default: result = ''
      }
      return result
    }
  },
  mounted: async function () {
    this.getSiteInfo(1)
  }

}
</script>

<style lang="less" scoped>
.about-us-page-root {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  .about-us-title{
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 5px;
  }
  .about-us-content-box {
    width: 100%;
    // min-height: 300px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>

<style lang="less">
.about-us-content-box {
  img{
    max-width: 100%;
  }
}
</style>
