<template>
  <div class="user-info-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <page-header noMenu>
      <span slot="title">用户信息</span>
    </page-header>

    <div class="user-info-body">
      <self-info :info="userInfo" :albumList="AlbumList" v-if="userInfo"></self-info>
      <extra-info :info="userInfo" v-if="userInfo"></extra-info>
      <follow-btn></follow-btn>
    </div>

    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import userService from '@/services/userService'
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import PageHeader from '@/components/PageHeader'
import { Toast } from 'mint-ui'
import SelfInfo from './components/SelfInfo'
import ExtraInfo from './components/ExtraInfo'
import FollowBtn from './components/FollowBtn'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, PageHeader, SelfInfo, ExtraInfo, FollowBtn },
  data () {
    return {
      userInfo: null,
      AlbumList: []
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getUserInfo({
          token: this.$store.getters.token,
          id: this.$route.params.UserId
        })
        this.userInfo = res.data.info
        console.log(res)
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async getAlbum () {
      try {
        let res = await userService.albumImages({
          token: this.$store.getters.token,
          user_id: this.$route.params.UserId
        })
        console.log(res)
        this.AlbumList = res.data.images
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    let token = this.$store.getters.token
    if (!token) {
      Toast('请先登录')
      this.$router.replace('/login')
    } else {
      await this.getUserInfo()
      await this.getAlbum()
    }
  }
}
</script>

<style lang="less" scoped>
.user-info-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .user-info-body {
    flex: 1;
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
