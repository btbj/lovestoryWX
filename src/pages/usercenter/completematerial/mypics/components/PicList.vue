<template>
  <div class="pic-wall-container">
    <div class="pic-wall-list">
      <div class="pic-box" v-for="(pic, index) in picList"
        :key="index" @click="WarningDeletePic(pic.id)">
        <div class="pic" :style="`background-image: url(${pic.url})`"></div>
      </div>
      <div class="pic-box" v-if="picList.length < 8">
        <upload-pic-btn @changed="getList"></upload-pic-btn>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UploadPicBtn from './UploadPicBtn'
import { MessageBox, Toast, Indicator } from 'mint-ui'

export default {
  components: { UploadPicBtn },
  data () {
    return {
      picList: []
    }
  },
  methods: {
    async getList () {
      try {
        let res = await userService.albumImages({
          token: this.$store.getters.token
        })
        console.log(res)
        this.picList = res.data.images
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async WarningDeletePic (id) {
      MessageBox.confirm('确定删除照片?').then(action => {
        this.DeletePic(id)
      }).catch(cancel => {
        console.log(cancel)
      })
    },
    async DeletePic (id) {
      Indicator.open()
      try {
        let res = await userService.deleteAlbumImage({
          token: this.$store.getters.token,
          image_id: id
        })
        Toast(res.message)
        this.getList()
      } catch (error) {
        userService.handleErr(error)
      }
      Indicator.close()
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less">
.pic-wall-container {
  width: 100%;
  box-sizing: border-box;
  .pic-wall-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 20px 10px;
    margin-bottom: 10px;
    .pic-box {
      flex-basis: 33%;
      width: 110px;
      height: 150px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;
      padding: 5px;
      .pic{
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
