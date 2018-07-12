<template>
  <div class="findpartner-list-root">
    <div class="member-item" v-for="(member, index) in list" :key="index">
      <div class="member-box">
        <div class="pic-box" :style="`background-image: url('${member.head_image_url}')`"></div>
        <div class="profile-box">
          <div class="profile-name">{{member.nickname}}</div>
          <div class="profile-item">年龄：{{member.age}}</div>
          <div class="profile-item">身高：{{member.height}}</div>
          <div class="profile-item">学历：{{member.education}}</div>
          <div class="profile-btn">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']

}
</script>

<style lang="less" scoped>
.findpartner-list-root{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 15px 10px;
  .member-item{
    flex-basis: 50%;
    box-sizing: border-box;
    padding: 5px 5px 20px;
    .member-box{
      // border: 1px solid #ddd;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pic-box {
        width: 40%;
        height: 120px;
        border: 1px solid black;
        box-sizing: border-box;
        margin-right: 3px;
        background-size: cover;
        background-position: center;
      }
      .profile-box {
        width: 50%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 3px;
        .profile-name {
          font-size: 14px;
          color: #F07BA8;
          margin-bottom: 8px;
        }
        .profile-item {
          font-size: 12px;
          margin-bottom: 3px;
        }
        .profile-btn {
          margin-top: 8px;
          width: 95%;
          height: 25px;
          color: white;
          background-color: #F07BA8;
          text-align: center;
          line-height: 25px;
          border-radius: 3px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
