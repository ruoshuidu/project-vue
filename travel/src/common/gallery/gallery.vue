<template>
    <div class="wrapper" @click="handleClickShow">
        <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallery-img" alt="" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:"gallery",
    props:{
        imgs:{
            type:Array,
            default () {
                imgs:[]
            }
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type:'fraction',
                },
                observeParents:true,
                observer:true
            }
        }
    },
    methods: {
        handleClickShow() {
            this.$emit('close')
        }
    }
}
</script>
<style lang="less" scoped>
.swiper-container{
    overflow:inherit;
}
.wrapper{
    display:flex;
    flex-direction:column;
    justify-content: center;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#000;
    z-index:99;
    .container{
        height:0;
        padding-bottom:100%;
        .gallery-img{
            width:100%;
        }
        .swiper-pagination{
            color:#fff;
            bottom:-1rem;
        }
    }
}
</style>
