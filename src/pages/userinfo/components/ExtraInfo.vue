<template>
  <div class="extra-info-root">
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">内心独白</span>
      </div>
      <div class="body">
        <div class="monologue-text">{{userInfo.monologue}}</div>
      </div>
    </div>
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">择偶要求</span>
      </div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">所在地区</div>：
            <div class="content">{{userInfo.province || '不限'}}</div>
          </div>
          <div class="info-item">
            <div class="label">身高范围</div>：
            <div class="content">{{rangeText(userCondition.height_min, userCondition.height_max, '厘米')}}</div>
          </div>
          <div class="info-item">
            <div class="label">婚史</div>：
            <div class="content">{{userInfo.marital_status || '不限'}}</div>
          </div>
          <div class="info-item">
            <div class="label">民族</div>：
            <div class="content">{{userInfo.nation || '不限'}}</div>
          </div>
          <div class="info-item">
            <div class="label">学历</div>：
            <div class="content">{{userInfo.education || '不限'}}</div>
          </div>
          <div class="info-item">
            <div class="label">有无照片</div>：
            <div class="content">{{userInfo.has_images ? '有照片' : '不限'}}</div>
          </div>
          <div class="info-item">
            <div class="label">年龄范围</div>：
            <div class="content">{{rangeText(userCondition.age_min, userCondition.age_max, '岁')}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">生活方式</span>
      </div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">吸烟</div>：
            <div class="content">{{detailInfo.styleSmoking || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">饮酒</div>：
            <div class="content">{{detailInfo.styleDrinking || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">锻炼习惯</div>：
            <div class="content">{{detailInfo.styleExercise || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">饮食习惯</div>：
            <div class="content">{{detailInfo.styleDiet || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">逛街购物</div>：
            <div class="content">{{detailInfo.styleShopping || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">宗教信仰</div>：
            <div class="content">{{detailInfo.styleReligion || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">作息时间</div>：
            <div class="content">{{detailInfo.styleSchedule || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">交际圈子</div>：
            <div class="content">{{detailInfo.styleCommunication || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">最大消费</div>：
            <div class="content">{{detailInfo.styleConsumption || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">家务</div>：
            <div class="content">{{detailInfo.styleHomeworkAssignment || '——'}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">经济实力</span>
      </div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">月薪</div>：
            <div class="content">{{userInfo.month_pay || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">购房</div>：
            <div class="content">{{userInfo.live_status || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">购车</div>：
            <div class="content">{{userInfo.car_status || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">经济观念</div>：
            <div class="content">{{detailInfo.economicConcept || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">投资理财</div>：
            <div class="list-content">
              <div class="list-item" v-for="(item, index) in detailArray.investList" :key="index">{{item}}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="label">外债贷款</div>：
            <div class="list-content">
              <div class="list-item" v-for="(item, index) in detailArray.debitList" :key="index">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">工作学习</span>
      </div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">职业职位</div>：
            <div class="content">{{detailInfo.workProfession || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">公司行业</div>：
            <div class="content">{{detailInfo.workIndustry || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">公司类型</div>：
            <div class="content">{{detailInfo.workCompany || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">福利待遇</div>：
            <div class="content">{{detailInfo.workWelfare || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">工作状态</div>：
            <div class="content">{{detailInfo.workStatus || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">调动工作可能性</div>：
            <div class="content">{{detailInfo.workTransfer || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">事业与家庭</div>：
            <div class="content">{{detailInfo.workPriority || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">海外工作可能性</div>：
            <div class="content">{{detailInfo.workOverseas || '——'}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="title">
        <span class="icon mdi-radio_button_unchecked"></span>
        <span class="text">婚姻观念</span>
      </div>
      <div class="sub-title">关于自己</div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">籍贯</div>：
            <div class="content">{{originText || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">户口</div>：
            <div class="content">{{householdText || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">国籍</div>：
            <div class="content">{{detailInfo.nationality || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">个性特征</div>：
            <div class="content">{{detailInfo.personality || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">幽默感</div>：
            <div class="content">{{detailInfo.humor || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">脾气</div>：
            <div class="content">{{detailInfo.temper || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">对待感情</div>：
            <div class="content">{{detailInfo.feeling || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">是否要小孩</div>：
            <div class="content">{{detailInfo.children || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">何时结婚</div>：
            <div class="content">{{detailInfo.timeFormMarriage || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">是否能接受异地恋</div>：
            <div class="content">{{detailInfo.remoteLove || '——'}}</div>
          </div>
          <div class="info-item" style="flex-basis: 100%;">
            <div class="label">理想婚姻</div>：
            <div class="content">{{detailInfo.idealMarriage || '——'}}</div>
          </div>
        </div>
      </div>
      <div class="sub-title">关于家庭</div>
      <div class="body">
        <div class="list-box">
          <div class="info-item">
            <div class="label">愿与对方父母同住</div>：
            <div class="content">{{detailInfo.liveWithParents || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">家中排行</div>：
            <div class="content">{{detailInfo.familyRanking || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">父母情况</div>：
            <div class="content">{{detailInfo.parentsStatus || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">兄弟姐妹</div>：
            <div class="content">{{relativeText || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">父母经济情况</div>：
            <div class="content">{{detailInfo.parentsEconomic || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">父母医保情况</div>：
            <div class="content">{{detailInfo.parentsInsurance || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">父亲工作</div>：
            <div class="content">{{detailInfo.fatherWork || '——'}}</div>
          </div>
          <div class="info-item">
            <div class="label">母亲工作</div>：
            <div class="content">{{detailInfo.motherWork || '——'}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  props: ['info'],
  data () {
    return {
      detailInfo: {
        styleSmoking: '',
        styleDrinking: '',
        styleExercise: '',
        styleDiet: '',
        styleShopping: '',
        styleReligion: '',
        styleSchedule: '',
        styleCommunication: '',
        styleConsumption: '',
        styleHomeworkLevel: '',
        styleHomeworkAssignment: '',
        stylePetLoving: '',
        styleAboutPet: '',
        economicConcept: '',
        workProfession: '',
        workIndustry: '',
        workCompany: '',
        workWelfare: '',
        workStatus: '',
        workTransfer: '',
        workOverseas: '',
        workPriority: '',
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
        parentsInsurance: '',
        originProvince: '',
        originCity: '',
        bigBrother: '',
        youngBrother: '',
        bigSister: '',
        youngSister: ''
      },
      detailArray: {
        investList: [],
        debitList: []
      }
    }
  },
  methods: {
    rangeText (min, max, unit) {
      if (!min) {
        return '不限'
      } else if (!max) {
        return `${min}${unit}以上`
      } else {
        return `${min}~${max}${unit}`
      }
    },
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          id: this.$route.params.UserId,
          data: [...Object.keys(this.detailInfo), ...Object.keys(this.detailArray)]
        })
        Object.keys(this.detailInfo).forEach(key => {
          if (res.data.details[key]) {
            this.detailInfo[key] = res.data.details[key][0]
          }
        })
        Object.keys(this.detailArray).forEach(key => {
          if (res.data.details[key]) {
            this.detailArray[key] = res.data.details[key]
          }
        })
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    userInfo () {
      return this.info.info
    },
    userCondition () {
      return this.info.condition
    },
    originText () {
      return this.detailInfo.originProvince ? (this.detailInfo.originProvince + ' ' + this.detailInfo.originCity) : ''
    },
    householdText () {
      let province = this.userInfo.household_province
      let city = this.userInfo.household_city
      return province ? province + ' ' + city : ''
    },
    relativeText () {
      let result = ''
      let {bigBrother, youngBrother, bigSister, youngSister} = this.detailInfo
      if (bigBrother) {
        result += `哥哥${bigBrother}个 `
      }
      if (youngBrother) {
        result += `弟弟${youngBrother}个 `
      }
      if (bigSister) {
        result += `姐姐${bigSister}个 `
      }
      if (youngSister) {
        result += `妹妹${youngSister}个`
      }
      return result
    }
  },
  mounted: async function () {
    await this.getDetails()
  }
}
</script>

<style lang="less" scoped>
.extra-info-root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid #F1356F;
  .section-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 15px;
      .icon{
        color: #F1356F;
        width: 20px;
      }
    }
    .sub-title{
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      box-sizing: border-box;
      padding: 0 20px;
      margin-bottom: 10px;
      background: #eee;
      color: #F1356F;
      font-weight: bold;
    }
    .body{
      box-sizing: border-box;
      padding: 0 20px;
      font-size: 14px;
    }
  }
}
.monologue-text{
  line-height: 20px;
}
.list-box{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
  .info-item{
    flex-basis: 50%;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    .label{
      width: 50px;
      min-width: 50px;
      text-align-last: justify;
      text-align: justify;
    }
    .label:after{
      content: " ";
      display: inline-block;
      width: 100%;
    }
    .content{
      // margin-left: 5px;
      color: #444;
    }
    .list-content{
      display: flex;
      flex-direction: column;
      .list-item{
        margin-bottom: 2px;
      }
    }
  }
}
</style>
