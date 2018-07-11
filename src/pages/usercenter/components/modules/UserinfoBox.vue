<template>
  <div class="user-info-container">
    <div class="user-info-box">
      <div class="user-avatar" style="background-image: url('https://dummyimage.com/70x70/333/3ff.jpg&text=pic')"></div>
      <div class="user-nickname">aa</div>
      <div class="user-phone">15258257571</div>
      <div class="user-address">浙江 宁波</div>
      <div class="user-status">33岁，离异， 公务员</div>
      <div class="user-fans-row">
        <div class="item">粉丝  <span class="num fans">12</span></div>
        <div class="item">关注  <span class="num follow">22</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user-info-container {
  box-sizing: border-box;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  .user-info-box {
    width: 60%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user-avatar, .user-nickname, .user-phone, .user-address{
      margin-bottom: 5px;
    }
    .user-status, .user-nickname, .user-phone, .user-address, .user-fans-row{
      color: #444;
      font-size: 14px;
    }
    .user-avatar{
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: 1px solid #ddd;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .user-fans-row{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 20px;
      .item{
        display: flex;
        flex-direction: row;
        align-content: center;
        .num{
          margin-left: 5px;
          font-size: 18px;
        }
        .fans{
          color: #3498db;
        }
        .follow{
          color: #e74c3c;
        }
      }
    }
  }
}
</style>
