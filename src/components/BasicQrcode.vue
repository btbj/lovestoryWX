<template>
  <div class="basic-qrcode-root">
    <div class="qrcode-container">
      <div class="qrcode-pic" style="background-image: url('https://dummyimage.com/130x130/333/3ff.jpg&text=pic')"> </div>
      <div class="qrcode-label">微信公众号</div>
    </div>
    <div class="qrcode-container">
      <div class="qrcode-pic" style="background-image: url('https://dummyimage.com/130x130/333/3ff.jpg&text=pic')"> </div>
      <div class="qrcode-label">官方微博</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.basic-qrcode-root {
  width: 100%;
  border-top: 2px solid #F1356F;
  background-color: #F5F5F5;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  .qrcode-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    .qrcode-pic {
      width: 110px;
      height: 110px;
      box-sizing: border-box;
      margin-bottom: 8px;
      overflow: hidden;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .qrcode-label {
      font-size: 14px;
    }
  }
}
</style>
