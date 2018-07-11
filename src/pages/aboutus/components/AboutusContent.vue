<template>
  <div class="about-us-page-root">
    <page-header>
      <span slot="title">关于我们</span>
      <span slot="nav-item" @click="aaa('companyintro')">公司介绍</span>
      <span slot="nav-item" @click="aaa('officeenviro')">办公环境</span>
      <span slot="nav-item" @click="aaa('contactus')">联系我们</span>
    </page-header>
    <div class="about-us-content-box">
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
      content: '卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡卡萨布兰卡'
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
.about-us-page-root {
  width: 100%;
  box-sizing: border-box;
  .about-us-content-box {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>
