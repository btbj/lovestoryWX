<template>
  <div class="member-card-container">
    <div class="member-pic-box-container">
      <div class="member-pic-box" v-for="(member, index) in list"
           :key="index">
        <div class="member-pic" :style="`background-image: url(${member.head_image_url})`">
        </div>
        <div class="word">
          <div class="first-row">{{member.nickname}}</div>
          <div><span>{{member.age}}岁</span> <span v-if="member.province" class="margin-left: 10px;">{{member.province}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {

    }
  },
  methods: {
    // checkUser (member) {
    //   this.$router.push({name: 'userinfo', params: {'id': member.id}})
    // }
  }
}
</script>

<style lang="less">
.member-card-container {
  width: 100%;
  box-sizing: border-box;
  .member-pic-box-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 20px 5px;
    margin-bottom: 10px;
    .member-pic-box {
      flex-basis: 33%;
      width: 110px;
      height: 180px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;
      .member-pic {
        width: 80%;
        height: 130px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
      }
      .word {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        .first-row {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
