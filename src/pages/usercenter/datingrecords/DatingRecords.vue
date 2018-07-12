<template>
  <div class="dating-records-root">
    <div class="records-type-box" @click="navTo('VisitorPage')">
      <div class="type-pic"><img :src="Icons.Visitors" alt=""></div>
      <div class="type-content">
        <div class="type-label">谁看过我</div>
        <div class="type-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="records-type-box"  @click="navTo('HistoryPage')">
      <div class="type-pic"><img :src="Icons.History" alt=""></div>
      <div class="type-content">
        <div class="type-label">我看过谁</div>
        <div class="type-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="records-type-box"  @click="navTo('FollowerPage')">
      <div class="type-pic"><img :src="Icons.Fans" alt=""></div>
      <div class="type-content">
        <div class="type-label">谁关注我</div>
        <div class="type-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="records-type-box"  @click="navTo('FollowingPage')">
      <div class="type-pic"><img :src="Icons.Follows" alt=""></div>
      <div class="type-content">
        <div class="type-label">我关注谁</div>
        <div class="type-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconFans from '../icons/recordsFans.png'
import IconVisitors from '../icons/recordsVisitor.png'
import IconHistory from '../icons/recordsHistory.png'
import IconFollows from '../icons/recordsFollows.png'

export default {
  data () {
    return {
      Icons: {
        Fans: IconFans,
        Follows: IconFollows,
        Visitors: IconVisitors,
        History: IconHistory
      }
    }
  },
  methods: {
    navTo (destName) {
      this.$router.push({name: destName})
    }
  }
}
</script>

<style lang="less" scoped>
.dating-records-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .records-type-box {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    padding: 0 10px;
    &:last-child {
      margin-bottom: 100px;
    }
    .type-pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-sizing: border-box;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      img{
        max-width: 100%;
      }
    }
    .type-content {
      flex: 1;
      height: 80%;
      border-bottom: 1px solid #FCDEE4;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      padding: 0 0 10px 0;
      .type-label {
        flex: 1;
        font-size: 14px;
      }
      .type-icon {
        .icon {
          font-size: 20px;
          color: #D2D2D2;
        }
      }
    }
  }
}

</style>
