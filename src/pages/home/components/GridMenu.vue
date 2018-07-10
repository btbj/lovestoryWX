<template>
  <div class="grid-menu-root">
    <div class="grid-menu-list">
      <div class="menu-item" v-for="(item, index) in menuList" :key="index"
        @click="navTo(item.routeName)">
        <div class="menu-icon-box" :style="`background-color: ${item.color};`">
          <span :class="['icon', item.icon]"></span>
        </div>
        <div class="menu-text">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {name: '关于我们', color: '#ee96c4', icon: 'mdi-description', routeName: 'Aboutus'},
        {name: '新闻资讯', color: '#e9be49', icon: 'mdi-language', routeName: 'NewsInfo'},
        {name: '服务介绍', color: '#f3aae5', icon: 'mdi-description', routeName: 'ServiceIntro'},
        {name: '晒幸福', color: '#e09192', icon: 'mdi-language', routeName: 'LoveStory'},
        {name: '寻找对象', color: '#61bfeb', icon: 'mdi-description'},
        {name: '定制服务', color: '#eed67b', icon: 'mdi-language'},
        {name: '活动互动', color: '#eca368', icon: 'mdi-description'},
        {name: '我要相亲', color: '#66d6b2', icon: 'mdi-language'}
      ]
    }
  },
  methods: {
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
.grid-menu-root{
  width: 100%;
  margin-bottom: 20px;
  .grid-menu-list{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
    .menu-item{
      flex-basis: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 5px;
      .menu-icon-box{
        background: gray;
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        .icon{
          font-size: 25px;
        }
      }
      .menu-text{
        font-size: 14px;
      }
    }
  }
}
</style>
