<template>
  <div class="visitor-page-root">
    <user-header><span slot="title">我的相册</span></user-header>
    <div class="member-cards-container">
      <pic-list></pic-list>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import PicList from './components/PicList'

export default {
  components: { UserHeader, PicList },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.visitor-page-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .member-cards-container {
    width: 100%;
    box-sizing: border-box;
  }
}

</style>
