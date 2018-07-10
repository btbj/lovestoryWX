<template>
  <div class="basic-bottom-root">
    <div class="bottom-box">
      <div class="bottom-copyright">
        版权所有© 2018
      </div>
      <div class="site-register-info">
        相亲相爱婚介网
      </div>
      <div class="bottom-technical-support">
        技术支持：谷多网络
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.basic-bottom-root{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F1356F;
  color: white;
  .bottom-box {
    width: 95%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 14px;
    .bottom-copyright {
      text-align: left;
      margin-right: 5px;
    }
    .site-register-info{
      flex: 1;
      text-align: left;
    }
    .bottom-technical-support {
      text-align: right;
    }
  }
}
</style>
