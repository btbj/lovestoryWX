<template>
  <div class="home-service-root">
    <div class="service-bg-box" style="background-image: url('https://dummyimage.com/365x300/333/3ff.jpg&text=pic')"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home-service-root {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 30px;
  .service-bg-box {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
  }
}

</style>
