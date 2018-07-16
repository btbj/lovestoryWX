<template>
  <div class="complete-material-root">
    <div class="material-item-box" @click="navTo('MyBasic')">
      <div class="item-pic"><img :src="Icons.Info" alt=""></div>
      <div class="item-content">
        <div class="item-label">基本资料</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="material-item-box" @click="navTo('MyIntro')">
      <div class="item-pic"><img :src="Icons.MonoLogue" alt=""></div>
      <div class="item-content">
        <div class="item-label">内心独白</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="material-item-box" @click="navTo('MyPics')">
      <div class="item-pic"><img :src="Icons.Pics" alt=""></div>
      <div class="item-content">
        <div class="item-label">我的相册</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="material-item-box" @click="navTo('MyDetail')">
      <div class="item-pic"><img :src="Icons.Detail" alt=""></div>
      <div class="item-content">
        <div class="item-label">详细资料</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
    <div class="material-item-box" @click="navTo('MyOption')">
      <div class="item-pic"><img :src="Icons.Option" alt=""></div>
      <div class="item-content">
        <div class="item-label">择偶条件</div>
        <div class="item-icon">
          <span class="mdi-keyboard_arrow_right icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconInfo from '../icons/userInfo.png'
import IconMonologue from '../icons/userMonologue.png'
import IconPics from '../icons/userPics.png'
import IconDetail from '../icons/userDetail.png'
import IconOption from '../icons/userOption.png'

export default {
  data () {
    return {
      Icons: {
        Info: IconInfo,
        MonoLogue: IconMonologue,
        Pics: IconPics,
        Detail: IconDetail,
        Option: IconOption
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
.complete-material-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  .material-item-box {
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
    &:last-child {
      margin-bottom: 100px;
    }
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
