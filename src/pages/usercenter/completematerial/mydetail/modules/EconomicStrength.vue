<template>
  <div class="economic-content-root">
    <div class="economic-content">
      <div class="content-box">
        <div class="left-label">
          <div class="label">投资理财：</div>
          <div class="remark">(可多选)</div>
        </div>
        <div class="right-checkbox">
          <el-checkbox-group v-model="investList">
            <div class="checkbox-column">
              <el-checkbox label="银行存款"></el-checkbox>
              <el-checkbox label="购买保险"></el-checkbox>
              <el-checkbox label="期货投资"></el-checkbox>
              <el-checkbox label="收藏品投资"></el-checkbox>
            <!-- </div>
            <div class="checkbox-column"> -->
              <el-checkbox label="购买基金"></el-checkbox>
              <el-checkbox label="理财产品投资"></el-checkbox>
              <el-checkbox label="贵金属投资"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="content-box">
        <div class="left-label">
          <div class="label">外债贷款：</div>
          <div class="remark">(可多选)</div>
        </div>
        <div class="right-checkbox">
          <el-checkbox-group v-model="debitList">
            <div class="checkbox-column">
              <el-checkbox label="无外债贷款"></el-checkbox>
              <el-checkbox label="留学贷款"></el-checkbox>
            <!-- </div>
            <div class="checkbox-column"> -->
              <el-checkbox label="房贷"></el-checkbox>
              <el-checkbox label="助学贷款"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="content-box">
        <div class="left-label">
          <div class="label">经济观念：</div>
        </div>
        <plain-picker class="right-selectbox" v-model="economicConcept" :options="options"></plain-picker>
      </div>
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
      investList: [],
      debitList: [],
      economicConcept: '',
      options: ['基本是月光族，及时享乐主义', '每月会存点钱，但是也要享受生活', '每月有固定存款，剩余自由分配', '为了未来努力攒钱，勤俭节约过日子']
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: ['investList', 'debitList', 'economicConcept']
        })
        let {investList, debitList, economicConcept} = res.data.details
        this.investList = investList || []
        this.debitList = debitList || []
        this.economicConcept = economicConcept[0]
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: {
            investList: this.investList,
            debitList: this.debitList,
            economicConcept: this.economicConcept
          }
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
.economic-content-root{
  width: 73%;
  box-sizing: border-box;
  .economic-content {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 5px;
    .content-box {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      .left-label {
        box-sizing: border-box;
        padding: 10px 0 0 0;
        display: flex;
        flex-direction: column;
        .label {
          margin-bottom: 10px;
          font-size: 14px;
          width: 70px;
        }
        .remark {
          font-size: 14px;
          color: #EF356E;
        }
      }
      .right-checkbox {
        box-sizing: border-box;
        padding: 10px 0 0 0;
        .el-checkbox-group {
          display: flex;
          flex-direction: row;
          .el-checkbox {
            margin-bottom: 5px;
          }
          .el-checkbox+.el-checkbox {
            margin-left: 0;
          }
          .checkbox-column {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
          }
        }
      }
      .right-selectbox {
        width: 50%;
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
