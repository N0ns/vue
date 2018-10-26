<template>
    <header class="header">
        <div class="title">购物车</div> 
        <div class="goback">
            <a href="javascript:history.back(-1);" >
                <i class="iconfont ico-back"></i>
            </a>
        </div>
        <div class="qtool" @click='isEdit' v-show="!empty">
            <a  class="btn-modify" v-show='edit' >完成</a>
            <a  class="btn-modify" v-show='!edit' >编辑</a>
            
        </div> 
    </header>
</template>

<script>
import common from '../../lib/js/common.js'
export default{
    data(){
        return {
            edit:false,
            empty:true


        }
    },
    methods:{
        isEdit(){
            this.edit=!this.$store.state.edit
            this.$store.state.edit=this.edit
            // this.$store.state.allCheck=false
        }
    },
    mounted(){
        ;
        if(common.Cookie.get('cartList') ===''||common.Cookie.get('cartList')==='[]'){
            this.empty = true

        }else{
            this.empty = false
      
        }
    }
}
</script>

<style>
.cart .header .qtool a {
    padding: 12px 12px 0;
    color: #999;
    line-height: 20px;
}
</style>
