<template>
  <el-button class="otp-btn-root" size="small"
    :disabled="restSeconds>0 || !validPhone"
    @click="sendOtpCode">
    {{btnText}}
  </el-button>
</template>

<script>
import userService from '@/services/userService'

export default {
  props: ['phoneNumber'],
  data () {
    return {
      restSeconds: 0
    }
  },
  methods: {
    async sendOtpCode () {
      try {
        let res = await userService.getOtpCode({
          phone: this.phoneNumber
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.setSeconds(120)
      } catch (error) {
        console.log(error)
      }
    },
    setSeconds (seconds) {
      this.restSeconds = seconds
      let reduceInterval = setInterval(() => {
        this.restSeconds--
      }, 1000)
      setTimeout(() => {
        clearInterval(reduceInterval)
        this.restSeconds = 0
      }, seconds * 1000)
    }
  },
  computed: {
    btnText () {
      if (this.restSeconds > 0) {
        return `${this.restSeconds} 秒后获取`
      } else {
        return '发送验证码'
      }
    },
    validPhone () {
      let phonePattern = /^1[\d]{10}$/
      return phonePattern.test(this.phoneNumber)
    }
  }
}
</script>

<style lang="less">
.otp-btn-root{
  background-color: #F1356F;
  color: white;
  text-align: center;
  font-size: 13px;
  border: none;
  border-radius: 0;
  &.is-disabled{
    background-color: #bdc3c7;
    color: white;
  }
  &:active{
    background-color: #FEBDD3;
    color: white;
  }
  &:hover{
    background-color: #FEBDD3;
    color: white;
  }
}
</style>
