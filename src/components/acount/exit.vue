<template>
    <a href="javascript:;" id="j-exit" class="exit" @click="isExit" v-show="isLog" >退出登录</a>
</template>

<script>
import common from '../../lib/js/common.js'
export default{
    data(){
        return {
            phone:'',
            login:false
        }
    },
    computed:{
        isLog(){
            this.$store.state.isLogin =this.login;
            return this.$store.state.isLogin
        }
       
       
    },
    methods:{
        isExit(){
            if(confirm('是否退出账号？')){
                common.Cookie.remove('phone')
                this.login = false
                this.$store.state.isLogin = this.login


            }
        }
    },
    mounted(){
        this.phone=common.Cookie.get('phone')
        if(this.phone!==''){
            this.login = true
        }else{
            this.login = false
        }
        // this.$store.state.isLogin = this.login

    }
}
</script>

<style>
    .member-index .exit {
    background-color: #fff;
    display: block;
    color: #333;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-size: 12px;
    margin-top: 35px;
}
</style>
