<template>
  <div class="user-header-root">
    <div class="item-box" @click="goBack">
      <span class="mdi-keyboard_arrow_left icon"></span>
    </div>
    <div class="title-text">
      <slot name="title"></slot>
    </div>
    <menu-btn class="item-box"></menu-btn>
  </div>
</template>

<script>
import MenuBtn from './MenuBtn'
export default {
  components: { MenuBtn },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.user-header-root{
  z-index: 2000;
  width: 100%;
  height: 40px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F1356F;
  color: white;
  .title-text{
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-box{
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
      font-size: 20px;
    }
  }
}
</style>
