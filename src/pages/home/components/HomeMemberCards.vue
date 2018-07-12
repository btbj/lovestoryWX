<template>
  <div class="home-member-cards-root" v-show="show">
    <div class="member-cards-title">
      <div class="big-words-title">如果有爱，为什么错过</div>
      <div class="small-words-title">立即加入会员，缘分就在眼前</div>
    </div>
    <div class="member-cards-container">
      <div class="member-cards-box" v-for="(member, index) in memberCardsList"
           :key="index">
        <div class="pic-box" :style="`background-image: url('${member.head_image_url}')`"></div>
        <div class="profile-box">
          <div class="profile-name">{{member.nickname}}</div>
          <div class="profile-item">年龄：{{member.age}}</div>
          <div class="profile-item">身高：{{member.height}}</div>
          <div class="profile-item">学历：{{member.education}}</div>
          <div class="profile-btn">查看详情</div>
        </div>
      </div>
    </div>
    <div class="member-cards-more">
      <div class="more-btn">查看更多 >></div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      show: false,
      memberCardsList: [
        {
          img: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '34岁',
          height: '176',
          education: '高中及大专以下'
        }, {
          img: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '34岁',
          height: '176',
          education: '海龟硕士'
        }, {
          img: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '34岁',
          height: '176',
          education: '海龟硕士'
        }, {
          img: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '34岁',
          height: '176',
          education: '海龟硕士'
        }
      ]
    }
  },
  methods: {
    checkUserDetail (user) {
      this.$router.push({name: 'userinfo', params: {'id': user.id}})
    },
    async getList (page = 1) {
      try {
        let res = await userService.recommends({
          token: this.$store.getters.token,
          num: 4
        })
        console.log('success', res)
        this.memberCardsList = res.data.users
        this.show = true
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.home-member-cards-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  margin-bottom: 20px;
  .member-cards-title {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .big-words-title {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .small-words-title {
      font-size: 14px;
    }
  }
  .member-cards-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .member-cards-box {
      width: 50%;
      height: 150px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      .pic-box {
        width: 40%;
        height: 120px;
        box-sizing: border-box;
        margin-right: 3px;
        background-size: cover;
        background-position: center;
      }
      .profile-box {
        width: 50%;
        height: 140px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 3px;
        .profile-name {
          font-size: 14px;
          color: #F07BA8;
          margin-bottom: 8px;
        }
        .profile-item {
          font-size: 12px;
          margin-bottom: 3px;
        }
        .profile-btn {
          margin-top: 8px;
          width: 95%;
          height: 25px;
          color: white;
          background-color: #F07BA8;
          text-align: center;
          line-height: 25px;
          border-radius: 3px;
          font-size: 14px;
        }
      }
    }
  }
  .member-cards-more {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .more-btn {
      font-size: 16px;
      color: #F07BA8;
      width: 100px;
    }
  }
}

</style>
