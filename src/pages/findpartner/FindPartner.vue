<template>
  <div class="partner-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <findpartner-content></findpartner-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import FindpartnerContent from './components/FindpartnerContent'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'

export default {
  components: { BasicHeader, LogoBox, FindpartnerContent, BasicQrcode, BasicBottom }
}
</script>

<style lang="less" scoped>
.partner-page-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
