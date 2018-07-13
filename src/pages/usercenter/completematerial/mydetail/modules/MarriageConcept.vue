<template>
  <div class="marriage-content-root">
    <div class="marriage-content">
      <el-form class="form-sector" label-position="right"
        :model="familyInfo" ref="infoForm">
        <div class="style-label">关于自己</div>
        <el-form-item label="籍贯 :" prop="origin">
          <area-picker class="area-picker" v-model="familyInfo.origin"></area-picker>
        </el-form-item>
        <el-form-item label="国籍 :" prop="nationality">
          <plain-picker class="right-selectbox" v-model="familyInfo.nationality" :options="options.nationality"></plain-picker>
        </el-form-item>
        <el-form-item label="个性特征 :" prop="personality">
          <plain-picker class="right-selectbox" v-model="familyInfo.personality" :options="options.personality"></plain-picker>
        </el-form-item>
        <el-form-item label="幽默感：" prop="humor">
          <plain-picker class="right-selectbox" v-model="familyInfo.humor" :options="options.humor"></plain-picker>
        </el-form-item>
        <el-form-item label="对待感情：" prop="feeling">
          <plain-picker class="right-selectbox" v-model="familyInfo.feeling" :options="options.feeling"></plain-picker>
        </el-form-item>
        <el-form-item label="是否要小孩 :" prop="children">
          <plain-picker class="right-selectbox" v-model="familyInfo.children" :options="options.children"></plain-picker>
        </el-form-item>
        <el-form-item label="何时结婚 :" prop="timeFormMarriage">
          <plain-picker class="right-selectbox" v-model="familyInfo.timeFormMarriage" :options="options.timeFormMarriage"></plain-picker>
        </el-form-item>
        <el-form-item label="是否接受异地恋：" prop="remoteLove">
          <plain-picker class="right-selectbox" v-model="familyInfo.remoteLove" :options="options.remoteLove"></plain-picker>
        </el-form-item>
        <el-form-item label="理想婚姻：" prop="remoteLove">
          <plain-input type="textarea" class="right-inputbox" v-model="familyInfo.idealMarriage"></plain-input>
        </el-form-item>
        <div class="style-label">关于家庭</div>
        <el-form-item label="愿与对方父母同住 :" prop="liveWithParents">
          <plain-picker class="right-selectbox" v-model="familyInfo.liveWithParents" :options="options.liveWithParents"></plain-picker>
        </el-form-item>
        <el-form-item label="家中排行 :" prop="familyRanking">
          <plain-picker class="right-selectbox" v-model="familyInfo.familyRanking" :options="options.familyRanking"></plain-picker>
        </el-form-item>
        <el-form-item label="兄弟姐妹 :" prop="relative">
          <div class="specail-box">
            <div class="specail-row">
              <el-checkbox class="row-type" label="哥哥" v-model="relative.brother.checked"></el-checkbox>
              <plain-picker v-if="relative.brother.checked" v-model="relative.brother.num" :options="getNum"></plain-picker>
            </div>
            <div class="specail-row">
              <el-checkbox class="row-type" label="姐姐" v-model="relative.sister.checked"></el-checkbox>
              <plain-picker v-if="relative.sister.checked" v-model="relative.sister.num" :options="getNum"></plain-picker>
            </div>
            <div class="specail-row">
              <el-checkbox class="row-type" label="弟弟" v-model="relative.youngerBro.checked"></el-checkbox>
              <plain-picker v-if="relative.youngerBro.checked" v-model="relative.youngerBro.num" :options="getNum"></plain-picker>
            </div>
            <div class="specail-row">
              <el-checkbox class="row-type" label="妹妹" v-model="relative.youngerSis.checked"></el-checkbox>
              <plain-picker v-if="relative.youngerSis.checked" v-model="relative.youngerSis.num" :options="getNum"></plain-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="父母情况 :" prop="parentsStatus">
          <plain-picker class="right-selectbox" v-model="familyInfo.parentsStatus" :options="options.parentsStatus"></plain-picker>
        </el-form-item>
        <el-form-item label="父母工作：" prop="parentsWork">
          <div class="specail-box">
            <div class="specail-row">
              <div class="row-type">父亲 :</div>
              <plain-picker class="right-selectbox" v-model="familyInfo.fatherWork" :options="options.parentsWork"></plain-picker>
            </div>
            <div class="specail-row">
              <div class="row-type">母亲 :</div>
              <plain-picker class="right-selectbox" v-model="familyInfo.motherWork" :options="options.parentsWork"></plain-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="父母经济情况：" prop="parentsEconomic">
          <plain-picker class="right-selectbox" v-model="familyInfo.parentsEconomic" :options="options.parentsEconomic"></plain-picker>
        </el-form-item>
        <el-form-item label="父母医保情况：" prop="parentsInsurance">
          <plain-picker class="right-selectbox" v-model="familyInfo.parentsInsurance" :options="options.parentsInsurance"></plain-picker>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-btn">
      <div class="btn" @click="saveDetails">保存</div>
      <!-- <div class="btn">跳过此页</div> -->
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import PlainPicker from '@/components/PlainPicker'
import PlainInput from '@/components/PlainInput'
import AreaPicker from '@/components/ProvinceCityPicker'
import countryData from '../rawData/countries.js'
import { Toast } from 'mint-ui'

