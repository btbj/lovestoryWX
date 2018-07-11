<template>
  <div class="area-picker-root wrapper">
    <select size="small" class="plain-input" v-model="area" placeholder="请选择">
      <option
        v-for="(item, index) in AreaList" :key="index"
        :label="item" :value="item">
        {{item}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      AreaList: ['宁波市区', '海曙区', '江东区', '江北区', '北仑区', '镇海区', '鄞州区', '象山区', '宁海县', '余姚市', '慈溪市', '奉化市']
    }
  },
  computed: {
    area: {
      get: function () {
        return this.value ? this.value[0] : ''
      },
      set: function (newArea) {
        this.$emit('input', [newArea, newArea])
      }
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
  select{
    padding: 5px 15px;
    &{
      height: 40px;
    }
  }
}
</style>
