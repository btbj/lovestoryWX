import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import(/* webpackChunkName: "Basic" */ '@/pages/login/Login')
const Register = () => import(/* webpackChunkName: "Basic" */ '@/pages/register/Register')
const Home = () => import(/* webpackChunkName: "Basic" */ '@/pages/home/Home')

const Aboutus = () => import(/* webpackChunkName: "News" */ '@/pages/aboutus/Aboutus')
const NewsInfo = () => import(/* webpackChunkName: "News" */ '@/pages/newsinfo/NewsInfo')
const ServiceIntro = () => import(/* webpackChunkName: "News" */ '@/pages/serviceintro/ServiceIntro')
const LoveStory = () => import(/* webpackChunkName: "News" */ '@/pages/lovestory/LoveStory')
const CustomService = () => import(/* webpackChunkName: "News" */ '@/pages/customservice/CustomService')
const Activities = () => import(/* webpackChunkName: "News" */ '@/pages/activities/Activities')
const ActivityDetail = () => import(/* webpackChunkName: "News" */ '@/pages/activities/ActivityDetail')
const ArticleDetail = () => import(/* webpackChunkName: "News" */ '@/pages/articledetail/ArticleDetail')

const FindPartner = () => import(/* webpackChunkName: "Partner" */ '@/pages/findpartner/FindPartner')
const UserInfo = () => import(/* webpackChunkName: "Partner" */ '@/pages/userinfo/UserInfo')

const UserCenter = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/UserCenter')
const DatingRecords = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/datingrecords/DatingRecords')
const FollowerPage = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/datingrecords/modules/FollowerPage')
const FollowingPage = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/datingrecords/modules/FollowingPage')
const HistoryPage = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/datingrecords/modules/HistoryPage')
const VisitorPage = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/datingrecords/modules/VisitorPage')
const CompleteMaterial = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/CompleteMaterial')
const MyBasic = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mybasic/MyBasic')
const MyDetail = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/MyDetail')
const EconomicStrength = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/EconomicStrength')
const LifeStyle = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/LifeStyle')
const WorkStudy = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/WorkStudy')
const Appearance = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/Appearance')
const MarriageConcept = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/MarriageConcept')
const Hobby = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mydetail/modules/Hobby')
const MyIntro = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/myintro/MyIntro')
const MyOption = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/myoption/MyOption')
const MyPics = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/completematerial/mypics/MyPics')
const MyAccount = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/myaccount/MyAccount')
const EditPassword = () => import(/* webpackChunkName: "User" */ '@/pages/usercenter/myaccount/modules/EditPassword')

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
