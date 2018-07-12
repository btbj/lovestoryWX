<template>
  <div class="search-box-root">
    <div class="search-box">
      <div class="input-wrapper">
        <input type="text" placeholder="请输入关键词"
          :value="value" @input="handleInput">
      </div>
      <div class="search-btn" @click="StartSearch">
        <div class="btn-label">搜索</div>
      </div>
    </div>
    <div class="hot-keywords">
      <div class="label">热门关键词：</div>
      <div class="words-list">
        <span class="word-item"
          v-for="(item, index) in hotKeywords" :key="index"
          @click="selectKeyword(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      hotKeywords: ['苗条', '幽默', '清纯', '可爱', '时尚', '睿智']
    }
  },
  methods: {
    handleInput (evnet) {
      this.$emit('input', evnet.target.value)
    },
    StartSearch () {
      this.$emit('search')
    },
    selectKeyword (keyword) {
      this.$emit('input', keyword)
      this.$emit('search')
    }
  }

}
</script>

<style lang="less" scoped>
.search-box-root{
  width: 100%;
  box-sizing: border-box;
  padding: 15px 15px 5px;
  .search-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #F1356F;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
    .input-wrapper{
      flex: 1;
      margin-right: 10px;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 5px 10px;;
      background: white;
      input{
        width: 100%;
        color: #606266;
        font-size: 14px;
        box-sizing: border-box;
        background: none;
        border: none;
        outline: 0;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
    }
    .search-btn{
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-label{
        width: 40px;
        text-align-last: justify;
        color: white;
      }
    }
  }
  .hot-keywords{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    .label{
      font-weight: bold;
    }
    .words-list{
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .word-item{
        margin: 0 5px 5px 0;
      }
    }
  }
}

</style>
