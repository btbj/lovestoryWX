<template>
  <div class="findpartner-root">
    <page-header noMenu>
      <span slot="title">寻找对象</span>
    </page-header>
    <search-box v-model="searchData.keyword" @search="getList"></search-box>
    <sort-box v-model="searchData.sort" @sortChanged="getList"></sort-box>
    <findpartner-list :list="userList"></findpartner-list>
    <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
  </div>
</template>

<script>
import userService from '@/services/userService'
import PageHeader from '@/components/PageHeader'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import FindpartnerList from './FindpartnerList'
import PagePagination from '@/components/PagePagination'

export default {
  components: { PageHeader, SearchBox, SortBox, FindpartnerList, PagePagination },
  data () {
    return {
      searchData: {
        keyword: '',
        sort: '',
        attrs: []
      },
      paginationData: {
        current: 1,
        total: 1,
        size: 8
      },
      userList: [
        // {
        //   head_image_url: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        //   name: '雅萱',
        //   age: '34岁',
        //   height: '176',
        //   education: '海龟硕士',
        //   income: '150000'
        // }
      ]
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await userService.search({
          token: this.$store.getters.token,
          keyword: this.searchData.keyword,
          sort: this.searchData.sort,
          attrs: this.searchData.attrs,
          page,
          per_page: this.paginationData.size
        })
        this.userList = res.data.users
        let {count: total, page: current, per_page: size} = res.data
        this.paginationData = {
          current, total, size
        }
        // console.log(res)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    await this.getList()
  }
}
</script>

<style lang="less" scoped>
.findpartner-root{
  flex: 1;
  width: 100%;
}
</style>
