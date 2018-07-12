<template>
  <div class="service-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <serviceintro-content></serviceintro-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import ServiceintroContent from './components/ServiceintroContent'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, ServiceintroContent }
}
</script>

<style lang="less" scoped>
.service-page-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
