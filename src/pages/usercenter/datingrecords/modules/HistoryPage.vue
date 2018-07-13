<template>
  <div class="history-page-root">
    <user-header>
      <span slot="title">我看过谁</span>
    </user-header>
    <div class="member-cards-container">
      <member-card :list="memberList"></member-card>
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UserHeader from '@/components/UserHeader'
import MemberCard from '../components/MemberCard'
import PagePagination from '@/components/PagePagination'

export default {
  components: { UserHeader, MemberCard, PagePagination },
  data () {
    return {
      paginationData: {
        current: 1,
        total: 1,
        size: 15
      },
      memberList: []
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await userService.seensUsers({
          token: this.$store.getters.token,
          page,
          per_page: this.paginationData.size
        })
        // console.log('success', res)
        this.memberList = res.data.users
        let {count: total, page: current, per_page: size} = res.data
        this.paginationData = {
          current, total, size
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.history-page-root {
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
