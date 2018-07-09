<template>
  <div class="home-page-root">
    <basic-header></basic-header>
    <home-member-cards></home-member-cards>
    <home-activity></home-activity>
    <home-love-story></home-love-story>
    <home-service></home-service>
    <!-- <div style="height: 1000px; background: gray;">
      asdfa
    </div> -->
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import HomeMemberCards from './components/HomeMemberCards'
import HomeActivity from './components/HomeActivity'
import HomeLoveStory from './components/HomeLoveStory'
import HomeService from './components/HomeService'

export default {
  components: { BasicHeader, HomeMemberCards, HomeActivity, HomeLoveStory, HomeService }
}
</script>

<style lang="less" scoped>
.home-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
