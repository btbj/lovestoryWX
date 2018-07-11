<template>
  <div class="date-picker-root wrapper">
    <input class="plain-input picker-input" type="date" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleInput (evnet) {
      this.$emit('input', evnet.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  .picker-input{
    flex: 1;
    display: flex;
    align-items: center;
    color: #606266;
    font-size: 14px;
    box-sizing: border-box;
    background: none;
    border: none;
    outline: 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  input{
    padding: 5px 15px;
    &{
      height: 40px;
    }
  }
}
</style>
