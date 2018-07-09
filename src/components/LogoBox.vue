<template>
  <div class="logo-box-root">
    <div class="logo-box" :style="`background-image: url('${siteLogo}');`"></div>
    <div class="slogan-box">
      <div> 向会员提供，高品质，高效率 </div>
      <div class="red-slogan-text"> 高端相亲交友服务平台 </div>
    </div>
  </div>
</template>

<script>
import imageService from '@/services/imageService'

export default {
  computed: {
    siteLogo () {
      return imageService.siteLogo
    }
  }
}
</script>

<style lang="less" scoped>
.logo-box-root{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  .logo-box{
    flex: 1;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .slogan-box{
    flex: 1;
    height: 50%;
    min-width: 160px;
    margin-left: 10px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-left: 1px solid #ddd;
    .red-slogan-text{
      margin-top: 5px;
      color: #F1356F;
      font-size: 15px;
    }
  }
}
</style>
