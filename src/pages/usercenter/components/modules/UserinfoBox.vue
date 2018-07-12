<template>
  <div class="user-info-container">
    <div class="user-info-box" v-if="userInfo">
      <div class="user-avatar" :style="`background-image: url('${userInfo.info.head_image_url}');`"></div>
      <div class="user-nickname">{{userInfo.info.nickname}}</div>
      <div class="user-phone">{{userInfo.info.phone}}</div>
      <div class="user-address">{{userInfo.info.address}}</div>
      <div class="user-status">{{UserAge}} {{userInfo.info.marital_status}}</div>
      <div class="user-fans-row">
        <div class="item">粉丝  <span class="num fans">{{userInfo.info.fans_num}}</span></div>
        <div class="item">关注  <span class="num follow">{{userInfo.info.attention_num}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.userInfo = res.data.info
        // if (this.userInfo.info.role_id === '3') {
        //   this.$router.replace({name: 'prepay'})
        // }
        console.log('user info', res)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    UserAge () {
      let age = 0
      if (this.userInfo) {
        let currentYear = new Date().getFullYear()
        age = currentYear - this.userInfo.info.year + 1
      }
      return age + '岁'
    }
  },
  mounted: async function () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.user-info-container {
  box-sizing: border-box;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  .user-info-box {
    width: 60%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user-avatar, .user-nickname, .user-phone, .user-address{
      margin-bottom: 5px;
    }
    .user-status, .user-nickname, .user-phone, .user-address, .user-fans-row{
      color: #444;
      font-size: 14px;
    }
    .user-avatar{
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: 1px solid #ddd;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .user-fans-row{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 20px;
      box-sizing: border-box;
      .item{
        display: flex;
        flex-direction: row;
        align-content: center;
        .num{
          margin-left: 5px;
          font-size: 18px;
        }
        .fans{
          margin-top: -2px;
          color: #3498db;
        }
        .follow{
          margin-top: -2px;
          color: #e74c3c;
        }
      }
    }
  }
}
</style>
