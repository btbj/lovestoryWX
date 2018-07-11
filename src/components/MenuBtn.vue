<template>
  <div class="menu-btn-root">
    <div class="menu-btn-box" @click="toggleBox">
      <span class="icon mdi-menu"></span>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="right">
      <ul class="popbox menu-list">
        <li :class="['menu-item', routeName === item.routeName ? 'selected' : '']"
          v-for="(item, index) in menuList" :key="index"
          @click="navTo(item.routeName)">
          {{item.name}}
        </li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible: false,
      menuList: [
        {name: '首页', routeName: 'Home'},
        {name: '关于我们', routeName: 'Aboutus'},
        {name: '新闻资讯', routeName: 'NewsInfo'},
        {name: '服务介绍', routeName: 'ServiceIntro'},
        {name: '晒幸福', routeName: 'LoveStory'},
        {name: '寻找对象'},
        {name: '定制服务'},
        {name: '活动互动'},
        {name: '我要相亲', routeName: 'Register'}
      ]
    }
  },
  methods: {
    toggleBox () {
      this.popupVisible = !this.popupVisible
    },
    navTo (destRouteName) {
      if (destRouteName && destRouteName !== this.routeName) {
        this.$router.push({name: destRouteName})
      }
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  }
}
</script>

<style lang="less" scoped>
.menu-btn-root{
  width: 100%;
  height: 100%;
  .menu-btn-box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon{
    font-size: 20px;
  }
  .popbox{
    height: 100vh;
    width: 150px;
    background: #F1356F;
  }
  .menu-list{
    box-sizing: border-box;
    padding: 20px 15px;
    .menu-item{
      margin-bottom: 15px;
      list-style: none;
      &.selected::before{
        content: '>'
      }
    }
  }
}
</style>
