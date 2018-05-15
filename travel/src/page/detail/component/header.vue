<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-home">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="handleStyle">
            经典详情
            <router-link to="/">
                <div class="iconfont back-home">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailHeader",
    data () {
        return {
            showAbs: true,
            handleStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll () {
            console.log(111)
            const top = document.documentElement.scrollTop
            if(top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.handleStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
<style lang="less" scoped>
.header-abs{
    z-index:99;
    position:absolute;
    top:.2rem;
    left:.2rem;
    width:.8rem;
    height:.8rem;
    border-radius:100%;
    background:rgba(0,0,0,0.8);
    text-align:center;
    line-height:.8rem;
    .back-home{
        color:#fff;
    }
}
.header-fixed{
    z-index:2;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:.86rem;
    line-height:.86rem;
    background:#00ddf4;
    text-align:center;
    color:#fff;
    .back-home{
        color:#fff;
        width:.86rem;
        height:.86rem;
        position:absolute;
        left:0;
        top:0;
    }
}
</style>
