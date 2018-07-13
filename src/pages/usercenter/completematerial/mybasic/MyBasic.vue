<template>
  <div class="my-basic-root ">
    <user-header>
      <span slot="title">基本资料</span>
    </user-header>
    <div class="basic-content-container">
      <div class="basic-info-box">
        <div class="basic-info-content">
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">昵称</span>：
              <span class="item-info">{{userInfo.nickname}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">身高</span>：
              <span class="item-info">{{userInfo.height}}cm</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">性别</span>：
              <span class="item-info">{{userInfo.sex}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">年龄</span>：
              <span class="item-info">{{userInfo.age}}岁</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">出生日期</span>：
              <span class="item-info">{{userInfo.birthday}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">学历</span>：
              <span class="item-info">{{userInfo.education}}</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">生肖</span>：
              <span class="item-info">{{userInfo.zodiac}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">婚姻状况</span>：
              <span class="item-info">{{userInfo.marrageStatus}}</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">星座</span>：
              <span class="item-info">{{userInfo.sign}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="seprator"></div>
      <div class="basic-info-form">
        <el-form class="form-sector" label-position="right" label-width="100px"
          :model="basicInfo" ref="infoForm" :rules="formRule">
          <el-form-item label="有无子女：" prop="children">
          <plain-picker class="right-selectbox" v-model="basicInfo.children" :options="options.children"></plain-picker>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address">
            <area-picker class="right-selectbox" v-model="basicInfo.address"></area-picker>
          </el-form-item>
          <el-form-item prop="household">
            <span slot="label">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;口：</span>
            <area-picker class="right-selectbox" v-model="basicInfo.household"></area-picker>
          </el-form-item>
          <el-form-item prop="blood">
            <span slot="label">血&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
            <plain-picker class="right-selectbox" v-model="basicInfo.blood" :options="options.blood"></plain-picker>
          </el-form-item>
          <el-form-item prop="nation">
            <span slot="label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
            <plain-picker class="right-selectbox" v-model="basicInfo.nation" :options="options.nation"></plain-picker>
          </el-form-item>
          <el-form-item prop="salary">
            <span slot="label">月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪：</span>
            <plain-picker class="right-selectbox" v-model="basicInfo.salary" :options="options.salary"></plain-picker>
          </el-form-item>
          <el-form-item prop="house">
            <span slot="label">住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房：</span>
            <plain-picker class="right-selectbox" v-model="basicInfo.house" :options="options.house"></plain-picker>
          </el-form-item>
          <el-form-item label="购车情况：" prop="car">
            <plain-picker class="right-selectbox" v-model="basicInfo.car" :options="options.car"></plain-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="seprator"></div>
      <div class="basic-info-contact">
        <div class="contact-label">联系方式</div>
        <div class="contact-label" style="color: lightgrey; font-size:12px; margin-bottom: 5px;">以下资料我们将为您保密，不会显示在您的个人资料页面</div>
        <el-form class="form-sector" label-position="right" label-width="100px"
          :model="contactInfo" ref="contactForm" :rules="formRule">
          <el-form-item label="真实姓名：" prop="name">
            <plain-input class="right-selectbox" v-model="contactInfo.name"></plain-input>
          </el-form-item>
          <el-form-item label="身份证号：" prop="idCard">
            <plain-input class="right-selectbox" v-model="contactInfo.idCard"></plain-input>
          </el-form-item>
          <el-form-item prop="email">
            <span slot="label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span>
            <plain-input class="right-selectbox" v-model="contactInfo.email"></plain-input>
          </el-form-item>
          <el-form-item prop="wechat">
            <span slot="label">微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：</span>
            <plain-input class="right-selectbox" v-model="contactInfo.wechat"></plain-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="option-btn">
        <div class="btn" @click="verifyForm">保存并继续</div>
        <div class="btn" @click="skipPage">跳过此页</div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UserHeader from '@/components/UserHeader'
import PlainInput from '@/components/PlainInput'
import PlainPicker from '@/components/PlainPicker'
import AreaPicker from '@/components/AreaPicker'
import { Toast } from 'mint-ui'

export default {
  components: { UserHeader, PlainInput, PlainPicker, AreaPicker },
  data () {
    return {
      userInfo: {
        nickname: '',
        sex: '',
        birthday: '',
        zodiac: '',
        sign: '',
        height: '',
        age: '',
        education: '',
        marrageStatus: ''
      },
      contactInfo: {
        name: '',
        idCard: '',
        email: '',
        wechat: ''
      },
      basicInfo: {
        children: '',
        blood: '',
        nation: '',
        salary: '',
        house: '',
        car: '',
        address: ['北京市', '东城区'],
        household: []
      },
      options: {
        children: ['无小孩', '小孩归自己', '小孩归对方'],
        blood: ['A型', 'B型', 'O型', 'AB型', '其它', '保密'],
        nation: ['汉族', '藏族', '朝鲜族', '蒙古族', '回族', '满族', '维吾尔族', '壮族', '彝族', '苗族', '其它'],
        salary: ['2000元以下', '2000~5000元', '5000~10000元', '10000~20000元', '20000元以上'],
        house: ['未购房', '需要时购置', '已购房（有贷款）', '已购房（无贷款）', '已购房', '与人合租', '独自租房', '与父母同住', '住朋友家', '住单位房'],
        car: ['暂未购车', '已经购车']
      },
      formRule: {
        idCard: [
          { pattern: /^\d{17}[\d|x]$|^\d{15}$/, message: '身份证输入有误', trigger: 'blur' }
        ],
        email: [
          { pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, message: '邮箱输入有误', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        let {nickname, sex, year, month, day, zodiac, sign, height, age, education, marital_status: marrageStatus} = res.data.info.info
        this.userInfo = {
          nickname,
          sex,
          birthday: `${year}-${month}-${day}`,
          height,
          age,
          education,
          zodiac,
          sign,
          marrageStatus
        }
        let { children, blood_type: blood, province, city, household_province: hProvince, household_city: hCity, nation, month_pay: salary, live_status: house, car_status: car } = res.data.info.info
        this.basicInfo = {
          children,
          blood,
          address: [province, city],
          household: [hProvince, hCity],
          nation,
          salary,
          house,
          car
        }
        let {name, id_card: idCard, email, wechat} = res.data.info.info
        this.contactInfo = {
          name,
          idCard,
          email,
          wechat
        }
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    singleFormVerify (formName) {
      return new Promise((resolve, reject) => {
        this.$refs[formName].validate(valid => {
          if (valid) {
            resolve(valid)
          } else {
            reject(valid)
          }
        })
      })
    },
    async verifyForm () {
      try {
        await this.singleFormVerify('infoForm')
        await this.singleFormVerify('contactForm')
        this.submitNewInfo()
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async submitNewInfo () {
      try {
        let res = await userService.setExtraInfo({
          token: this.$store.getters.token,
          children: this.basicInfo.children,
          province: this.basicInfo.address.length ? this.basicInfo.address[0] : '',
          city: this.basicInfo.address.length ? this.basicInfo.address[1] : '',
          household_province: this.basicInfo.household.length ? this.basicInfo.household[0] : '',
          household_city: this.basicInfo.household.length ? this.basicInfo.household[1] : '',
          blood_type: this.basicInfo.blood,
          nation: this.basicInfo.nation,
          month_pay: this.basicInfo.salary,
          live_status: this.basicInfo.house,
          car_status: this.basicInfo.car,
          name: this.contactInfo.name,
          id_card: this.contactInfo.idCard,
          email: this.contactInfo.email,
          wechat: this.contactInfo.wechat
        })
        Toast(res.message)
        this.$router.push({name: 'MyIntro'})
      } catch (error) {
        userService.handleErr(error)
      }
    },
    skipPage () {
      this.$router.push({name: 'MyIntro'})
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }

}
</script>

<style lang="less" scoped>
.my-basic-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .basic-content-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    .seprator{
      width: 100%;
      margin: 0 5px;
      height: 0;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    .right-selectbox {
     width: 90%;
    }
     .basic-info-box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-bottom: 20px;
      .basic-info-content {
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        padding: 5px 5px 5px 15px;
        text-align: left;
        .content-item-row {
          width: 100%;
          height: 20px;
          box-sizing: border-box;
          font-size: 14px;
          margin-bottom: 10px;
          display: flex;
          .item-column {
            display: flex;
            align-items: center;
            width: 50%;
            .item-label{
              text-align-last: justify;
            }
            .item-info{
              margin-left: 0;
            }
          }
        }
      }
    }
    .basic-info-form {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 25px;
      .form-sector{
        box-sizing: border-box;
        padding: 10px 10px 10px 0;
      }
    }
    .basic-info-contact {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      .contact-label {
        width: 100%;
        box-sizing: border-box;
        color: #F1356F;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
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
</style>
