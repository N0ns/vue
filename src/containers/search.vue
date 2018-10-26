<template>
    <div class="search-box">
        <xheader/>
        <xrecommend/>
        <xhistory/>
        <xkeyword/>
    </div>
</template>

<script>
import xheader from '../components/search/Xheader.vue'
import xrecommend from '../components/search/Xrecommend.vue'
import xhistory from '../components/search/Xhistory.vue'
import xkeyword from '../components/search/Xkeyword.vue'
export default{
    components:{
        xheader,
        xrecommend,
        xhistory,
        xkeyword
    }
}
</script>

<style>

</style>
