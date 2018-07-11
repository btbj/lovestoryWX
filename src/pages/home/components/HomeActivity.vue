<template>
  <div class="home-activity-root">
    <div class="activity-bg-box" style="background-image: url('https://dummyimage.com/365x245/333/3ff.jpg&text=pic')"></div>
    <div class="activity-label-box">Activity</div>
    <div class="activity-intro-box">
      <div class="intro-info-box">
        <div class="title-info">户外踏青交友联谊</div>
        <div class="item-info">
          活动时间：{{activityInfo.time}}
        </div>
        <div class="item-info">
          活动地点：{{activityInfo.address}}
        </div>
        <div class="item-info" style="margin-bottom: 20px">
          <div class="activity-intro">活动介绍: {{activityInfo.introduction}}</div>
        </div>
      </div>
    </div>
    <div class="activity-more-box">
      <div class="more-btn">查看更多 >></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activityInfo: {
        id: null,
        title: '户外踏青交友联谊',
        time: '2017-09-09 14:00 ~ 2017-09-09 17:00',
        address: '成都市青羊区蜀辉路黄苑街563九德会',
        introduction: '世纪佳缘遇见爱，线下活动等你来。这一天又有会员成功牵手了，幸福就是一部的距离，勇敢伸出你的手，或许她(他)会给你一只手！'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-activity-root {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  .activity-bg-box {
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    margin-bottom: 10px;
    background-size: cover;
    background-position: center;
  }
  .activity-label-box {
    font-size: 20px;
    color: grey;
    margin-bottom: 8px;
  }
  .activity-intro-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .intro-info-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      .title-info {
        font-size: 20px;
        color: #D3016F;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .item-info{
        padding-right: 10px;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        text-align: left;
        margin-bottom: 8px;
        .activity-intro{
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
      }
    }
  }
  .activity-more-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .more-btn {
      font-size: 16px;
      color: #F07BA8;
      width: 100px;
    }
  }
}
</style>
