<template>
  <div class="love-story-page-root">
    <page-header noMenu>
      <span slot="title">晒幸福</span>
    </page-header>
    <div class="love-story-content-box">
      <lovestory-list :list="storyList"></lovestory-list>
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import articleService from '@/services/articleService'
import PageHeader from '@/components/PageHeader'
import PagePagination from '@/components/PagePagination'
import LovestoryList from './LovestoryList'

export default {
  components: { PageHeader, PagePagination, LovestoryList },
  data () {
    return {
      paginationData: {
        current: 1,
        total: 1,
        size: 5
      },
      storyList: [ ]
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 6,
          page,
          per_page: this.paginationData.size
        })
        // console.log('success', res)
        this.storyList = res.data.articles
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
    this.getList()
  }

}
</script>

<style lang="less" scoped>
.love-story-page-root {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  .love-story-content-box {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 14px;
    color: grey;
  }
}
</style>
