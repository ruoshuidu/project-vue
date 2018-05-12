<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-home">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            请输入搜索内容            
        </div>
        <div class="header-right">
            {{this.city}}
           <span class="iconfont">&#xe64a;</span>
        </div>
    </div>
</template>
<script>
export default {
  name:"HomeHeader",
  props:{
      city:String
  }
}
</script>
<style lang="less" scoped>
.header{
    display: flex;
    height:.86rem;
    background: #00bcd4;
    color:#fff;
    line-height: .86rem; 
    .header-left{
        padding:0 .25rem;
        float: left; 
        .back-home{
            font-size: .35rem;
        }       
    }
    .header-input{
        flex:1;
        color: #ccc;
        background: #fff;
        padding:0 .1rem;
        border-radius:.04rem;
        height: .62rem;
        margin-top: .12rem;
        line-height: .62rem;
    }
    .header-right{
        width: 1rem;
        float:right;
        margin-left:.15rem;
        margin-right: .15rem;
    }
}
</style>

