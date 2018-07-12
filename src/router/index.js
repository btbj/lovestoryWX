import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Aboutus from '@/pages/aboutus/Aboutus'
import NewsInfo from '@/pages/newsinfo/NewsInfo'
import ServiceIntro from '@/pages/serviceintro/ServiceIntro'
import LoveStory from '@/pages/lovestory/LoveStory'
import FindPartner from '@/pages/findpartner/FindPartner'
import CustomService from '@/pages/customservice/CustomService'
import Activities from '@/pages/activities/Activities'
import ActivityDetail from '@/pages/activities/ActivityDetail'
import UserCenter from '@/pages/usercenter/UserCenter'
import DatingRecords from '@/pages/usercenter/datingrecords/DatingRecords'
import FollowerPage from '@/pages/usercenter/datingrecords/modules/FollowerPage'
import FollowingPage from '@/pages/usercenter/datingrecords/modules/FollowingPage'
import HistoryPage from '@/pages/usercenter/datingrecords/modules/HistoryPage'
import VisitorPage from '@/pages/usercenter/datingrecords/modules/VisitorPage'
import CompleteMaterial from '@/pages/usercenter/completematerial/CompleteMaterial'
import MyBasic from '@/pages/usercenter/completematerial/mybasic/MyBasic'
import MyDetail from '@/pages/usercenter/completematerial/mydetail/MyDetail'
import EconomicStrength from '@/pages/usercenter/completematerial/mydetail/modules/EconomicStrength'
import LifeStyle from '@/pages/usercenter/completematerial/mydetail/modules/LifeStyle'
import WorkStudy from '@/pages/usercenter/completematerial/mydetail/modules/WorkStudy'
import Appearance from '@/pages/usercenter/completematerial/mydetail/modules/Appearance'
import MarriageConcept from '@/pages/usercenter/completematerial/mydetail/modules/MarriageConcept'
import Hobby from '@/pages/usercenter/completematerial/mydetail/modules/Hobby'
import MyIntro from '@/pages/usercenter/completematerial/myintro/MyIntro'
import MyOption from '@/pages/usercenter/completematerial/myoption/MyOption'
import MyPics from '@/pages/usercenter/completematerial/mypics/MyPics'

import MyAccount from '@/pages/usercenter/myaccount/MyAccount'
import EditPassword from '@/pages/usercenter/myaccount/modules/EditPassword'
import Register from '@/pages/register/Register'
import ArticleDetail from '@/pages/articledetail/ArticleDetail'
import UserInfo from '@/pages/userinfo/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/newsinfo',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/serviceintro',
      name: 'ServiceIntro',
      component: ServiceIntro
    },
    {
      path: '/lovestory',
      name: 'LoveStory',
      component: LoveStory
    },
    {
      path: '/findpartner',
      name: 'FindPartner',
      component: FindPartner
    },
    {
      path: '/customservice',
      name: 'CustomService',
      component: CustomService
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/activity/:ActivityId',
      name: 'ActivityDetail',
      component: ActivityDetail
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      redirect: '/usercenter/datingrecords',
      component: UserCenter,
      children: [
        {
          path: 'datingrecords',
          name: 'UserCenter-DatingRecords',
          component: DatingRecords
        },
        {
          path: 'completematerial',
          name: 'UserCenter-CompleteMaterial',
          component: CompleteMaterial
        },
        {
          path: 'myaccount',
          name: 'UserCenter-MyAccount',
          component: MyAccount
        }
      ]
    },
    {
      path: '/usercenter/datingrecords/followerpage',
      name: 'FollowerPage',
      component: FollowerPage
    },
    {
      path: '/usercenter/datingrecords/followingpage',
      name: 'FollowingPage',
      component: FollowingPage
    },
    {
      path: '/usercenter/datingrecords/historypage',
      name: 'HistoryPage',
      component: HistoryPage
    },
    {
      path: '/usercenter/datingrecords/visitorpage',
      name: 'VisitorPage',
      component: VisitorPage
    },
    {
      path: '/usercenter/myaccount/editpassword',
      name: 'EditPassword',
      component: EditPassword
    },
    {
      path: '/usercenter/completematerial/mybasic',
      name: 'MyBasic',
      component: MyBasic
    },
    {
      path: '/usercenter/completematerial/mydetail',
      name: 'MyDetail',
      redirect: '/usercenter/completematerial/mydetail/economic',
      component: MyDetail,
      children: [
        {
          path: 'economic',
          name: 'UserCenter-CompleteMaterial-MyDetail-Economic',
          component: EconomicStrength
        },
        {
          path: 'life',
          name: 'UserCenter-CompleteMaterial-MyDetail-Life',
          component: LifeStyle
        },
        {
          path: 'work',
          name: 'UserCenter-CompleteMaterial-MyDetail-Work',
          component: WorkStudy
        },
        {
          path: 'appearance',
          name: 'UserCenter-CompleteMaterial-MyDetail-Appearance',
          component: Appearance
        },
        {
          path: 'marriage',
          name: 'UserCenter-CompleteMaterial-MyDetail-Marriage',
          component: MarriageConcept
        },
        {
          path: 'hobby',
          name: 'UserCenter-CompleteMaterial-MyDetail-Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/usercenter/completematerial/myintro',
      name: 'MyIntro',
      component: MyIntro
    },
    {
      path: '/usercenter/completematerial/myoption',
      name: 'MyOption',
      component: MyOption
    },
    {
      path: '/usercenter/completematerial/mypics',
      name: 'MyPics',
      component: MyPics
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/article/:ArticleId',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/user/:UserId',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
