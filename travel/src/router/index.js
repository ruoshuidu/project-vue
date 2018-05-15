import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home'
import City from '../page/city/city'
import Detail from '../page/detail/detail'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/city',
    name: 'city',
    component: City
  },{
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }]
})
