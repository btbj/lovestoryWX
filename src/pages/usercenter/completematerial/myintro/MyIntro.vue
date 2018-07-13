<template>
  <div class="my-intro-root">
    <user-header>
      <span slot="title">内心独白</span>
    </user-header>
    <div class="intro-content-container">
      <div class="intro-info-box">
        <plain-input type="textarea" class="intro-input" v-model="intro"></plain-input>
        <div class="intro-remark">限20~1000字， 目前已输入{{letterCount}}, 您还可以输入{{1000-letterCount}}字</div>
      </div>
      <div class="option-btn">
        <div class="btn" @click="submitInfo">保存并继续</div>
        <div class="btn" @click="skipPage">跳过此页</div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UserHeader from '@/components/UserHeader'
import PlainInput from '@/components/PlainInput'
import { Toast } from 'mint-ui'

export default {
  components: { UserHeader, PlainInput },
  data () {
    return {
      intro: ''
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.intro = res.data.info.info.monologue || ''
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    async submitInfo () {
      if (this.letterCount < 20) {
        Toast('内心独白字数不小于20')
        return
      }
      try {
        let res = await userService.setMonologue({
          token: this.$store.getters.token,
          monologue: this.intro
        })
        Toast(res.message)
        this.$router.push({name: 'MyPics'})
      } catch (error) {
        userService.handleErr(error)
      }
    },
    skipPage () {
      this.$router.push({name: 'MyPics'})
    }
  },
  computed: {
    letterCount () {
      return this.intro.length
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.my-intro-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .intro-content-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .intro-info-box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 30px;
      .intro-input {
        height: 200px;
      }
      .intro-remark {
        margin-top: 5px;
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        line-height: 30px;
        text-align: left;
        font-size: 12px;
      }
    }
    .option-btn {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      .btn {
        width: 100px;
        height: 30px;
        background-color: #EF356E;
        box-sizing: border-box;
        border-radius: 5px;
        color: white;
        line-height: 30px;
        margin: 0 30px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>
