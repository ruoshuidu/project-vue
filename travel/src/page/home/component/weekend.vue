<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
            <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"HomeWeekend",
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
  margin-top: .3rem;
}
.item{
  padding:.2rem .3rem;
  .item-img-wrapper{
    width: 100%;
    .item-img{
        width: 100%;
    }
  }  
  .item-info{
    margin: .2rem 0 0 .2rem;
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

