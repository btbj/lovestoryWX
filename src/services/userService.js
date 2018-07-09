import Api from '@/services/Api'
import { Toast } from 'mint-ui'
import { router } from '@/router'

export default {
  serviceURL: 'user/',

  usageInfo (IMEI) {
    return Api.post((this.serviceURL + 'usage_info'), IMEI)
    // return Api.create().post((this.serviceURL + 'usage_info'), IMEI)
  },
  wxUserInfo (token) {
    return Api.post((this.serviceURL + 'wx_user_info'), token)
    // return Api.create().post((this.serviceURL + 'wx_user_info'), token)
  },
  doUpdateWxUser (token) {
    return Api.post((this.serviceURL + 'do_update_wx_user'), token)
    // return Api.create().post((this.serviceURL + 'do_update_wx_user'), token)
  },
  doReg (info) {
    return Api.post((this.serviceURL + 'do_reg'), info)
    // return Api.create().post((this.serviceURL + 'do_reg'), info)
  },
  wechatLogin (openid) {
    return Api.post((this.serviceURL + 'wechat_login'), openid)
    // return Api.create().post((this.serviceURL + 'wechat_login'), openid)
  },
  getOtpCode (phoneNumber) {
    return Api.post((this.serviceURL + 'get_otp_code'), phoneNumber)
    // return Api.create().post((this.serviceURL + 'get_otp_code'), phoneNumber)
  },
  usageLogs (phoneNumber) {
    return Api.post((this.serviceURL + 'usage_logs'), phoneNumber)
    // return Api.create().post((this.serviceURL + 'usage_logs'), phoneNumber)
  },
  info (id) {
    return Api.post((this.serviceURL + 'info'), id)
    // return Api.create().post((this.serviceURL + 'info'), id)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      if (data.error_code === 102) {
        // console.log('用户未注册')
        router.push('/register')
      } else {
        Toast(data.message)
      }
    }
  }
}
