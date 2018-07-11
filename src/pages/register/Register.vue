<template>
  <div class="register-page-root">
    <logo-box></logo-box>
    <page-header noMenu noBack>
      <span slot="title">用户注册</span>
    </page-header>
    <div class="register-body">
      <el-form :model="RegisterData" ref="RegisterFrom" :rules="formRule"
        label-width="80px" label-position="right">
        <el-form-item label="我是" prop="sex">
          <el-radio v-model="RegisterData.sex" label="男">男</el-radio>
          <el-radio v-model="RegisterData.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <date-picker v-model="RegisterData.birthday"></date-picker>
        </el-form-item>
        <el-form-item label="常住地" prop="address">
          <area-picker v-model="RegisterData.address"></area-picker>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marrageState">
          <el-radio v-model="RegisterData.marrageState" label="未婚">未婚</el-radio>
          <el-radio v-model="RegisterData.marrageState" label="离异">离异</el-radio>
          <el-radio v-model="RegisterData.marrageState" label="丧偶">丧偶</el-radio>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <plain-picker v-model="RegisterData.height" :options="heightOptions"></plain-picker>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <plain-picker v-model="RegisterData.education" :options="options.education"></plain-picker>
        </el-form-item>
        <el-form-item label="月薪" prop="salary">
          <plain-picker v-model="RegisterData.salary" :options="options.salary"></plain-picker>
        </el-form-item>
        <div class="divide-line"></div>
        <el-form-item label="手机号" prop="phone">
          <plain-input type="tel" maxlength="11" v-model="RegisterData.phone"></plain-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <div class="code-box">
            <plain-input type="tel" maxlength="4" v-model="RegisterData.code"></plain-input>
            <otp-btn class="otp-btn" :phoneNumber="RegisterData.phone"></otp-btn>
          </div>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <plain-input type="password" v-model="RegisterData.password"></plain-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordConfirm">
          <plain-input type="password" v-model="RegisterData.passwordConfirm"></plain-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <plain-input v-model="RegisterData.nickname"></plain-input>
        </el-form-item>
        <el-form-item label="内心独白" prop="monologue">
          <plain-input type="textarea" v-model="RegisterData.monologue"></plain-input>
        </el-form-item>
      </el-form>
      <div class="submit-btn" @click="validateForm">立即注册</div>
    </div>
  </div>
</template>

<script>
import LogoBox from '@/components/LogoBox'
import PageHeader from '@/components/PageHeader'
import PlainInput from '@/components/PlainInput'
import DatePicker from '@/components/DatePicker'
import AreaPicker from '@/components/AreaPicker'
import PlainPicker from '@/components/PlainPicker'
import OtpBtn from '@/components/OtpBtn'
import userService from '@/services/userService'
import { Toast } from 'mint-ui'

export default {
  components: { LogoBox, PageHeader, PlainInput, DatePicker, AreaPicker, PlainPicker, OtpBtn },
  data () {
    let checkEqualPass = (rule, value, callback) => {
      if (value !== this.RegisterData.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      RegisterData: {
        sex: '男',
        birthday: '2000-01-01',
        address: ['慈溪市', '慈溪市'],
        marrageState: '未婚',
        height: '170',
        education: '',
        salary: '',
        phone: '',
        code: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
        monologue: ''
      },
      options: {
        education: ['高中及中专以下', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
        salary: ['2000元以下', '2000~5000元', '5000~10000元', '10000~20000元', '20000元以上']
      },
      formRule: {
        // name: [
        //   { required: true, message: '请输入姓名', trigger: 'blur' }
        // ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请选择生日', trigger: 'blur' }
        ],
        address: [
          { type: 'array', required: true, message: '请输入常住地', trigger: 'blur' }
        ],
        marrageState: [
          { required: true, message: '请选择婚姻状况', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' },
          { pattern: /^[\d]{3}$/, message: '请输入身高（cm）', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请输入学历', trigger: 'blur' }
        ],
        salary: [
          { required: true, message: '请输入月薪（元）', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[\d]{10}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入收到的验证码', trigger: 'blur' },
          { pattern: /^[\d]{4}$/, message: '验证码格式错误', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: checkEqualPass, trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        monologue: [
          { required: true, message: '请输入内心独白', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    validateForm () {
      this.$refs['RegisterFrom'].validate((valid, errors) => {
        if (valid) {
          this.startRegister()
        } else {
          console.log('error submit!!', errors)
          Toast(Object.values(errors)[0][0].message)
          return false
        }
      })
    },
    async startRegister () {
      try {
        let birthday = new Date(this.RegisterData.birthday)
        let res = await userService.doReg({
          // name: this.registerInfo.name,
          sex: this.RegisterData.sex,
          year: birthday.getFullYear(),
          month: birthday.getMonth() + 1,
          day: birthday.getDay(),
          province: this.RegisterData.address[0],
          city: this.RegisterData.address[1],
          marital_status: this.RegisterData.marrageState,
          height: this.RegisterData.height,
          education: this.RegisterData.education,
          month_pay: this.RegisterData.salary,
          monologue: this.RegisterData.monologue,
          phone: this.RegisterData.phone,
          code: this.RegisterData.code,
          password: this.RegisterData.password,
          nickname: this.RegisterData.nickname
        })
        Toast(res.message)
        this.$store.dispatch('setToken', {
          value: res.data.token,
          expire: res.data.timeout
        })
        this.$router.push({name: 'myinfo'})
        // this.$router.push({name: 'prepay'})
      } catch (error) {
        console.log(error)
        if (error.message) {
          this.$message.error(error.message)
        }
      }
    }
  },
  computed: {
    heightOptions () {
      let result = []
      for (let item = 140; item <= 250; item++) {
        result.push(item)
      }
      return result
    }
  }
}
</script>

<style lang="less" scoped>
.register-page-root{
  width: 100%;
  .register-body{
    margin: 20px 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .divide-line{
      border-top: 1px dashed #ddd;
      width: 100%;
      height: 1px;
      margin-bottom: 20px;
    }
    .code-box{
      display: flex;
      flex-direction: row;
    }
    .submit-btn{
      margin: 10px auto 100px;
      text-align: center;
      width: 80%;
      height: 40px;
      line-height: 40px;
      color: white;
      background: #F3487E;
      border-radius: 0;
      border: none;
    }
  }
}
</style>
