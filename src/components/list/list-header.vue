<template>
    <header class="header orient-h fixed-top">
        <a class="header-back" id="page-nav-back" href="#" onclick="javascript:history.back(-1);"></a>
        <div class="title" v-text="type[category]"></div>
        <div class="qtool">
            <a href="#/search" id="btn-search"><i class="iconfont ico-search"></i></a>
        </div>
    </header>   
</template>

<script>
export default{
    data(){
        return {
            type:['手机','配件','影音','智能数码','居家生活'],
            eng:['phone','parts','ears','phone','life'],
            category:''
        }
    },
    mounted(){
        this.category=location.search.split('?')[1].split('=')[1];

        this.$store.state.type=this.eng[this.category];
 
            

    }
}
</script>

<style>

</style>
