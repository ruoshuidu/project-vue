<template>
<div>
    <div class="banner" @click="handleClickShow">
        <img 
            src="https://img1.qunarzz.com/p/tts7/1804/50/d9b39dc2fa86bc02.jpg_r_640x420x90_57d34485.jpg"
            class="banner-img"
        />
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋世界AAAAA</div>
            <div class="banner-num">
                <span class="iconfont">&#xe632;</span>
                2/6
            </div>
        </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showImgs" @close="handleClickClose"></common-gallery>
</div>
</template>
<script>
import CommonGallery from '../../../common/gallery/gallery'
export default {
    name:"DetailBanner",
    components: {
        CommonGallery
    },
    data () {
        return {
            showImgs:false,
            imgs:[
                'https://img1.qunarzz.com/p/tts7/1804/50/d9b39dc2fa86bc02.jpg_r_1280x840x90_d56bf03a.jpg',
                'https://img1.qunarzz.com/p/tts7/1804/e0/e09e9dfb6d93db02.jpg_r_1280x840x90_c6de6f15.jpg',
                'https://img1.qunarzz.com/p/tts5/1804/d6/559c405e5a2c1b02.jpg_r_1280x840x90_b1d0859c.jpg'
            ]
        }
    },
    methods:{
        handleClickShow () {
            this.showImgs = true;
        },
        handleClickClose () {
            this.showImgs = false;
        }
    }
}
</script>
<style lang="less" scoped>
.banner{
    position:relative;
    overflow:hidden;
    padding-bottom:50%;
    height:0;
    .banner-img{
        width:100%;
    }
    .banner-info{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        .banner-title{
            height:.6rem;
            line-height:.6rem;
            padding:0 .2rem;
            font-size:.32rem;
            color:#fff;
            flex:1;
        }
        .banner-num{
            height:.4rem;
            line-height:.4rem;
            background:rgba(0,0,0,0.6);
            color:#fff;
            font-size:.32rem;
            padding:0 .2rem;
            margin:.1rem .2rem 0 0 ;
            border-radius:.2rem;
        }
    }
}
</style>