export default {
  components: { AreaPicker, PlainPicker, PlainInput },
  data () {
    return {
      familyInfo: {
        origin: [],
        nationality: '',
        personality: '',
        humor: '',
        temper: '',
        feeling: '',
        children: '',
        timeFormMarriage: '',
        remoteLove: '',
        idealMarriage: '',
        liveWithParents: '',
        familyRanking: '',
        parentsStatus: '',
        fatherWork: '',
        motherWork: '',
        parentsEconomic: '',
        parentsInsurance: ''
      },
      relative: {
        'brother': {
          'num': '',
          'checked': false
        },
        'youngerBro': {
          'num': '',
          'checked': false
        },
        'sister': {
          'num': '',
          'checked': false
        },
        'youngerSis': {
          'num': '',
          'checked': false
        }
      },
      options: {
        nationality: countryData.contries,
        personality: ['非常内向', '有点内向', '内外向平衡', '有点外向', '非常外向'],
        humor: ['没有幽默感', '有点幽默感', '幽默风趣', '经常带来欢笑'],
        temper: ['脾气很好', '很少发脾气', '偶尔会憋不住', '经常发脾气', '火气一点就着'],
        feeling: ['人生得意须尽欢', '是否投入真情要看情况', '一向认真对待感情', '憎恨虚情假意用情不专的人'],
        children: ['想要孩子', '要不要都行', '不要孩子', '视情况而定'],
        timeFormMarriage: ['接受闪婚', '顺其自然', '一年内', '两年内', '三年以上'],
        remoteLove: ['不能接受', '能接受', '视情况而定'],
        liveWithParents: ['愿意', '不愿意', '视情况而定'],
        familyRanking: ['独生子女', '老大', '老二', '老三', '老四', '老五及更小', '老幺'],
        parentsStatus: ['父母健在', '单亲家庭', '父亲健在', '母亲健在', '父母均离世'],
        parentsWork: ['政府机关(已退休)', '政府机关(未退休)', '事业单位(已退休)', '事业单位(未退休)',
          '外企单位(已退休)', '外企单位(未退休)', '世界500强(已退休)', '世界500强(未退休)',
          '上市公司(已退休)', '上市公司(未退休)', '国有企业(已退休)', '国有企业(未退休)',
          '私营企业(已退休)', '私营企业(未退休)', '自有公司', '无工作', '其他(已退休)', '其他(未退休)'],
        parentsEconomic: ['均有退休金', '均无退休金', '只有父亲有退休金', '只有母亲有退休金'],
        parentsInsurance: ['均有医疗保险', '均无医疗保险', '只有父亲有医疗保险', '只有母亲有医疗保险']
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let keyArray = Object.keys(this.familyInfo).filter(item => { return item !== 'origin' })
        let extraArray = ['originProvince', 'originCity', 'bigBrother', 'youngBrother', 'bigSister', 'youngSister']
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: [...keyArray, ...extraArray]
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (extraArray.indexOf(key) === -1) {
            this.familyInfo[key] = res.data.details[key][0]
          }
        })
        let {originProvince, originCity} = res.data.details
        this.familyInfo.origin = [originProvince[0], originCity[0]]
        let {bigBrother, youngBrother, bigSister, youngSister} = res.data.details
        this.relative.brother = {num: bigBrother[0], checked: Boolean(bigBrother[0])}
        this.relative.youngerBro = {num: youngBrother[0], checked: Boolean(youngBrother[0])}
        this.relative.sister = {num: bigSister[0], checked: Boolean(bigSister[0])}
        this.relative.youngerSis = {num: youngSister[0], checked: Boolean(youngSister[0])}
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let submitData = {
          originProvince: this.familyInfo.origin[0],
          originCity: this.familyInfo.origin[1],
          bigBrother: this.relative.brother.checked ? this.relative.brother.num : '',
          youngBrother: this.relative.youngerBro.checked ? this.relative.youngerBro.num : '',
          bigSister: this.relative.sister.checked ? this.relative.sister.num : '',
          youngSister: this.relative.youngerSis.checked ? this.relative.youngerSis.num : '',
          ...this.familyInfo
        }
        delete submitData.origin
        console.log(submitData, this.familyInfo)
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: submitData
        })
        Toast(res.message)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    getNum () {
      let numArray = []
      for (let i = 1; i < 11; i++) {
        numArray.push(i + '')
      }
      return numArray
    }
  },
  mounted: async function () {
    this.getDetails()
  }
}
</script>

<style lang="less" scoped>
.marriage-content-root{
  width: 73%;
  box-sizing: border-box;
  .marriage-content {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 40px;
    .form-sector{
      width: 100%;
      box-sizing: border-box;
      .style-label {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        text-align: left;
        font-weight: bold;
        line-height: 30px;
        margin-left: 5px;
      }
      .right-selectbox {
        flex: 1;
        box-sizing: border-box;
      }
      .right-inputbox {
        width: 100%;
      }
      .specail-box {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 10px;
        .specail-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-bottom: 3px;
          .row-type {
            margin-right: 10px;
          }
        }
      }
      .el-form-item{
        margin-bottom: 5px;
        &:last-child{
          margin-bottom: 0;
        }
        .el-form-item__content{
          text-align: left;
          margin-left: 10px;
        }
      }
    }
  }
  .option-btn {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .btn {
      width: 100px;
      height: 30px;
      background-color: #EF356E;
      box-sizing: border-box;
      border-radius: 5px;
      color: white;
      line-height: 30px;
      margin: 0 30px;
      font-size: 14px;
      text-align: center;
    }
  }
}

</style>
