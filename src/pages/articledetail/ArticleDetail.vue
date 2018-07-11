<template>
  <div class="article-detail-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <article-content></article-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import ArticleContent from './components/ArticleContent'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, ArticleContent }
}
</script>

<style lang="less" scoped>
.article-detail-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
