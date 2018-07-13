<template>
  <div class="edit-password-root">
    <user-header>
      <span slot="title">密码修改</span>
    </user-header>
    <div class="edit-content-container">
      <div class="account-edit-content">
        <div class="item-row">
          <div class="row-label">手机号:</div>
          <div class="row-content">
            <span>{{maskPhone}}</span>
            <otp-btn class="otp-btn" :phoneNumber="phone"></otp-btn>
          </div>
        </div>
        <div class="item-row">
          <div class="row-label">手机验证码:</div>
          <div class="row-content">
            <plain-input class="right-selectbox" v-model="vecode" maxlength="4" placeholder="请输入验证码"></plain-input>
          </div>
        </div>
        <div class="item-row">
          <div class="row-label"></div>
          <div class="row-content">
            <div class="vecode-remark">
              验证码已发送。超过60秒未收到短信校验码，可点击重新发送按钮来重新获取短信校验码。
            </div>
          </div>
        </div>
      </div>
      <div class="account-edit-content" style="border: none">
        <div class="item-row">
          <div class="row-label" style="font-size: 12px">请重新设置登录密码</div>
        </div>
        <div class="item-row">
          <div class="row-label">设置新密码:</div>
          <div class="row-content">
            <plain-input type="password" class="right-selectbox" v-model="newPwd" maxlength="20"
             placeholder="6-20位字母、数字组合" auto-complete="new-password"></plain-input>
          </div>
        </div>
        <div class="item-row">
          <div class="row-label">确认新密码:</div>
          <div class="row-content">
            <plain-input type="password" placeholder="再次填写密码" v-model="againPwd"
              maxlength="20" auto-complete="new-password"></plain-input>
          </div>
        </div>
      </div>
      <div class="btn-box" @click="verifyCode">确 定</div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UserHeader from '@/components/UserHeader'
import OtpBtn from '@/components/OtpBtn'
import PlainInput from '@/components/PlainInput'
import { Indicator, Toast } from 'mint-ui'

export default {
  components: { UserHeader, OtpBtn, PlainInput },
  data () {
    return {
      phone: '',
      vecode: '',
      newPwd: '',
      againPwd: ''
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.phone = res.data.info.info.phone
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    async verifyCode () {
      if (this.newPwd.length < 6 || this.againPwd.length < 6) {
        Toast('密码长度不能小于6位')
        return
      } else if (this.newPwd !== this.againPwd) {
        Toast('两次密码不一致')
        return
      }
      Indicator.open()
      try {
        let res = await userService.verifyCode({
          phone: this.phone,
          code: this.vecode
        })
        console.log(res)
        await this.changePwd()
      } catch (error) {
        userService.handleErr(error)
      }
      Indicator.close()
    },
    async changePwd () {
      try {
        let res = await userService.changePwd({
          token: this.$store.getters.token,
          pwd: this.newPwd,
          pwd2: this.againPwd
        })
        console.log(res)
        Toast(res.message)
        this.$router.go(-1)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    maskPhone () {
      if (!this.phone) {
        return null
      } else {
        return this.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
      }
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.edit-password-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .edit-content-container {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .account-edit-content {
      margin: 15px 0;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 20px 0 10px;
      border-bottom: 1px solid #F3F3F3;
      .item-row {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        .row-label {
          font-size: 14px;
          width: 120px;
          text-align: left;
        }
        .row-content {
          width: 300px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          .right-selectbox {
            flex: 1;
          }
          .otp-btn{
            margin-left: 15px;
          }
          .vecode-remark {
            width: 100%;
            text-align: left;
            color: grey;
            font-size: 14px;
          }
        }
      }
    }
    .btn-box {
      margin: 20px 0 100px 0;
      width: 100%;
      height: 40px;
      background-color: #F1356F;
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
      color: white;
    }
  }
}

</style>
