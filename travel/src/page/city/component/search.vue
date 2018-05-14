<template>
    <div>
        <div class="search">
            <input class="search-input" v-model="keyword" type="text" placeholder="请输入搜索内容">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li  v-for="item of list" :key="item.id" class="search-item border-bottom" @click="handCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">没有找到匹配城市</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:"CitySearch",
  props:{
      city:Object
  },
  data () {
      return {
          keyword:"",
          list:[],
          timer:null
      }
  },
  methods: {
      handCityClick(city){
          this.$store.dispatch('changeCity',city)
          this.$router.push('/')
      }
  },
  mounted () {
      this.scroll = new BScroll(this.$refs.search)
  },
  watch:{
      keyword () {
          if(this.timer){
              clearTimeout(this.timer)
          }
          if(!this.keyword){
              this.list = []
              return
          }
          this.timer = setTimeout(() => {
              const result = []
              for(let i in this.city) {
                this.city[i].forEach((value) => {
                    if(value.spell.indexOf(this.keyword) >-1 || value.name.indexOf(this.keyword) >-1) {
                        result.push(value)
                    }
                })
              }
              this.list = result
             
          },100)

      }
  }
}
</script>
<style lang="less" scoped>
.search{
    height: .72rem;
    background: #00bcd4;
    padding:0 .1rem;
    .search-input{
        width: 100%;
        box-sizing:border-box;
        height: .62rem;
        line-height: .62rem;
        border-radius:.06rem;
        color: #666;
        text-align: center;
        padding: 0 .1rem;
    }
}
.search-content{
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    ul{
        padding:0 .2rem;
        .search-item{
            height: .6rem;
            line-height: .6rem;

        }
    }
}
</style>
