import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home'
import '../asset/style/reset.css'
import '../asset/style/border.css'
import '../asset/style/iconfont.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
