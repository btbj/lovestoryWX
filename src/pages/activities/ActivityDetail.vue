<template>
  <div class="article-detail-root">
    <basic-header></basic-header>
    <logo-box></logo-box>
    <div class="article-content-root">
      <page-header noMenu>
        <span slot="title">活动详情</span>
      </page-header>
      <div class="article-box" v-if="newsDetail">
        <div class="title">{{newsDetail.title}}</div>
        <div class="date" v-if="newsDetail.created_date">{{newsDetail.created_date}}</div>
        <div class="time">
          <div class="info-label">活动时间：</div>
          <div class="info-content">{{newsDetail.time}}</div>
        </div>
        <div class="address">
          <div class="info-label">活动地点：</div>
          <div class="info-content">{{newsDetail.address}}</div>
        </div>
        <div class="content" v-html="newsDetail.content"></div>
      </div>
    </div>
    <basic-qrcode></basic-qrcode>
    <basic-bottom></basic-bottom>
  </div>
</template>

<script>
import BasicHeader from '@/components/BasicHeader'
import LogoBox from '@/components/LogoBox'
import BasicQrcode from '@/components/BasicQrcode'
import BasicBottom from '@/components/BasicBottom'
import PageHeader from '@/components/PageHeader'
import activityService from '@/services/activityService'

export default {
  components: { BasicHeader, LogoBox, BasicQrcode, BasicBottom, PageHeader },
  data () {
    return {
      newsDetail: null
    }
  },
  methods: {
    async getDetail () {
      try {
        let res = await activityService.info({
          id: this.$route.params.ActivityId
        })
        // console.log('success', res.data.info)
        this.newsDetail = res.data.info
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getDetail()
  }
}
</script>

<style lang="less" scoped>
.article-detail-root{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .article-content-root{
    flex: 1;
    width: 100%;
    .article-box{
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .title{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .date{
        font-size: 14px;
        margin-bottom: 15px;
      }
      .time, .address{
        width: 90%;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        .info-label{
          width: 90px;
        }
        .info-content{
          flex: 1;
        }
      }
    }
  }
}
</style>

<style lang="less">
.article-content-root .article-box img{
  max-width: 100%
}
</style>
