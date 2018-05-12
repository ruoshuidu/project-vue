import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Home from '../page/home/home'
import 'swiper/dist/css/swiper.css'
import '../asset/style/reset.css'
import '../asset/style/border.css'
import '../asset/style/iconfont.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
