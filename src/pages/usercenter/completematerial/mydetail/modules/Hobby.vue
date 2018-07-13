<template>
  <div class="hobby-content-root">
    <div class="hobby-content">
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word">喜欢的体育运动</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveSports">
            <div class="check-column-box">
              <el-checkbox v-for="sport in options.sport.sportColumn1"
                :label="sport" :key="sport" :value="sport"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="sport in options.sport.sportColumn2"
                :label="sport" :key="sport" :value="sport"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #FFC663">喜欢的食物</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveFoods">
            <div class="check-column-box">
              <el-checkbox v-for="food in options.food.foodColumn1"
                :label="food" :key="food" :value="food"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="food in options.food.foodColumn2"
                :label="food" :key="food" :value="food"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #77D8F5">喜欢的书籍</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveBooks">
            <div class="check-column-box">
              <el-checkbox v-for="book in options.book.bookColumn1"
                :label="book" :key="book" :value="book"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="book in options.book.bookColumn2"
                :label="book" :key="book" :value="book"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #8AA0F3">喜欢的电影</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveMovies">
            <div class="check-column-box">
              <el-checkbox v-for="movie in options.movie.movieColumn1"
                :label="movie" :key="movie" :value="movie"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="movie in options.movie.movieColumn2"
                :label="movie" :key="movie" :value="movie"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #519EE6">关注的节目</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveTVs">
            <div class="check-column-box">
              <el-checkbox v-for="show in options.show.showColumn1"
                :label="show" :key="show" :value="show"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="show in options.show.showColumn2"
                :label="show" :key="show" :value="show"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #ED877B">娱乐休闲</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveEntertainments">
            <div class="check-column-box">
              <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn1"
                :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn2"
                :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #FEB5BC">业余爱好</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveHobbies">
            <div class="check-column-box">
              <el-checkbox v-for="hobby in options.hobby.hobbyColumn1"
                :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="hobby in options.hobby.hobbyColumn2"
                :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item-content-box">
        <div class="item-label-box">
          <div class="label-word" style="color: #40D1CC">喜欢的旅游去处</div>
        </div>
        <div class="item-check-box">
          <el-checkbox-group v-model="checkBoxList.loveDestinations">
            <div class="check-column-box">
              <el-checkbox v-for="travel in options.travel.travelColumn1"
                :label="travel" :key="travel" :value="travel"></el-checkbox>
            </div>
            <div class="check-column-box">
              <el-checkbox v-for="travel in options.travel.travelColumn2"
                :label="travel" :key="travel" :value="travel"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
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
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      checkBoxList: {
        loveSports: [],
        loveFoods: [],
        loveBooks: [],
        loveMovies: [],
        loveTVs: [],
        loveEntertainments: [],
        loveHobbies: [],
        loveDestinations: []
      },
      options: {
        sport: {
          sportColumn1: ['足球', '羽毛球', '手球', '健身', '汽车', '柔道', '水上运动', '游泳', '滑雪/滑冰', '武术', '网球', '保龄球', '高尔夫', '钓鱼', '篮球', '乒乓球', '不喜欢运动'],
          sportColumn2: ['橄榄球', '跑步', '舞蹈', '空手道', '航海', '瑜伽', '排球', '壁球', '棒球', '自行车', '体操', '摩托车', '跆拳道', '潜水', '拳击', '其他']
        },
        food: {
          foodColumn1: ['中国菜', '意大利菜', '健康食品', '法国菜', '泰国菜', '日本菜', '其他'],
          foodColumn2: ['印度菜', '俄罗斯菜', '素食', '烧烤', '快餐', '巧克力和甜点', '无特别爱好']
        },
        book: {
          bookColumn1: ['校园青春', '动漫与幽默', '运动健身', '投资理财', '艺术与摄影', '哲学与宗教', '烹饪与饮食', '人文社科', '励志与成功', '历史传记', '什么都看'],
          bookColumn2: ['旅游', '娱乐时尚', '文学', '政治与军事', '健康与养生', '婚恋与家庭', '自然科学', '期刊杂志', '收藏与鉴赏', '其他']
        },
        movie: {
          movieColumn1: ['爱情', '科幻魔幻', '战争', '西部', '古装武侠', '动画', '剧情', '什么都看'],
          movieColumn2: ['喜剧', '悬疑推理', '音乐歌舞', '历史传记', '动作冒险', '惊悚恐怖', '纪录片', '其他']
        },
        show: {
          showColumn1: ['政治事件', '相声曲艺', '休闲生活', '体育赛事', '畅销书', '其他'],
          showColumn2: ['娱乐八卦', '海选活动', '行业发展', '理财投资', '影视热片', '暂无']
        },
        entertainment: {
          entertainmentColumn1: ['饭店', '电影院', '温泉', '卡拉OK', '剧院', '迪斯科', '咖啡厅', '逛街', '其他'],
          entertainmentColumn2: ['商场', '音乐会', '图书馆/书店', '体育院', '酒吧', '网吧', '游乐场', '自己或朋友家里', '不想说']
        },
        hobby: {
          hobbyColumn1: ['网络', '影视', '手工艺', '烹饪', '体育运动', '动物', '写作', '舞蹈', '绘画', '电子游戏'],
          hobbyColumn2: ['汽车', '音乐', '园艺', '读书', '旅游', '摄影', '购物', '展览', '计算机', '其他']
        },
        travel: {
          travelColumn1: ['惬意海岛', '广袤森里', '江河大川', '繁华都市', '秀美山水', '小桥流水人家', '还没想好'],
          travelColumn2: ['名山古刹', '高原雪域', '隽秀峡谷', '风情名域', '历史遗迹', '其他选择']
        }
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: Object.keys(this.checkBoxList)
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          this.checkBoxList[key] = res.data.details[key]
        })
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: this.checkBoxList
        })
        Toast(res.message)
        console.log(res)
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
.hobby-content-root{
  width: 80%;
  box-sizing: border-box;
  box-sizing: border-box;
  .hobby-content {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    .item-content-box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .item-label-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 5px;
        .label-word {
          color: #71E7C6;
        }
      }
      .item-check-box {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 0;
        .el-checkbox-group {
          display: flex;
          flex-direction: row;
          .el-checkbox {
            margin-bottom: 5px;
          }
          .el-checkbox+.el-checkbox {
            margin-left: 0;
            margin-bottom: 5px;
          }
          .check-column-box {
            width: 50%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            margin: 0 5px;
            text-align: left;
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
