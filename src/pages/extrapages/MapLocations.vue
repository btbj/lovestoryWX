<template>
  <div class="ex-contact-us-root">
    <page-header noBack noMenu>
      <div slot="title">地图</div>
    </page-header>
    <logo-box></logo-box>
    <div class="body">
      <h3 class="title">公司地址</h3>
      <p class="address-text">{{address}}</p>
      <div class="check-btn" @click="checkMap">查看地图</div>
    </div>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import jssdk from 'weixin-js-sdk'
import jssdkService from '@/services/jssdkService'
import PageHeader from '@/components/PageHeader'
import LogoBox from '@/components/LogoBox'
import BasicBottom from '@/components/BasicBottom'
import siteService from '@/services/siteService'

export default {
  components: { PageHeader, LogoBox, BasicBottom },
  data () {
    return {
      wx: jssdk,
      jsApiList: ['openLocation'],
      address: '公司地址',
      lnglat: { lng: 121.280571, lat: 30.204041 } // "lng":121.280571, "lat":30.204041,
    }
  },
  methods: {
    async initJSSDK () {
      // this.openid = this.$store.getters.openid
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
    checkMap () {
      console.log('check map')
      this.wx.openLocation({
        latitude: this.lnglat.lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: this.lnglat.lng, // 经度，浮点数，范围为180 ~ -180。
        name: '爱情故事', // 位置名
        address: '慈溪市文化商务区凯玛大厦12楼', // 地址详情说明
        scale: 22, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
      })
    },
    async getCompanyAddress () {
      try {
        let res = await siteService.info({id: 11})
        this.address = res.data.info.value
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    await this.initJSSDK()
    await this.getCompanyAddress()
  }
}
</script>

<style lang="less" scoped>
.ex-contact-us-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .body{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    .title{
      color: #F1356F;
    }
    .address-text{
      font-size: 20px;
      font-weight: bold;
    }
    .check-btn{
      background: #F1356F;
      color: white;
      padding: 5px 20px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
}
</style>
