<template>
  <div class="life-content-root">
    <div class="life-content">
      <el-form class="form-sector" label-position="right" label-width="80px"
        :model="styleInfo" ref="infoForm">
        <div class="style-label">嗜好习惯</div>
        <el-form-item prop="styleSmoking">
          <span slot="label">吸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;烟&nbsp;:</span>
          <plain-picker class="right-selectbox" v-model="styleInfo.styleSmoking" :options="options.styleSmoking"></plain-picker>
        </el-form-item>
        <el-form-item prop="styleDrinking">
          <span slot="label">饮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酒&nbsp;:</span>
          <plain-picker class="right-selectbox" v-model="styleInfo.styleDrinking" :options="options.styleDrinking"></plain-picker>
        </el-form-item>
        <el-form-item label="锻炼习惯 :" prop="styleExercise">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleExercise" :options="options.styleExercise"></plain-picker>
        </el-form-item>
        <el-form-item label="饮食习惯 :" prop="styleDiet">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleDiet" :options="options.styleDiet"></plain-picker>
        </el-form-item>
        <el-form-item label="逛街购物 :" prop="styleShopping">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleShopping" :options="options.styleShopping"></plain-picker>
        </el-form-item>
        <el-form-item label="宗教信仰 :" prop="styleReligion">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleReligion" :options="options.styleReligion"></plain-picker>
        </el-form-item>
        <el-form-item label="作息时间 :" prop="styleSchedule">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleSchedule" :options="options.styleSchedule"></plain-picker>
        </el-form-item>
        <el-form-item label="交际圈子 :" prop="styleCommunication">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleCommunication" :options="options.styleCommunication"></plain-picker>
        </el-form-item>
        <el-form-item label="最大消费 :" prop="styleConsumption">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleConsumption" :options="options.styleConsumption"></plain-picker>
        </el-form-item>
        <div class="style-label">家务</div>
        <el-form-item label="水平等级 :" prop="styleHomeworkLevel">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleHomeworkLevel" :options="options.styleHomeworkLevel"></plain-picker>
        </el-form-item>
        <el-form-item label="分配情况 :" prop="styleHomeworkAssignment">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleHomeworkAssignment" :options="options.styleHomeworkAssignment"></plain-picker>
        </el-form-item>
        <div class="style-label">宠物</div>
        <el-form-item label="喜欢程度 :" prop="stylePetLoving">
          <plain-picker class="right-selectbox" v-model="styleInfo.stylePetLoving" :options="options.stylePetLoving"></plain-picker>
        </el-form-item>
        <el-form-item label="关于宠物 :" prop="styleAboutPet">
          <plain-picker class="right-selectbox" v-model="styleInfo.styleAboutPet" :options="options.styleAboutPet"></plain-picker>
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
import { Toast } from 'mint-ui'

export default {
  components: { PlainPicker },
  data () {
    return {
      styleInfo: {
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
        styleAboutPet: ''
      },
      options: {
        styleSmoking: ['不吸，很反感吸烟', '不吸，但不反感', '社交时偶尔吸', '每周吸几次', '每天都吸', '有烟瘾'],
        styleDrinking: ['不喝', '社交需要时喝', '有兴致时喝', '每天都离不开酒'],
        styleExercise: ['每天锻炼', '每周至少一次', '每月几次', '没时间锻炼', '集中时间锻炼', '不喜欢锻炼'],
        styleDiet: ['无特殊习惯', '口味清淡', '无辣不欢', '口味偏重', '无肉不欢', '习惯吃素'],
        styleShopping: ['从来不去', '没办法才去', '偶尔逛逛', '经常逛街', '非常爱逛街', '不逛就难受'],
        styleReligion: ['无宗教信仰', '大乘佛教显宗', '大乘佛教密宗', '大乘佛教净宗', '小乘佛教',
          '道教', '儒教', '基督教天主教派', '基督教东正教派', '基督教新教派',
          '犹太教', '伊斯兰教什叶派', '伊斯兰教逊尼派', '印度教', '神道教', '萨满教', '其它宗教信仰'],
        styleSchedule: ['早睡早起很规律', '经常夜猫子', '总是早起鸟', '偶尔懒散一下', '没有规律'],
        styleCommunication: ['同学朋友都逐渐疏远了', '平时通过互联网和电话联系', '每年参加几次聚会',
          '偶尔主动约会朋友', '经常和朋友见面', '朋友越来越多', '每天呼朋唤友'],
        styleConsumption: ['享受美食', '购置服装', '购置包包', '购置美鞋', '美容护肤', '健身锻炼',
          '休闲娱乐', '旅游度假', '出行交通', '电子产品', '书本杂志', '教育培训',
          '社交交友', '文化活动', '电动游戏', '其他'],
        styleHomeworkLevel: ['精通', '会一些', '不会'],
        styleHomeworkAssignment: ['家务全部都我做', '夫妻平均分配', '谁有时间谁做', '夫妻各自承担自己擅长的家务'],
        stylePetLoving: ['很喜欢', '还可以', '不喜欢'],
        styleAboutPet: ['我没有养宠物，也不接受对方养', '暂时没有养宠物，如果你喜欢我们一起养', '喜欢宠物，家里有养小狗',
          '喜欢宠物，家里有养猫咪', '喜欢宠物，我养的宠物很特别，好奇的话，来信问问我吧']
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: Object.keys(this.styleInfo)
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          this.styleInfo[key] = res.data.details[key][0]
        })
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: this.styleInfo
        })
        console.log(res)
        Toast(res.message)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getDetails()
  }
}
</script>

<style lang="less" scoped>
.life-content-root{
  width: 80%;
  .life-content {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    .form-sector{
      width: 100%;
      box-sizing: border-box;
      .right-selectbox {
        flex: 1;
        box-sizing: border-box;
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
      .style-label {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        text-align: left;
        font-weight: bold;
        line-height: 30px;
        margin-left: 5px;
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
