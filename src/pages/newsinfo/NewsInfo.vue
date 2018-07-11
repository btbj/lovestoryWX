<template>
  <div class="aboutus-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <newsinfo-content></newsinfo-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import NewsinfoContent from './components/NewsinfoContent'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, NewsinfoContent }
}
</script>

<style lang="less" scoped>
.newsinfo-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
