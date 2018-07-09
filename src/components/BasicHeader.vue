<template>
  <div class="basic-header-root">
    <div class="item-box">
      <span class="icon mdi-person"></span>
    </div>
    <div class="title-text">
      <span class="mdi-phone"></span>
      <span>400-0000-0000</span>
    </div>
    <div class="item-box">
      <span class="icon mdi-menu"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.basic-header-root{
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
