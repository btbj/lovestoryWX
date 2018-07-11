<template>
  <div class="service-info-page-root">
    <!-- <page-header>
      <span slot="title">新闻资讯</span>
      <span slot="first-item" @click="aaa('notification')">通知公告</span>
      <span slot="second-item" @click="aaa('companynews')">公司新闻</span>
      <span slot="third-item" @click="aaa('industrynews')">行业资讯</span>
    </page-header> -->
    <div class="service-info-content-box">
      {{content}}
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: { PageHeader },
  data () {
    return {
      content: '卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡'
    }
  },
  methods: {
    aaa (type) {
      console.log(type)
    }
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
