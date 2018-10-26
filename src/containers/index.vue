<template>
    <div :class="{'no-scroll':noScroll}">
        <xheader/>
        <xnav/>
          <div class="index-container">
            <xbanner/>
            <xhot/>
            <xad/>
            <xphone/>
            <xcomment/>
            <xvideo/>
            <xbacktop/>
          </div>
          <xservice/>
          <xcontact/>
          <xfoot/>
  </div>
</template>

<script>
import '../lib/css/index.css'
import xheader from '../components/index/Xheader.vue'
import xnav from '../components/index/Xindex-nav.vue'
import xbanner from '../components/index/Xbanner.vue'
import xhot from '../components/index/Xhot.vue'
import xad from '../components/index/Xad.vue'
import xphone from '../components/index/Xphone.vue'
import xcomment from '../components/index/Xcomment.vue'
import xvideo from '../components/index/Xvideo.vue'
import xbacktop from '../components/index/Xbacktop.vue'
import xservice from '../components/index/Xservice.vue'
import xcontact from'../components/index/Xcontact.vue'
import xfoot from '../components/index/Xfoot.vue'
export default {
  data(){
    return {

    }
  },
  computed:{
    noScroll(){
      return this.$store.state.isShowMenu;
    }
    
  },
  components: {
    xheader,
    xnav,
    xbanner,
    xhot,
    xad,
    xphone,
    xcomment,
    xvideo,
    xbacktop,
    xservice,
    xcontact,
    xfoot
  },
  mounted(){
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
  }
}

</script>

<style>
  .no-scroll{
    height: 100%;
    overflow: hidden;
    
}
  .index-container {
    background-color: #f4f4f4;
    overflow: hidden;
    padding-top: 24vw;
}
</style>
