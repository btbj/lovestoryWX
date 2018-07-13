<template>
  <div class="appearance-content-root">
    <div class="appearance-content">
      <el-form class="form-sector" label-position="right"
          :model="appearanceInfo" ref="infoForm" :rules="FormRules">
          <el-form-item label="体重 :" prop="appearWeight">
            <div class="weight-box">
              <plain-input class="weight-input" v-model="appearanceInfo.appearWeight" maxlength="3"></plain-input>
              <span>公斤</span>
            </div>
          </el-form-item>
        <el-form-item label="体型 :" prop="appearBody">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearBody" :options="options.appearBody"></plain-picker>
        </el-form-item>
        <el-form-item label="脸型 :" prop="appearFace">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearFace" :options="options.appearFace"></plain-picker>
        </el-form-item>
        <el-form-item label="眼睛 :" prop="eye">
          <div class="eye-hair-box">
            <div class="eye-hair-row">
              <span class="row-type">眼色 :</span>
              <plain-picker v-model="appearanceInfo.appearEyeColor" :options="options.appearEyeColor"></plain-picker>
            </div>
            <div class="eye-hair-row">
              <span class="row-type">眼型 :</span>
              <plain-picker v-model="appearanceInfo.appearEyeType" :options="options.appearEyeType"></plain-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="头发 :" prop="hair">
          <div class="eye-hair-box">
            <div class="eye-hair-row">
              <span class="row-type">发色 :</span>
              <plain-picker v-model="appearanceInfo.appearHairColor" :options="options.appearHairColor"></plain-picker>
            </div>
            <div class="eye-hair-row">
              <span class="row-type">发型 :</span>
              <plain-picker v-model="appearanceInfo.appearHairType" :options="options.appearHairType"></plain-picker>
            </div>
            <div class="eye-hair-row">
              <span class="row-type">发长 :</span>
              <plain-picker v-model="appearanceInfo.appearHairLength" :options="options.appearHairLength"></plain-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="皮肤 :" prop="appearSkin">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearSkin" :options="options.appearSkin"></plain-picker>
        </el-form-item>
        <el-form-item label="肤色 :" prop="appearSkinColor">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearSkinColor" :options="options.appearSkinColor"></plain-picker>
        </el-form-item>
        <el-form-item label="肌肉 :" prop="appearMuscle">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearMuscle" :options="options.appearMuscle"></plain-picker>
        </el-form-item>
        <el-form-item label="健康情况 :" prop="appearHealth">
          <plain-picker class="right-selectbox" v-model="appearanceInfo.appearHealth" :options="options.appearHealth"></plain-picker>
        </el-form-item>
        <el-form-item label="穿着风格：" prop="style">
          <div class="style-box">
            <el-checkbox-group v-model="appearanceInfo.appearWearingStyle">
              <div class="checkbox-column">
                <el-checkbox label="休闲风格"></el-checkbox>
                <el-checkbox label="商务风格"></el-checkbox>
                <el-checkbox label="运动风格"></el-checkbox>
                <el-checkbox label="英伦风格"></el-checkbox>
              </div>
              <div class="checkbox-column">
                <el-checkbox label="非主流风格"></el-checkbox>
                <el-checkbox label="复古风格"></el-checkbox>
                <el-checkbox label="混搭风格"></el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
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
import { Toast } from 'mint-ui'

export default {
  components: { PlainPicker, PlainInput },
  data () {
    return {
      appearanceInfo: {
        appearWeight: '',
        appearBody: '',
        appearFace: '',
        appearEyeColor: '',
        appearEyeType: '',
        appearHairColor: '',
        appearHairType: '',
        appearHairLength: '',
        appearSkin: '',
        appearSkinColor: '',
        appearMuscle: '',
        appearHealth: '',
        appearWearingStyle: []
      },
      options: {
        appearBody: ['请选择', '苗条型', '匀称型', '高挑型', '丰满型', '健壮型', '魁梧型', '运动型',
          '曲线型', '高大型'],
        appearFace: ['请选择', '圆脸型', '方脸型', '长脸型', '瓜子脸型', '鸭蛋脸型', '国字脸型', '三角脸型',
          '菱形脸型', '保密'],
        appearEyeColor: ['请选择', '黑色', '蓝色', '浅褐色', '棕色', '灰色', '绿色', '特殊颜色'],
        appearEyeType: ['请选择', '标准眼', '丹凤眼', '细长眼', '眯缝眼', '三角眼', '深眼窝', '双眼皮大眼睛'],
        appearHairColor: ['请选择', '黑色', '金色', '褐色', '栗色', '灰色', '红色', '白色', '挑染', '光头'],
        appearHairType: ['请选择', '顺直', '大卷', '小卷', '微卷'],
        appearHairLength: ['请选择', '平头', '短发', '中长发', '长发', '其他'],
        appearSkin: ['请选择', '皮肤光滑', '皮肤白皙', '皮肤细腻', '皮肤暗黄', '皮肤粗糙', '皮肤敏感'],
        appearSkinColor: ['请选择', '小麦肤色', '黝黑肤色', '健康肤色', '亮白肤色'],
        appearMuscle: ['请选择', '肌肉发达', '有少量肌肉', '没有肌肉'],
        appearHealth: ['请选择', '运动健将', '结实健壮', '身体健康', '体质一般', '体弱多病', '身体残疾']
      },
      FormRules: {
        appearWeight: [
          { pattern: /^[\d]{2,3}$/, message: '请输入数字体重（公斤）', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: Object.keys(this.appearanceInfo)
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (key === 'appearWearingStyle') {
            this.appearanceInfo[key] = res.data.details[key]
          } else {
            this.appearanceInfo[key] = res.data.details[key][0]
          }
        })
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: this.appearanceInfo
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
.appearance-content-root{
  width: 73%;
  box-sizing: border-box;
  .appearance-content {
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
      .weight-box {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        .weight-input {
          width: 40%;
          box-sizing: border-box;
          margin-right: 5px;
        }
      }
      .eye-hair-box {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .eye-hair-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-bottom: 3px;
          .row-type {
            font-size: 12px;
            margin-right: 3px;
          }
        }
      }
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
      .style-box {
        width: 100%;
        box-sizing: border-box;
        padding: 0 5px;
        .el-checkbox-group {
          display: flex;
          flex-direction: row;
          width: 100%;
          box-sizing: border-box;
          .el-checkbox+.el-checkbox {
            margin-left: 0;
          }
          .checkbox-column {
            display: flex;
            flex-direction: column;
            margin-right: 10px;
            box-sizing: border-box;
            width: 150px;
          }
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
