import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'file/',
  uploadFile (formData) {
    return Api.post((this.serviceURL + 'do_upload'), formData)
  },
  uploadUrl (token) {
    return Api.serverBaseURL + this.serviceURL + 'do_upload'
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
