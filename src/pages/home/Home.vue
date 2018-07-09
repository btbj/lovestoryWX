<template>
  <div class="home-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <div style="height: 1000px; background: gray;">

      asdfa
    </div>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'

export default {
  components: { BasicHeader, LogoBox }
}
</script>

<style lang="less" scoped>
.home-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
