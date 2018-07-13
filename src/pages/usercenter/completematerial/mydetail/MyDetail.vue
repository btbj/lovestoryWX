<template>
  <div class="my-detail-root">
    <user-header>
      <span slot="title">详细资料</span>
    </user-header>
    <div class="detail-content-container">
      <div class="switch-tab-list">
        <div :class="['switch-tab-item', isCurrent('Economic') ? 'selected' : '']"
          @click="changeTab('Economic')">
          <span class="mdi-attach_money item-icon"></span>
          <div class="item-label">经济实力</div>
        </div>
        <div :class="['switch-tab-item', isCurrent('Life') ? 'selected' : '']"
          @click="changeTab('Life')">
          <span class="mdi-local_cafe item-icon"></span>
          <div class="item-label">生活方式</div></div>
        <div :class="['switch-tab-item', isCurrent('Work') ? 'selected' : '']"
          @click="changeTab('Work')">
          <span class="mdi-local_library item-icon"></span>
          <div class="item-label">工作学习</div></div>
        <div :class="['switch-tab-item', isCurrent('Appearance') ? 'selected' : '']"
          @click="changeTab('Appearance')">
          <span class="mdi-accessibility item-icon"></span>
          <div class="item-label">外貌体型</div></div>
        <div :class="['switch-tab-item', isCurrent('Marriage') ? 'selected' : '']"
          @click="changeTab('Marriage')">
          <span class="mdi-wc item-icon"></span>
          <div class="item-label">婚姻观念</div></div>
        <div :class="['switch-tab-item', isCurrent('Hobby') ? 'selected' : '']"
          @click="changeTab('Hobby')">
          <span class="mdi-directions_run item-icon"></span>
          <div class="item-label">兴趣爱好</div></div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'

export default {
  components: { UserHeader },
  methods: {
    isCurrent (type) {
      let rightRoute = this.$route.name === 'UserCenter-CompleteMaterial-MyDetail-' + type
      return rightRoute
    },
    changeTab (type) {
      this.$router.push({name: 'UserCenter-CompleteMaterial-MyDetail-' + type})
    }
  }
}
</script>

<style lang="less" scoped>
.my-detail-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .detail-content-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    .switch-tab-list {
      width: 20%;
      box-sizing: border-box;
      border-right: 2px solid #F7DEE6;
      background-color: #EFEFEF;
      .switch-tab-item {
        width: 100%;
        height: 130px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .item-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .item-label {
          font-size: 14px;
        }
        &:nth-of-type(even) {
          background-color: #F7F9F8;
        }
        &.selected {
          color: #F1356F;
        }
      }
    }
  }
}
</style>
