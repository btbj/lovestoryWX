<template>
  <div class="my-option-root">
    <user-header>
      <span slot="title">择偶条件</span>
    </user-header>
    <div class="option-info-container">
      <div class="option-info-box">
        <div class="option-info-banner">我的择偶条件</div>
        <div class="option-info-content">
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">所在地区</span>：
              <span>{{optionAddressText}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">身高范围</span>：
              <span>{{optionHeightText}}</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">婚史</span>：
              <span>{{optionInfo.marriageStatus || '不限'}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">民族</span>：
              <span>{{optionInfo.nation || '不限'}}</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">学历</span>：
              <span>{{optionInfo.education || '不限'}}</span>
            </div>
            <div class="item-column">
              <span class="item-label">有无照片</span>：
              <span>{{optionInfo.hasPic || '不限'}}</span>
            </div>
          </div>
          <div class="content-item-row">
            <div class="item-column">
              <span class="item-label">年龄范围</span>：
              <span>{{optionAgeText}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="seprator"></div>
      <div class="option-info-form">
        <div class="option-info-banner">修改择偶条件</div>
        <el-form class="form-sector" label-position="right" label-width="100px"
          :model="optionInfo" ref="infoForm">
          <el-form-item label="所在地区：" prop="address" >
            <area-picker class="right-selectbox" v-model="optionInfo.address"></area-picker>
          </el-form-item>
          <el-form-item prop="age">
            <span slot="label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
            <age-picker class="right-selectbox" v-model="optionInfo.age"></age-picker>
          </el-form-item>
          <el-form-item prop="marriageStatus">
            <span slot="label">婚姻状况：</span>
            <plain-picker class="right-selectbox" v-model="optionInfo.marriageStatus" :options="options.marriageStatus"></plain-picker>
          </el-form-item>
          <el-form-item prop="height">
            <span slot="label">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：</span>
            <height-picker class="right-selectbox" v-model="optionInfo.height"></height-picker>
          </el-form-item>
          <el-form-item prop="education">
            <span slot="label">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：</span>
            <plain-picker class="right-selectbox" v-model="optionInfo.education" :options="options.education"></plain-picker>
          </el-form-item>
          <el-form-item prop="ethnic">
            <span slot="label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
            <plain-picker class="right-selectbox" v-model="optionInfo.nation" :options="options.nation"></plain-picker>
          </el-form-item>
          <el-form-item label="有无照片：" prop="picture">
            <plain-picker class="right-selectbox" v-model="optionInfo.hasPic" :options="options.hasPic"></plain-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="option-btn">
        <div class="btn">保存</div>
        <!-- <div class="btn">跳过此页</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import PlainPicker from '@/components/PlainPicker'
import AreaPicker from '@/components/AreaPicker'
import AgePicker from './components/AgePicker'
import HeightPicker from './components/HeightPicker'

export default {
  components: { UserHeader, PlainPicker, AreaPicker, AgePicker, HeightPicker },
  data () {
    return {
      optionInfo: {
        address: [],
        age: [],
        marriageStatus: '',
        height: [],
        nation: '',
        ethnic: '',
        hasPic: ''
      },
      options: {
        marriageStatus: ['未婚', '离异', '丧偶'],
        education: ['高中及中专以下', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
        nation: ['汉族', '藏族', '朝鲜族', '蒙古族', '回族', '满族', '维吾尔族', '壮族', '彝族', '苗族', '其它'],
        hasPic: ['无照片', '有照片']
      }
    }
  },
  computed: {
    optionAddressText () {
      let result = ''
      let province = this.optionInfo.address[0]
      // let city = this.optionInfo.address[1]
      if (province) {
        result += province
        // if (city) {
        //   result += ' ' + city
        // }
      } else {
        result += '不限'
      }
      return result
    },
    optionHeightText () {
      let result = ''
      let min = this.optionInfo.height[0]
      let max = this.optionInfo.height[1]
      if (min) {
        result += min + '厘米'
        if (max) {
          result += `~${max}厘米`
        } else {
          result += '以上'
        }
      } else {
        result += '不限'
      }
      return result
    },
    optionAgeText () {
      let result = ''
      let min = this.optionInfo.age[0]
      let max = this.optionInfo.age[1]
      if (min) {
        result += min + '岁'
        if (max) {
          result += `~${max}岁`
        } else {
          result += '以上'
        }
      } else {
        result += '不限'
      }
      return result
    }
  }

}
</script>

<style lang="less" scoped>
.my-option-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .option-info-container {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
    .seprator{
      margin: 0 5px;
      height: 0;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    .option-info-banner {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      text-align: left;
      line-height: 30px;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .option-info-box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      .option-info-content {
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
          }
        }
      }
    }
    .option-info-form {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 40px;
      .form-sector{
        box-sizing: border-box;
        .right-selectbox {
          width: 90%;
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
}
</style>
