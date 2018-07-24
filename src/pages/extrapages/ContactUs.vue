<template>
  <div class="ex-contact-us-root">
    <page-header noBack noMenu>
      <div slot="title">联系电话</div>
    </page-header>
    <logo-box></logo-box>
    <div class="body">
      <h3 class="title">联系热线</h3>
      <p class="hot-line-number"><span class="icon mdi-phone red"></span>{{hotline}}</p>
      <a :href="`tel:${hotline}`" style="display: none;" id="phone-number-atag">{{hotline}}</a>
      <div class="dial-btn" @click="dialNumber">点击拨号</div>
    </div>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import LogoBox from '@/components/LogoBox'
import BasicBottom from '@/components/BasicBottom'
import siteService from '@/services/siteService'

export default {
  components: { PageHeader, LogoBox, BasicBottom },
  data () {
    return {
      hotline: '15888599711'
    }
  },
  methods: {
    dialNumber () {
      window.document.getElementById('phone-number-atag').click()
    },
    async getHotline () {
      try {
        let res = await siteService.info({id: 12})
        this.hotline = res.data.info.value
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getHotline()
  }
}
</script>

<style lang="less" scoped>
.ex-contact-us-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .body{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    .title{
      color: #F1356F;
    }
    .hot-line-number{
      font-size: 20px;
      font-weight: bold;
      .red{
        color: #F1356F;
      }
    }
    .dial-btn{
      background: #F1356F;
      color: white;
      padding: 5px 20px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
}
</style>
