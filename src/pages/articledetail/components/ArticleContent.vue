<template>
  <div class="article-content-root">
    <page-header noMenu>
      <span slot="title">文章详情</span>
    </page-header>
    <div class="article-box" v-if="newsDetail">
      <div class="title">{{newsDetail.title}}</div>
      <div class="date" v-if="newsDetail.created_date">{{newsDetail.created_date}}</div>
      <div class="content" v-html="newsDetail.content"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import articleService from '@/services/articleService'

export default {
  components: { PageHeader },
  data () {
    return {
      newsDetail: null
    }
  },
  methods: {
    async getDetail () {
      try {
        let res = await articleService.info({
          id: this.$route.params.ArticleId
        })
        console.log('success', res.data.info.created_date)
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
      margin-bottom: 5px;
    }
  }
}
</style>

<style lang="less">
.article-content-root .article-box img{
  max-width: 100%
}
</style>
