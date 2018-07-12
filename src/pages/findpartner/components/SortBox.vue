<template>
  <div class="sort-box-root">
    <div :class="['sorting-item', isCurrent('') ? 'selected' : '']"
      @click="selectType('')">综合排序</div>
    <div class="divide-line"></div>
    <div :class="['sorting-item', isCurrent('time') ? 'selected' : '']"
      @click="selectType('time')">登录时间
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    isCurrent (type) {
      return this.value === type
    },
    selectType (type) {
      this.$emit('input', type)
      this.$emit('sortChanged')
    }
  }
}
</script>

<style lang="less" scoped>
.sort-box-root{
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  // margin-bottom: 15px;
  .divide-line{
    width: 1px;
    height: 35px;
    background: #ddd;
  }
  .sorting-item{
    flex: 1;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: gray;
    &.selected{
      color: #F1356F;
    }
  }
}
</style>
