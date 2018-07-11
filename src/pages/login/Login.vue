<template>
  <div class="login-page-root">
    <logo-box></logo-box>
    <login-body></login-body>
  </div>
</template>

<script>
import LogoBox from '@/components/LogoBox'
import LoginBody from './components/LoginBody'

export default {
  components: { LogoBox, LoginBody }
}
</script>

<style lang="less" scoped>
.login-page-root{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
