<template>
  <div class="aboutus-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <aboutus-content></aboutus-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import AboutusContent from './components/AboutusContent'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, AboutusContent }
}
</script>

<style lang="less" scoped>
.aboutus-page-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
