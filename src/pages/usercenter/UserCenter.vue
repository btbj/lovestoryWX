<template>
  <div class="user-center-root">
    <user-header>
      <span slot="title">会员中心</span>
    </user-header>
    <usercenter-content></usercenter-content>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import UsercenterContent from './components/UsercenterContent'

export default {
  components: { UserHeader, UsercenterContent },
  mounted: async function () {
    let token = this.$store.getters.token
    if (!token) {
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.user-center-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
