import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'wechat/',
  debug: false,
  // debug: true,

  getSignature (URL) {
    return Api.post((this.serviceURL + 'get_jssdk_signature'), URL)
    // return Api.create().post((this.serviceURL + 'get_jssdk_signature'), URL)
  },
  getWechatPayParam (amount) {
    return Api.post((this.serviceURL + 'get_wechat_pay_param'), amount)
    // return Api.create().post((this.serviceURL + 'get_wechat_pay_param'), amount)
  },
  refundPayment (ids) {
    return Api.post((this.serviceURL + 'refund'), ids)
    // return Api.create().post((this.serviceURL + 'refund'), ids)
  },
  getPaymentInfo (paymentId) {
    return Api.post((this.serviceURL + 'get_payment_info'), paymentId)
    // return Api.create().post((this.serviceURL + 'get_payment_info'), paymentId)
  },
  getWechatTempImage (serverId) {
    return Api.post((this.serviceURL + 'get_wechat_temp_image'), serverId)
  },

  uploadImg (wx, id) {
    return new Promise((resolve, reject) => {
      wx.uploadImage({
        localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 0, // 默认为1，显示进度提示
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  getLocalImgData (wx, id) {
    return new Promise((resolve, reject) => {
      wx.getLocalImgData({
        localId: id, // 图片的localID
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
