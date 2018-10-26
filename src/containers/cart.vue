<template>
    <div id="app-cart" class="app cart"> 
        <xheader/>
        <xempty v-show="isEmpty&&isLog"/>
        <xlogin v-show="!isLog"/>
        <xmain v-show="isLog&&!isEmpty"/>
        <xfooter v-show="isLog&&!isEmpty"/>
    </div>
    
  
</template>

<script>
import xheader from '../components/cart/cart-header.vue'
import xempty from '../components/cart/cart-empty.vue'
import xmain from '../components/cart/cart-main.vue'
import xfooter from '../components/cart/cart-footer.vue'
import xlogin from '../components/cart/cart.logout.vue'
import common from '../lib/js/common.js'
export default{
    components:{
        xheader,
        xempty,
        xmain,
        xfooter,
        xlogin
    },
    data(){
        return {
            empty:true,
            phone:'',

        }
    },
    computed:{
        isLog(){
            return this.$store.state.isLogin
        },
        isEmpty(){
            return this.$store.state.isEmpty
        }
    },
    mounted(){
        this.phone=common.Cookie.get('phone');
        if(this.phone ===''){
            this.$store.state.isLogin = false

        }else{
            this.$store.state.isLogin = true
      
        }
        
        if(common.Cookie.get('cartList')===''||common.Cookie.get('cartList')==='[]'){
            this.$store.state.isEmpty = true

        }else{
            this.$store.state.isEmpty = false
      
        }
    }
}
</script>

<style>
    .cart {
    padding-top: 44px;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #eee;
}
.cart .header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #fff;
}
</style>
