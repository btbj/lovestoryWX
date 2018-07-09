import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'wechat/',

  getBanner () {
    return Api.post((this.serviceURL + 'get_banner'))
    // return Api.create().post((this.serviceURL + 'get_banner'))
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
