<template>
  <div class="service-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <lovestory-content></lovestory-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import LovestoryContent from './components/LovestoryContent'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, LovestoryContent }
}
</script>

<style lang="less" scoped>
.service-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
