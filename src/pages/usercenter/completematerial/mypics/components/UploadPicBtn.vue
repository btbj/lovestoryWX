<template>
  <div class="upload-avatar-root">
    <div class="upload-btn-box" @click="uploadImgToServer">
      <div class="pic">
        <div class="add-icon-box">
          <span class="mdi-control_point item-icon"></span>
          <div class="add-word">上传照片</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jssdk from 'weixin-js-sdk'
import jssdkService from '@/services/jssdkService'
import userService from '@/services/userService'
// import fileService from '@/services/fileService'
import { Toast, Indicator } from 'mint-ui'

export default {
  data () {
    return {
      wx: jssdk,
      jsApiList: ['chooseImage', 'uploadImage', 'getLocalImgData']
    }
  },
  methods: {
    async initJSSDK () {
      this.openid = this.$store.getters.openid
      try {
        const outData = {
          url: window.location.href.split('#')[0]
        }
        const res = await jssdkService.getSignature(outData)
        let {app_id: appId, timestamp, noncestr: nonceStr, signature} = res.data.params
        // console.log(appId, timestamp, nonceStr, signature)
        this.wx.config({
          debug: jssdkService.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId, // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr, // 必填，生成签名的随机串
          signature, // 必填，签名，见附录1
          jsApiList: this.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      } catch (error) {
        jssdkService.handleErr(error)
      }
    },
    chooseImage () {
      return new Promise((resolve, reject) => {
        this.wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: (res) => {
            resolve(res)
            // console.log(res)
            // this.uploadImg(res.localIds[0])
          },
          cancel: (error) => {
            reject(error)
          }
        })
      })
    },
    uploadImg (id) {
      return new Promise((resolve, reject) => {
        this.wx.uploadImage({
          localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 0, // 默认为1，显示进度提示
          success: (res) => {
            resolve(res)
            // console.log(res)
            // this.syncData[target] = res.serverId // 返回图片的服务器端ID
          }
        })
      })
    },
    async uploadImgToServer () {
      Indicator.open()
      try {
        let chooseImgRes = await this.chooseImage()
        // console.log('choose img', chooseImgRes)
        let uploadImgRes = await this.uploadImg(chooseImgRes.localIds[0])
        // console.log('upload img', uploadImgRes)
        let tempImgRes = await jssdkService.getWechatTempImage({
          token: this.$store.getters.token,
          media_id: uploadImgRes.serverId
        })
        // console.log(tempImgRes)
        this.$emit('input', tempImgRes.data.url)
        let addAlbumImageRes = await userService.addAlbumImage({
          token: this.$store.getters.token,
          image_id: tempImgRes.data.id
        })
        // console.log(updateAvatarRes)
        this.$emit('changed')
        Toast(addAlbumImageRes.message)
      } catch (error) {
        jssdkService.handleErr(error)
        // console.log(error)
      }
      Indicator.close()
    }
  },
  mounted: async function () {
    await this.initJSSDK()
  }
}
</script>

<style lang="less" scoped>
.upload-avatar-root{
  height: 100%;
  width: 100%;
  .upload-btn-box {
    height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    box-sizing: border-box;
    padding: 9px;
    display: flex;
    .pic {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-style {
        max-width: 100%;
        max-height: 100%;
      }
      .add-icon-box {
        width: 100%;
        height: 100%;
        background-color: #E8E8E8;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .item-icon {
          font-size: 80px;
          color: white;
          margin: 5px 0;
        }
        .add-word {
          font-size: 16px;
        }
      }
    }
  }
}

</style>
