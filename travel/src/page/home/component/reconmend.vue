<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button>查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:"HomeReconmend",
  props:{
    list:Array
  }
}
</script>
<style lang="less" scoped>
.title{
  background: #eee;
  color: #333;
  padding:.1rem .3rem;
  margin-top: .2rem;
}
.item{
  display: flex;
  padding:.2rem .3rem;
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    
  }
  .item-info{
    flex: 1;
    margin-left: .2rem;
    .item-title{
      line-height: .54rem;
    }
    .item-desc{
      font-size: .28rem;
      color: #bbb;
      line-height: .44rem;
    }
    button{
    padding:0 .1rem;
    background: #ff9300;
    color: #333;
    border-radius: .02rem;
    margin-top: .2rem;
    
  }
  }
  
}
</style>

