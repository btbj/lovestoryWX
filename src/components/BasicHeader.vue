<template>
  <div class="basic-header-root">
    <div class="item-box">
      <span class="icon mdi-person"></span>
    </div>
    <div class="title-text">
      <span class="mdi-phone"></span>
      <span>400-0000-0000</span>
    </div>
    <menu-btn class="item-box"></menu-btn>
  </div>
</template>

<script>
import MenuBtn from './MenuBtn'
export default {
  components: { MenuBtn }

}
</script>

<style lang="less" scoped>
.basic-header-root{
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
  user-select: none;
  -webkit-user-select: none;
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
