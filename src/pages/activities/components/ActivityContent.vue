<template>
  <div class="news-info-page-root">
    <page-header noMenu>
      <span slot="title">活动互动</span>
    </page-header>
    <div class="news-info-content-box">
      <activity-list :list="newsList"></activity-list>
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PagePagination from '@/components/PagePagination'
import ActivityList from './ActivityList'
import activityService from '@/services/activityService'

export default {
  components: { PageHeader, PagePagination, ActivityList },
  data () {
    return {
      newsList: [],
      paginationData: {
        current: 1,
        total: 1,
        size: 4
      }
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await activityService.activities({
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.newsList = res.data.activities
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
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  .news-info-content-box {
    width: 100%;
    // min-height: 500px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>
