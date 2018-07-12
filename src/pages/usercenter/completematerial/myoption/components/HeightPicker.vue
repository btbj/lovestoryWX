<template>
  <div class="height-picker-root">
    <plain-picker class="height-picker" v-model="min" :options="minList"></plain-picker>
    -&nbsp;&nbsp;&nbsp;
    <plain-picker class="height-picker" v-model="max" :options="maxList"></plain-picker>
  </div>
</template>

<script>
import PlainPicker from '@/components/PlainPicker'

export default {
  components: { PlainPicker },
  props: ['value'],
  data () {
    return {
    }
  },
  methods: {
    getMaxList (min = this.min) {
      if (min) {
        let array = []
        let lowLimit = min || 140
        for (let height = lowLimit; height < 250; height++) {
          array.push(height)
        }
        return array
      } else {
        return null
      }
    }
  },
  computed: {
    minList () {
      let array = []
      for (let height = 140; height < 250; height++) {
        array.push(height)
      }
      return array
    },
    maxList () {
      return this.getMaxList()
    },
    min: {
      get: function () {
        return this.value ? this.value[0] : ''
      },
      set: function (newMin) {
        let newMax = this.getMaxList(newMin)[0]
        // console.log(newProvince, newCity)
        this.$emit('input', [newMin, newMax])
      }
    },
    max: {
      get: function () {
        return this.value ? this.value[1] : ''
      },
      set: function (newMax) {
        // console.log(this.province, newCity)
        this.$emit('input', [this.max, newMax])
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="less">
.height-picker-root{
  display: flex;
  flex-direction: row;
  width: 300px;
  .height-picker{
    width: 120px;
    margin-right: 10px;
  }
}
</style>
