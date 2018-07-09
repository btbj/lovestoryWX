<template>
  <div class="home-story-root">
    <div class="story-title">
      <div class="big-words-title">就在你身边，他们相爱了</div>
      <div class="small-words-title">立即加入会员，缘分就在眼前</div>
    </div>
    <div class="first-row">
      <div class="first-row-pic" style="background-image: url('https://dummyimage.com/365x200/333/3ff.jpg&text=pic')">
        <div class="first-pic-logo">
          <div class="first-logo-words index-story-title">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="second-row-pic" style="background-image: url('https://dummyimage.com/178x120/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words index-story-title">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic" style="background-image: url('https://dummyimage.com/178x140/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words index-story-title">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="story-more-box">
      <div class="more-btn">查看更多 >></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home-story-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px;
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
    .more-btn {
      font-size: 16px;
      color: #F07BA8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
