<template>
  <div class="user-center-root">
    <userinfo-box></userinfo-box>
    <div class="detail-info-box">
      <div class="switch-tab-list">
        <div :class="['switch-tab-item', isCurrent('DatingRecords') ? 'selected' : '']"
          @click="changeTab('DatingRecords')">
          <div class="tab-label">
            <span class="mdi-people icon"></span>&nbsp;
            <span>交友记录</span>
          </div>
        </div>
        <div :class="['switch-tab-item', isCurrent('CompleteMaterial') ? 'selected' : '']"
          @click="changeTab('CompleteMaterial')">
          <div class="tab-label">
            <span class="mdi-assignment icon"></span>&nbsp;
            <span>完善资料</span>
          </div>
        </div>
        <div :class="['switch-tab-item', isCurrent('MyAccount') ? 'selected' : '']"
          @click="changeTab('MyAccount')">
          <div class="tab-label" style="border: none">
            <span class="mdi-settings icon"></span>&nbsp;
            <span>我的帐号</span>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserinfoBox from './modules/UserinfoBox'

export default {
  components: { UserinfoBox },
  methods: {
    isCurrent (type) {
      let rightRoute = this.$route.name === 'UserCenter-' + type
      return rightRoute
    },
    changeTab (type) {
      this.$router.replace({name: 'UserCenter-' + type})
    }
  }
}
</script>

<style lang="less" scoped>
.user-center-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .detail-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    .switch-tab-list{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #EDEDED;
      margin-bottom: 20px;
      .switch-tab-item{
        height: 40px;
        width: 33%;
        font-size: 14px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        &.selected{
          border-bottom: 1px solid #F1356F;
        }
        .tab-label {
          width: 100%;
          border-right: 1px solid #EDEDED;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            font-size: 20px;
          }
        }
      }
    }

  }
}
</style>
