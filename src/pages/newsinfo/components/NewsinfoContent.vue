<template>
  <div class="news-info-page-root">
    <page-header>
      <span slot="title">新闻资讯</span>
      <span slot="nav-item" @click="changeType('notification')">通知公告</span>
      <span slot="nav-item" @click="changeType('companynews')">公司新闻</span>
      <span slot="nav-item" @click="changeType('industrynews')">行业资讯</span>
    </page-header>
    <div class="news-info-content-box">
      {{newsList}}
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PagePagination from '@/components/PagePagination'
import articleService from '@/services/articleService'

export default {
  components: { PageHeader, PagePagination },
  data () {
    return {
      type: 'notification',
      newsList: [],
      typeIndex: {
        'notification': 1,
        'companynews': 2,
        'industrynews': 3
      },
      paginationData: {
        current: 1,
        total: 1,
        size: 4
      }
    }
  },
  methods: {
    changeType (type) {
      console.log(type)
      this.type = type
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: this.typeIndex[this.type],
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.newsList = res.data.articles
        let {count: total, page: current, per_page: size} = res.data
        this.paginationData = {
          current, total, size
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getList(1)
  }

}
</script>

<style lang="less" scoped>
.news-info-page-root {
  width: 100%;
  box-sizing: border-box;
  .news-info-content-box {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>
