<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-home">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name:"CityHeader"
}
</script>
<style lang="less" scoped>
.header{
    position: relative;
    height: .86rem;
    line-height: .86rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
    font-size: .32rem;
    .back-home{
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        height: .64rem;
        color: #fff;
    }
}
</style>

