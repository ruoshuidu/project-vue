<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
            <img alt="" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
  name:"HeaderSwiper",
  props:{
      list:Array
  },
  data() {
    return {
        swiperOption: {
            autoplay:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination'
            }
        }
    }}
}


</script>
<style lang="less" scoped>

.swiper-container{
    width:100%;
    height: 0;
    overflow: hidden;
    padding-bottom:31.95%;
   img{
       width: 100%;
   }
   
}
</style>

