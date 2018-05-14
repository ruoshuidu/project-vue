<template>
  <div class="header">
      <home-header></home-header>
      <header-swiper :list="swiperList"></header-swiper>
      <home-icon :list="iconList"></home-icon>
      <home-reconmend :list="recommendList"></home-reconmend>
      <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './component/header'
import HeaderSwiper from './component/swiper'
import HomeIcon from './component/icon'
import HomeReconmend from './component/reconmend'
import HomeWeekend from './component/weekend'
import axios from 'axios'
export default {
    name:'home',
    data(){
        return {
            swiperList:[],
            weekendList:[],
            iconList:[],
            recommendList:[]
        }
    },
    components:{
        HomeHeader,
        HeaderSwiper,
        HomeIcon,
        HomeReconmend,
        HomeWeekend
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.swiperList = data.swiperList
                this.weekendList = data.weekendList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
            }
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>
<style>

</style>
