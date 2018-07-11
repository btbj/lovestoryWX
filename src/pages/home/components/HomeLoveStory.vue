<template>
  <div class="home-story-root">
    <div class="story-title">
      <div class="big-words-title">就在你身边，他们相爱了</div>
      <div class="small-words-title">立即加入会员，缘分就在眼前</div>
    </div>
    <div class="first-row" v-if="storyList.length >= 1">
      <div class="first-row-pic" :style="`background-image: url('${firstRow.image_url}')`">
        <div class="first-pic-logo">
          <div class="first-logo-words index-story-title">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="second-row" v-if="storyList.length >= 3">
      <div class="second-row-pic" v-for="(item, index) in secondRow" :key="index"
        :style="`background-image: url('${item.image_url}')`">
        <div class="second-pic-logo">
          <div class="second-logo-words index-story-title">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="story-more-box">
      <div class="more-btn" @click="navTo('LoveStory')">查看更多 >></div>
    </div>
  </div>
</template>

<script>
import articleService from '@/services/articleService'

export default {
  data () {
    return {
      storyList: [ ]
    }
  },
  methods: {
    navTo (destRouteName) {
      this.$router.push({name: destRouteName})
    },
    checkDetail (story) {
      // this.$router.push({name: 'newsinfo', params: {'id': index}})
      this.$router.push({name: 'lovestory-detail', params: {'id': story.id}})
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 6,
          page,
          per_page: 3
        })
        console.log('success', res)
        this.storyList = res.data.articles
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    firstRow () {
      return this.storyList[0]
    },
    secondRow () {
      let array = []
      if (this.storyList.length >= 3) {
        array = this.storyList.filter((item, index) => { return index >= 1 })
      }
      return array
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.home-story-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  margin-bottom: 20px;
  .story-title {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .big-words-title {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .small-words-title {
      font-size: 14px;
    }
  }
  .first-row {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .first-row-pic {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .first-pic-logo {
        border-bottom: 30px solid #FD6F9F;
        border-left: 30px solid transparent;
        width: 90px;
        .first-logo-words {
          position: relative;
          top: 25px;
          color: white;
          user-select: none;
          -webkit-user-select: none;
          text-align: center;
        }
        .index-story-title{
          width: 90px;
        }
      }
    }
  }
  .second-row {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .second-row-pic {
      width: 49%;
      height: 140px;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .second-pic-logo {
        border-bottom: 25px solid #FD6F9F;
        border-left: 25px solid transparent;
        width: 70px;
        display: flex;
        .second-logo-words {
          position: relative;
          top: 22px;
          color: white;
          user-select: none;
          -webkit-user-select: none;
          text-align: center;
        }
        .index-story-title{
          width: 70px;
        }
      }
    }
  }
  .story-more-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .more-btn {
      width: 100px;
      font-size: 16px;
      color: #F07BA8;
    }
  }
}
</style>
