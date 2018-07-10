<template>
  <div class="home-page-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <banner-box></banner-box>
    <grid-menu></grid-menu>
    <home-member-cards></home-member-cards>
    <home-activity></home-activity>
    <home-love-story></home-love-story>
    <home-service></home-service>
    <home-news-info></home-news-info>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
    <!-- <div style="height: 1000px; background: gray;">
      asdfa
    </div> -->
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BannerBox from './components/BannerBox'
import GridMenu from './components/GridMenu'
import HomeMemberCards from './components/HomeMemberCards'
import HomeActivity from './components/HomeActivity'
import HomeLoveStory from './components/HomeLoveStory'
import HomeService from './components/HomeService'
import HomeNewsInfo from './components/HomeNewsInfo'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'

export default {
  components: { BasicHeader, LogoBox, BannerBox, GridMenu, HomeMemberCards, HomeActivity, HomeLoveStory, HomeService, HomeNewsInfo, BasicQrcode, BasicBottom }
}
</script>

<style lang="less" scoped>
.home-page-root{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
