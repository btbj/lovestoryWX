<template>
  <div class="home-news-info-root">
    <div class="news-info-header">
      <div class="news-info-label">新闻资讯</div>
      <div class="news-info-tab">
        <div :class="['tab-item', type === 'company' ? 'selected' : '']" @click="getNews('company')">
          <div class="tab-item-text">公司新闻</div>
          <div class="tab-arrow"></div>
        </div>
        <div :class="['tab-item', type === 'industry' ? 'selected' : '']" @click="getNews('industry')">
          <div class="tab-item-text">行业资讯</div>
          <div class="tab-arrow"></div>
        </div>
      </div>
    </div>
     <div class="news-info-box">
      <div class="news-info-content">
        <div class="info-item" v-for="(news, index) in newsList"
             :key="index">
          <div class="info-pic" style="background-image: url('https://dummyimage.com/130x100/333/3ff.jpg&text=pic')">
          </div>
          <div class="info-words">
            <div class="info-title">{{news.title}}</div>
            <div class="info-content">{{news.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'company',
      newsList: [
        {
          title: '今年最流行婚礼，看完好想结婚',
          content: '每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的，忽闪的长睫毛、精致的妆容、长长的蕾丝裙'
        }, {
          title: '今年最流行婚礼，看完好想结婚',
          content: '每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的，忽闪的长睫毛、精致的妆容、长长的蕾丝裙'
        }, {
          title: '今年最流行婚礼，看完好想结婚',
          content: '每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的，忽闪的长睫毛、精致的妆容、长长的蕾丝裙'
        }
      ]
    }
  },
  methods: {
    getNews (type) {
      this.type = type
    }
  }

}
</script>

<style lang="less" scoped>
.home-news-info-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 10px;
  margin-bottom: 30px;
  .news-info-header {
    width: 100%;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    .news-info-label {
      padding: 5px 0;
      border-bottom: 1px solid #FF70A2;
      font-size: 16px;
      font-weight: bold;
      box-sizing: border-box;
      margin-right: 80px;
    }
    .news-info-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .tab-item {
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 34px;
        line-height: 34px;
        &:last-child {
          margin-right: 0;
        }
        .tab-item-text {
          padding: 0;
          font-size: 14px;
        }
        .tab-arrow {
          display: none;
          bottom: 0;
          margin: auto;
          margin-top: -5px;
          width:0;
          height:0;
          border-left:4px solid transparent;
          border-right:4px solid transparent;
          border-bottom:4px solid #FF70A2;
        }
        &.selected {
          color: #FF70A2;
          border-color: #FF70A2;
          .tab-arrow {
            display: block;
          }
        }
      }
    }
  }
  .news-info-box {
    padding: 10px 0 5px 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    .news-info-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      box-sizing: border-box;
      .info-item {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgrey;
        padding: 5px 0;
        .info-pic {
          width: 120px;
          height: 90px;
          box-sizing: border-box;
          margin-right: 10px;
          overflow: hidden;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .info-words {
          padding: 6px 0;
          box-sizing: border-box;
          flex: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          .info-title {
            font-size: 14px;
            margin-bottom: 8px;
          }
          .info-content {
            flex: 1;
            font-size: 12px;
            text-align: left;
            color: grey;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
