<template>
    <div class="app list">
        <xlistheader/>
        <div class="maincon">
            <section class="brand" id="J_listBrand">
            </section>
            <xfilter/>
            <xlistcon/>
        </div>
        
    </div>
</template>

<script>
import'../lib/css/list.css'
    import xlistheader from '../components/list/list-header.vue'
    import xlistcon from '../components/list/list-con.vue'
    import xfilter from '../components/list/list-filter.vue'
    export default{
        components:{
            xlistheader,
            xfilter,
            xlistcon
        }
    }

</script>
    
<style>








</style>
