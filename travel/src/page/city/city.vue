<template>
  <div>
      <city-header></city-header>
      <city-search :city="cities"></city-search>
      <city-list :hot="hotCities" :city="cities" :letter="letter"></city-list>
      <city-alphabet :city="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
import CityAlphabet from './component/alphabet'
export default {
  name:"City",
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
  data(){
    return{
      cities:{},
      hotCities:[],
      letter:""
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.HandlegetCityInfoSucc)
    },
    HandlegetCityInfoSucc(res){
      res = res.data 
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  mounted(){
    this.getCityInfo()
  }
}

</script>
<style>

</style>
