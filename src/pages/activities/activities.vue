<template>
  <div class="activity-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <activity-content></activity-content>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import ActivityContent from './components/ActivityContent'

export default {
  components: { BasicHeader, LogoBox, ActivityContent, BasicQrcode, BasicBottom }
}
</script>

<style lang="less" scoped>
.activity-page-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
