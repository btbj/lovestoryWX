<template>
  <div class="follow-btn-root">
    <div class="follow-btn" v-if="!isFollowed" @click="followUser">关 注</div>
    <div class="follow-btn unfollow" v-else @click="unfollowUser">取消关注</div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      isFollowed: false
    }
  },
  methods: {
    async getAttentionStatus () {
      try {
        let res = await userService.attentionStatus({
          token: this.$store.getters.token,
          id: this.$route.params.UserId
        })
        // console.log('follow status', res)
        this.isFollowed = res.data.status
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async followUser () {
      try {
        let res = await userService.doAttention({
          token: this.$store.getters.token,
          user_id: this.$route.params.UserId
        })
        Toast(res.message)
        this.getAttentionStatus()
        // console.log('follow status', res)
        // this.isFollowed = res.status
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async unfollowUser () {
      try {
        let res = await userService.cancelAttention({
          token: this.$store.getters.token,
          user_id: this.$route.params.UserId
        })
        Toast(res.message)
        this.getAttentionStatus()
        // console.log('follow status', res)
        // this.isFollowed = res.status
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getAttentionStatus()
  }
}
</script>

<style lang="less">
.follow-btn-root{
  .follow-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F1356F;
    box-sizing: border-box;
    // border-radius: 3px;
    color: white;
    text-align: center;
    cursor: pointer;
    &.unfollow{
      background-color: rgb(221, 162, 181);
    }
  }
}

</style>
