<template>
    <div class="icons">
        <swiper>
            <swiper-slide  v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img-content">
                        <img :src="item.imgUrl" alt="" class="icon-img">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>   
            </swiper-slide>
        </swiper>
    </div>   
</template>
<script>
export default {
  name:"HomeIcon",
  props:{
      list:Array
  },
  computed:{
      pages(){
          const pages = [];
          this.list.forEach((item,index) => {
              const page = Math.floor(index / 8);
              if(!pages[page]){
                 pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>
<style lang="less" scoped>
.icons{
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    margin-top: .1rem;
    .icon{
        position: relative;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        overflow: hidden;
        .icon-img-content{
            padding:.1rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            .icon-img{
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            line-height: .44rem;
            height: .44rem;
            color:#333;
        }
    }
}
</style>
