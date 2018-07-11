import Api from '@/services/Api'
import { Toast } from 'mint-ui'

export default {
  serviceURL: 'user/',

  getOtpCode (phone) {
    return Api.post((this.serviceURL + 'get_otp_code'), phone)
  },
  doLogin (phone) {
    return Api.post((this.serviceURL + 'do_login'), phone)
  },
  doLoginByPhone (phone) {
    return Api.post((this.serviceURL + 'do_login_by_phone'), phone)
  },
  doReg (info) {
    return Api.post((this.serviceURL + 'do_reg'), info)
  },
  verifyCode (info) {
    return Api.post((this.serviceURL + 'verify_code'), info)
  },
  setMonologue (info) {
    return Api.post((this.serviceURL + 'set_monologue'), info)
  },
  setAvatar (info) {
    return Api.post((this.serviceURL + 'set_avatar'), info)
  },
  addAlbumImage (info) {
    return Api.post((this.serviceURL + 'add_album_image'), info)
  },
  deleteAlbumImage (info) {
    return Api.post((this.serviceURL + 'delete_album_image'), info)
  },
  albumImages (info) {
    return Api.post((this.serviceURL + 'album_images'), info)
  },
  getInfo (token) {
    return Api.post((this.serviceURL + 'get_info'), token)
  },
  getUserInfo (id) {
    return Api.post((this.serviceURL + 'get_user_info'), id) // 获取他人信息
  },
  setUserDetails (array) {
    return Api.post((this.serviceURL + 'set_user_details'), array)
  },
  getUserDetails (array) {
    return Api.post((this.serviceURL + 'get_user_details'), array)
  },
  setExtraInfo (token) {
    return Api.post((this.serviceURL + 'set_extra_info'), token)
  },
  setConditions (token) {
    return Api.post((this.serviceURL + 'set_conditions'), token)
  },
  search (info) {
    return Api.post((this.serviceURL + 'search'), info)
  },
  create (credentials) {
    return Api.post((this.serviceURL + 'do_create'), credentials)
  },
  login (credentials) {
    return Api.post((this.serviceURL + 'do_login'), credentials)
  },
  changePwd (credentials) {
    return Api.post((this.serviceURL + 'do_change_pwd'), credentials)
  },
  info (credentials) {
    return Api.post((this.serviceURL + 'get_info'), credentials)
  },
  delete (credentials) {
    return Api.post((this.serviceURL + 'do_delete'), credentials)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
  },
  users (token) {
    return Api.post((this.serviceURL + 'users'), token)
  },
  recommends (token) {
    return Api.post((this.serviceURL + 'recommends'), token) // 首页token可以为空
  },
  seenMeUsers (token) {
    return Api.post((this.serviceURL + 'seen_me_users'), token)
  },
  seensUsers (token) {
    return Api.post((this.serviceURL + 'seens'), token)
  },
  attentionMeUsers (token) {
    return Api.post((this.serviceURL + 'attention_me_users'), token)
  },
  attentionStatus (token) {
    return Api.post((this.serviceURL + 'attention_status'), token)
  },
  doAttention (token) {
    return Api.post((this.serviceURL + 'do_attention'), token)
  },
  cancelAttention (token) {
    return Api.post((this.serviceURL + 'cancel_attention'), token)
  },
  attentions (token) {
    return Api.post((this.serviceURL + 'attentions'), token)
  },
  resetPwd (token) {
    return Api.post((this.serviceURL + 'reset_pwd'), token)
  },
  getMenus (token) {
    return Api.post((this.serviceURL + 'get_menus'), token)
  },
  newMembers (token) {
    return Api.post((this.serviceURL + 'new_members'), token)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      Toast(data.message)
    }
  }
}
