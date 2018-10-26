<template>
    <header class="header"> 
        <div class="search-form"> 
            <form action="//mall.meizu.com/new/s" method="get"> 
                <div class="so-keyword"> 
                <input class="so-input" type="search" name="keyword" v-model="searchText" @keyup=doSearch > 
                <span class="btn-clear"></span> 
                </div> 
                <button type="submit" name="">搜索</button> 
            </form> 
        </div> 
        <div class="goback"> 
            <a href="#" onclick="javascript:history.back(-1);" class="btn-back"> 
                <i class="iconfont ico-back"></i> 
            </a> 
        </div> 
    </header>
</template>

<script>
export default{
    data(){
        return {
            searchText:""
        }
    },
    methods:{
        doSearch(){
            this.$store.state.searchText=this.searchText;
            
         }   
    }
}
</script>

<style>

</style>
