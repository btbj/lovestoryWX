<template>
  <div class="following-page-root">
    <user-header>
      <span slot="title">我关注谁</span>
    </user-header>
    <div class="member-cards-container">
      <member-card :list="memberList"></member-card>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import MemberCard from '../components/MemberCard'

export default {
  components: { UserHeader, MemberCard },
  data () {
    return {
      memberList: [
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾新区'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        },
        {
          head_image_url: 'https://dummyimage.com/82x140/333/3ff.jpg&text=pic',
          nickname: '雅萱',
          age: '12',
          province: '杭州湾'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.following-page-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .member-cards-container {
    width: 100%;
    box-sizing: border-box;
  }
}

</style>
