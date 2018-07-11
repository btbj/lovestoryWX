import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'activity/',

  activities (credentials) {
    return Api.post((this.serviceURL + 'activities'), credentials)
  },
  info (credentials) {
    return Api.post((this.serviceURL + 'info'), credentials)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
