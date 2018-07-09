import Api from '@/services/Api'
import { Toast } from 'mint-ui'
import { router } from '@/router'

export default {
  serviceURL: 'maintain/',

  doLogin (phone) {
    return Api.post((this.serviceURL + 'do_login'), phone)
  },
  isMaintainer (phone) {
    return Api.post((this.serviceURL + 'is_maintainer'), phone)
  },
  createMaintainLog (phone) {
    return Api.post((this.serviceURL + 'do_create_maintain_log'), phone)
  },
  getMaintainLogs (errorId) {
    return Api.post((this.serviceURL + 'get_maintain_logs'), errorId)
  },
  getAreaErrors (token) {
    return Api.post((this.serviceURL + 'get_area_errors'), token)
  },
  getErrorInfo (id) {
    return Api.post((this.serviceURL + 'get_error_info'), id)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      if (data.error_code === 101) {
        // console.log('token不存在')
        router.replace({
          name: 'maintain-login'
        })
      } else {
        Toast(data.message)
      }
    }
  }
}
