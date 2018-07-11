import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'site/',
  info (id) {
    return Api.post((this.serviceURL + 'info'), id)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
