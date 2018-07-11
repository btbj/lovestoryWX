import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Aboutus from '@/pages/aboutus/Aboutus'
import NewsInfo from '@/pages/newsinfo/NewsInfo'
import ServiceIntro from '@/pages/serviceintro/ServiceIntro'
import LoveStory from '@/pages/lovestory/LoveStory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
