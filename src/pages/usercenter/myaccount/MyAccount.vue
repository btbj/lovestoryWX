<template>
  <div class="my-account-root">
    <div class="account-item-box"  @click="navTo('EditPassword')">
      <div class="item-pic"><img :src="Icons.changePwd" alt=""></div>
      <div class="item-content">
        <div class="item-label">密码修改</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconChangePwd from '../icons/changePwd.png'

export default {
  data () {
    return {
      Icons: {
        changePwd: IconChangePwd
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
.my-account-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  .account-item-box {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    padding: 0 10px;
    border-bottom: 1px solid #EAEAEA;
    .item-pic {
      width: 30px;
      height: 30px;
      // border: 1px solid black;
      box-sizing: border-box;
      margin-right: 20px;
      // background-repeat: no-repeat;
      // background-position: center center;
      // background-size: cover;
      img{
        width: 100%;
      }
    }
    .item-content {
      flex: 1;
      height: 80%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      padding: 0 0 10px 0;
      .item-label {
        flex: 1;
        font-size: 14px;
      }
      .item-icon {
        .icon {
          font-size: 20px;
          color: #D2D2D2;
        }
      }
    }
  }
}
</style>
