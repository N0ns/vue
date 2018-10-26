<template>
    <div class="member-index">
        <xtop/>
        <xorder/>
        <xmember/>
        <xother/>
        <xexit/>
    </div>
    
</template>

<script>

import xtop from '../components/acount/topr.vue'
import xorder from '../components/acount/order.vue'
import xmember from '../components/acount/member.vue'
import xother from '../components/acount/other.vue'
import xexit from '../components/acount/exit.vue'
export default{
    components:{
        xtop,
        xorder,
        xmember,
        xother,
        xexit
        
    },
    
}
</script>

<style>
.member-index {
    background-color: #eee;
}
.member-accident, .member-coupon-list, .member-deliver, .member-index, .member-message, .member-order-detail, .member-order-list, .scroll-box, .service .change-detail, .service .deliver-gz, .service .return-detail, .service .scroll-view, .service .service-apply {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    overflow-x: hidden;

}
</style>
