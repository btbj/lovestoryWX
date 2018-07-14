<template>
  <div class="self-info-root">
    <mt-swipe :auto="0" class="user-pic-box">
      <mt-swipe-item class="user-pic-item">
        <div class="user-pic-img" :style="`background-image: url('${userInfo.head_image_url}');`"></div>
      </mt-swipe-item>
      <mt-swipe-item class="user-pic-item" v-for="(pic, index) in albumList" :key="index">
        <div class="user-pic-img" :style="`background-image: url('${pic.url}');`"></div>
      </mt-swipe-item>
    </mt-swipe>
    <!-- <div class="user-avatar-box">
      <img :src="userInfo.head_image_url" alt="pic">
    </div> -->
    <div class="user-info-box">
      <div class="nickname">{{userInfo.nickname}}</div>
      <div class="basic-info">{{userInfo.age}}岁，{{userInfo.sex}}，{{userInfo.province}}</div>
      <div class="basic-info-box">
        <div class="info-item">
          <div class="label">学历</div>：
          <div class="content">{{userInfo.education || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">身高</div>：
          <div class="content">{{userInfo.height ?  userInfo.height + 'cm' : '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">购车</div>：
          <div class="content">{{userInfo.car_status || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">月薪</div>：
          <div class="content">{{userInfo.month_pay || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">住房</div>：
          <div class="content">{{userInfo.car_status || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">体重</div>：
          <div class="content">{{userInfo.weight || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">星座</div>：
          <div class="content">{{userInfo.sign || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">民族</div>：
          <div class="content">{{userInfo.nation || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">属相</div>：
          <div class="content">{{userInfo.zodiac || '——'}}</div>
        </div>
        <div class="info-item">
          <div class="label">婚姻状况</div>：
          <div class="content">{{userInfo.marital_status || '——'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info', 'albumList'],
  computed: {
    userInfo () {
      return this.info.info
    }
  }
}
</script>

<style lang="less" scoped>
.self-info-root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .user-avatar-box{
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #ddd;
    margin: 15px 20px;
    img{
      max-width: 100%;
    }
  }
  .user-pic-box{
    padding: 10px;
    box-sizing: border-box;;
    height: 400px;
    width: 100%;
  }
  .user-info-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    border-top: 1px solid #F1356F;
    .nickname{
      width: 100%;
      font-size: 20px;
      margin-bottom: 15px;
    }
    .basic-info{
      width: 100%;
      margin-bottom: 15px;
      font-size: 14px;
    }
    .basic-info-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      font-size: 12px;
      .info-item{
        flex-basis: 50%;
        display: flex;
        flex-direction: row;
        // margin-bottom: 5px;
        .label{
          width: 50px;
          text-align-last: justify;
          text-align: justify;
        }
        .label:after{
          content: " ";
          display: inline-block;
          width: 100%;
        }
        .content{
          margin-left: 5px;
          color: #444;
        }
      }
    }
  }
}
</style>

<style lang="less">
.user-pic-box{
  .user-pic-item{
    text-align: center;
    .user-pic-img{
      height: 100%;
      margin: auto;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
}
</style>
