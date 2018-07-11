<template>
  <div class="basic-qrcode-root">
    <div class="qrcode-container" v-for="(item, index) in qrCodeList" :key="index">
      <div class="qrcode-pic" :style="`background-image: url('${item.value}')`"> </div>
      <div class="qrcode-label">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      qrCodeList: []
    }
  },
  methods: {
    async getQRCode () {
      try {
        let res = await siteService.info({id: [16, 17]})
        let array = res.data.info.map(item => {
          let {name, url: value, label} = item
          return {name, value, label}
        })
        // console.log(array)
        this.qrCodeList = array
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    await this.getQRCode()
  }
}
</script>

<style lang="less" scoped>
.basic-qrcode-root {
  width: 100%;
  border-top: 2px solid #F1356F;
  background-color: #F5F5F5;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  .qrcode-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    .qrcode-pic {
      width: 110px;
      height: 110px;
      box-sizing: border-box;
      margin-bottom: 8px;
      overflow: hidden;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .qrcode-label {
      font-size: 14px;
    }
  }
}
</style>
