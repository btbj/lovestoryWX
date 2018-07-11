<template>
  <div class="my-detail-root">
    <user-header>
      <span slot="title">详细资料</span>
    </user-header>
    <div class="detail-content-container"></div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'

export default {
  components: { UserHeader }
}
</script>

<style lang="less" scoped>
.my-detail-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .detail-content-container {
    width: 100%;
    height: 200px;
    border: 1px solid black;
    box-sizing: border-box;
  }
}
</style>
