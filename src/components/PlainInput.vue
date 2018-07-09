<template>
  <div class="wrapper">
    <input class="plain-input" :style="`width: ${width};`"
      v-if="type !== 'textarea'"
      :disabled="disabled"
      :maxlength="maxlength"
      :type="type" :placeholder="placeholder"
      :value="value" @input="handleInput">
    <textarea class="plain-input" :style="`height: ${height}; width: ${width};`"
      v-else
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    'value': {
      type: String,
      required: true
    },
    'type': {
      type: String,
      default: 'text'
    },
    'placeholder': {
      type: String,
      default: ''
    },
    'disabled': {
      type: Boolean
    },
    'height': {
      type: String,
      default: '150px'
    },
    'width': {
      type: String,
      default: '100%'
    },
    'maxlength': {
      type: String,
      default: 'none'
    }
  },
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
  .plain-input{
    flex: 1;
    display: block;
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
  textarea{
    resize: none;
    &{
      height: 150px;
      padding: 10px 15px;
    }
  }
}
</style>
