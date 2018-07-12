<template>
  <div class="age-picker-root">
    <plain-picker class="age-picker" v-model="min" :options="minList"></plain-picker>
    ~&nbsp;&nbsp;&nbsp;
    <plain-picker class="age-picker" v-model="max" :options="maxList"></plain-picker>
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
        let lowLimit = min || 18
        for (let age = lowLimit; age < 100; age++) {
          array.push(age)
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
      for (let age = 18; age < 100; age++) {
        array.push(age)
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

<style lang="less" scoped>
.age-picker-root{
  display: flex;
  flex-direction: row;
  width: 300px;
  .age-picker{
    width: 120px;
    margin-right: 10px;
  }
}
</style>
