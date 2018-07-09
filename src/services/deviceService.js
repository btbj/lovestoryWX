import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'device/',

  getDeviceInfo (sn) {
    return Api.post((this.serviceURL + 'get_device_info'), sn)
  },
  getLastUsage (sn) {
    return Api.post((this.serviceURL + 'get_last_usage'), sn)
  },
  info (sn) {
    return Api.post((this.serviceURL + 'info'), sn)
  },
  userRanks (sn) {
    return Api.post((this.serviceURL + 'user_ranks'), sn)
  },
  reportError (sn) {
    return Api.post((this.serviceURL + 'report_error'), sn)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
