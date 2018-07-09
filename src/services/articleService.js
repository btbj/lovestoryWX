import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'article/',

  articles (page) {
    return Api.post((this.serviceURL + 'wechat_articles'), page)
  },
  info (id) {
    return Api.post((this.serviceURL + 'wechat_info'), id)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
