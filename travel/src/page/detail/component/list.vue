<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title">
                <span class="item-title-icon">{{item.title}}</span>
            </div>
            <div v-if="item.children">
                <detail-list :list="item.children" class="item-children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailList",
    props: {
        list:Array
    }
}
</script>
<style lang="less" scoped>
.item{
    line-height:.8rem;
    padding:0 .2rem;
    font-size:.32rem;
    .item-title{
        border-bottom:.02rem solid #eee;
        .item-title-icon{
            padding:0 .5rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            width: .36rem;
            height: .36rem;
            background-size: .4rem 3rem;
            position: relative;
            left: .06rem;
            top: .06rem;
        }
    }
    .item-children{
        padding:0 .1rem
    }
}
</style>
