<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="abs"></div>
    </div>
</template>
<script>
import DetailBanner from './component/banner'
import DetailHeader from './component/header'
import DetailList from './component/list'
import axios from 'axios'
export default {
    name:"detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list:[{
                title:'成人票',
                children:[{
                    title:"成人三联票"
                },{
                    title:"成人五联票"
                }]
            },{
                title:'老年票'
            },{
                title:'学生票'
            },{
                title:'儿童票'
            }]
        }
    },
    methods:{
        getDetailInfo () {
            axios.get('/api/detail.json?id=' + this.$router.params.id)
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>
<style lang="less" scoped>
.abs{
    height:40.5rem;
}
</style>
