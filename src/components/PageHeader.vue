<template>
  <div class="page-header-root">
    <div class="header-box">
      <div class="btn-wrapper">
        <div class="back-btn" @click="goBack" v-if="!noBack">
          <span class="mdi-keyboard_arrow_left icon"></span>
          <span class="back-words">返回</span>
        </div>
      </div>
      <div class="header-title">
        <slot name="title"></slot>
      </div>
      <div class="more-btn">
        <div class="mdi-keyboard_arrow_up icon" @click="isMore = !isMore" v-if="!noMenu && isMore"></div>
        <div class="mdi-keyboard_arrow_down icon" @click="isMore = !isMore" v-if="!noMenu && !isMore"></div>
      </div>
    </div>
    <div class="more-nav-box" v-if="!noMenu && isMore" @click="isMore = !isMore">
      <slot name="nav-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noMenu: {
      type: Boolean
    },
    noBack: {
      type: Boolean
    }
  },
  data () {
    return {
      isMore: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>

<style lang="less" scoped>
.page-header-root {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  .header-box {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #F1356F;
    .btn-wrapper {
      flex: 0.3;
      height: 100%;
      .back-btn{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .back-words {
          font-size: 16px;
          color: white;
        }
      }
      .back-btn:active {
        background-color: #c20450;;
      }
    }

    .header-title {
      flex: 1;
      box-sizing: border-box;
      line-height: 40px;
      color: white;
      text-align: center;
    }
    .more-btn {
      flex: 0.2;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
      margin-left: 10px;
    }
    .icon{
      font-size: 24px;
      color: white;
    }
  }
  .more-nav-box {
    position: absolute;
    top: 40px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    * {
      width: 100%;
      height: 45px;
      background-color: #F4F4F4;
      border-bottom: 1px solid #EBEBEB;
      text-align: center;
      line-height: 45px;
      font-size: 14px;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
