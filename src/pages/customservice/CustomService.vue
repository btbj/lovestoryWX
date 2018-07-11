<template>
  <div class="custom-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom }
}
</script>

<style lang="less" scoped>
.custom-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
