<template>
  <div class="aboutus-page-root">
    <basic-header></basic-header>
    <div>about us</div>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
export default {
  components: { BasicHeader }
}
</script>

<style lang="less" scoped>
.aboutus-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
