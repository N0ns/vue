<template>
    <div class="topr">
        <a href="/" class="back-btn"><i class="iconfont icon-arrow-left reback"></i></a>
        <div class="member-info">
            <a :href="go">
                <div class="img-box"><img src="//mall.res.meizu.com/member/img/login.png"></div>
                <span class="name" v-show="isLogin" >{{phone}}</span>
                <span class="name" v-show="!isLogin" >点击登录</span>
            </a>
        </div>
        <div class="member-index-message">
                <a  class="message-btn">
                    <i class="iconfont icon-message-01"></i>
                </a>
        </div>
    </div>
</template>

<script>
import common from '../../lib/js/common.js'
export default{
    data(){
        return {
            login:false,
            phone:'',
            go:'/'

        }
    },
    computed:{
        isLogin(){
            this.login=this.$store.state.isLogin;
            if(this.login){
                this.go='/'
            }else{
               this.go='#/login'
            }
            return this.login
        }
    },
    mounted(){
        this.phone=common.Cookie.get('phone');
        if(this.phone ===''){
            this.login = false
            this.tips = '点击登录'
        }else{
            this.login = true
            this.tips = this.phone
        }

    }
}
</script>

<style>
.member-index .topr {
    background: url(https://mall.res.meizu.com/member/img/bg-account-6b2c646.jpg) no-repeat 50%;
    background-size: 100%;
    width: 100%;
    height: 125px;
    position: relative;
}
.member-index .topr .back-btn {
    margin-top: 13px;
    width: 22px;
    height: 17px;
    text-align: center;
    line-height: 18px;
    z-index: 7;
    padding-left: 10px;
}

.member-index .topr .back-btn, .public-top-left-vertical {
    position: absolute;
    top: 0;
    /*left: 0;*/
}
a {
    color: #666;
    text-decoration: none;
}
.member-index .topr .reback, .member-index .topr .reback:before {
    color: #fff;
    font-size: .41667rem;
}
.member-index .topr .reback, .member-index .topr .reback:before {
    color: #fff;
    font-size: 1.41667rem;
}

.iconfont:before {
    float: none!important;
    width: auto!important;
    height: auto!important;
    vertical-align: middle!important;
}
.icon-arrow-left:before {
    content: "\E600";
}
.member-index .topr .member-info {
    width: 100%;
    text-align: center;
}
.member-index .topr .member-info, .public-center-completely, .service .up-proof .proof-list .imging img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.member-index .topr .member-info .img-box {
    width: 68px;
    height: 66px;
    border: 1px solid #fff;
    border-radius: 30px;
    background-color: #fff;
    margin: 5px auto 0;
}
.member-index .topr .member-info img {
    width: 68px;
    height: 66px;
    line-height: 3.88889rem;
    display: block;
    border-radius: 1.06944rem;
}
img, textarea {
    border: none;
    vertical-align: middle;
}
.member-index .topr .member-info span {
    display: block;
    color: #fff;
    font-size: 10px;
    margin-top: 9px;
}
.member-index .topr .message-btn {
    right: 9px;
    display: block;
    margin-top: 14px;
    width: 18px;
    height: 18px;
    color: #fff;
}

.member-index .topr .message-btn, .public-top-right-vertical {
    position: absolute;
    top: 0;
    /*right: 0;*/
}
a {
    color: #666;
    text-decoration: none;
}
.member-index .topr .message-btn .iconfont, .member-index .topr .message-btn .iconfont:before {

    color: #fff;
}
.iconfont:before {
    float: none!important;
    width: auto!important;
    height: auto!important;
    vertical-align: middle!important;
}
.icon-message-01:before {
    content: "\E603";
}
.iconfont {
    font-size: 18px;
}
</style>
