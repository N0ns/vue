<template>
    <div class="app detail" id="pageDetail">
        <xheader/>
        <main id="main" class="main">
            <xgoods/>
            <xrecommend/>
            <xcon/>
        </main>
        <xfooter/>
        <xprops/>
    </div>
</template>

<script>
import xheader from '../components/details/details-header.vue'
import xgoods from '../components/details/details-goods.vue'
import xrecommend from '../components/details/details-recommend.vue'
import xcon from '../components/details/details-con.vue'
import xfooter from '../components/details/details-footer.vue'
import xprops from '../components/details/details-props.vue'
export default{
    components:{
        xheader,
        xgoods,
        xrecommend,
        xcon,
        xfooter,
        xprops
    },
    mounted(){
        this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
    }
}
</script>

<style scoped>
#main {
    padding-top: 40px;
    overflow: hidden;
}

</style>
