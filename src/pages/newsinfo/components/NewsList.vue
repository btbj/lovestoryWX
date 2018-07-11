<template>
  <div class="news-list-root">
    <div class="news-item" v-for="(news, index) in list" :key="index">
      <div class="news-box" @click="checkArticle(news)">
        <div class="news-img" :style="`background-image: url('${news.image_url}')`"></div>
        <div class="news-info">
          <div class="title">{{news.title}}</div>
          <div class="content">{{news.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    checkArticle (news) {
      this.$router.push({name: 'ArticleDetail', params: {'ArticleId': news.id}})
    }
  }

}
</script>

<style lang="less" scoped>
.news-list-root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .news-item{
    width: 100%;
    margin-bottom: 15px;
    .news-box{
      width: 100%;
      height: 110px;
      border: 1px solid #ddd;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 10px;
      .news-img {
        width: 120px;
        height: 100%;
        box-sizing: border-box;
        margin-right: 10px;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .news-info{
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      color: black;
      .title{
        font-size: 16px;
        font-weight: bold;
        margin: 5px 0;
      }
      .content {
        flex: 1;
        font-size: 12px;
        text-align: left;
        color: grey;
        display: -webkit-box;
        height: 60px;
        line-height: 15px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
