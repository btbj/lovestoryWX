<template>
  <div class="my-detail-root">
    <user-header>
      <span slot="title">详细资料</span>
    </user-header>
    <div class="detail-content-container">
      <div class="switch-tab-list">
        <div :class="['switch-tab-item', isCurrent('Economic') ? 'selected' : '']"
          @click="changeTab('Economic')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
          <div class="item-label">经济实力</div>
        </div>
        <div :class="['switch-tab-item', isCurrent('Life') ? 'selected' : '']"
          @click="changeTab('Life')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
          <div class="item-label">生活方式</div></div>
        <div :class="['switch-tab-item', isCurrent('Work') ? 'selected' : '']"
          @click="changeTab('Work')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
          <div class="item-label">工作学习</div></div>
        <div :class="['switch-tab-item', isCurrent('Appearance') ? 'selected' : '']"
          @click="changeTab('Appearance')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
          <div class="item-label">外貌体型</div></div>
        <div :class="['switch-tab-item', isCurrent('Marriage') ? 'selected' : '']"
          @click="changeTab('Marriage')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
          <div class="item-label">婚姻观念</div></div>
        <div :class="['switch-tab-item', isCurrent('Hobby') ? 'selected' : '']"
          @click="changeTab('Hobby')">
          <div class="item-pic" style="background-image: url('https://dummyimage.com/40x40/333/3ff.jpg&text=pic')"></div>
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
      width: 25%;
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
        .item-pic {
          width: 40px;
          height: 40px;
          background-size: cover;
          background-position: center;
          margin-bottom: 10px;
        }
        .item-label {
          font-size: 14px;
        }
        // &:nth-of-type(odd) {
        //   background-color: #EFEFEF;
        // }
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
