import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Aboutus from '@/pages/aboutus/Aboutus'

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
    }
  ]
})
