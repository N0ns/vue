<template>
    <div id="content" class="content" style="min-height: 370px;">
        <form id="mainForm" class="main-form" enctype="application/x-www-form-urlencoded" novalidate="novalidate">
            <div class="tab-title">
                <a class="linkABlue" id="toAccountLogin" href="javascript:void(0);">账号登录</a>
                <span class="register-line"></span>
                <a class="linkAGray" id="toVCodeLogin" href="javascript:void(0);">验证码登录</a>
            </div>
            <div class="tip-box" v-show="showTips">
                <i class="err-ico"></i>
                <span class="tip-font">{{tips}}</span>
                <span class="close-ico"></span>
            </div>
            <div class="normalInput" style="margin-bottom: 20px;">
                <input class="pl_5 inp-focus" type="text" value="" name="account" id="account" maxlength="50" v-model="phone" placeholder="手机号/ Flyme 账号">
            </div>
            <div class="normalInput">
                <input class="pl_5 inp-focus" type="password" name="password" id="password" maxlength="16" value="" v-model="password" placeholder="密码">
                <div class="clear"></div>
            </div>
  
            <a id="login" class="fullBtnBlue login-btn" @click="login">登录</a>
            <a href="#/resign" id="new_a_mregister" class="btn-go2register" >注册</a>
        </form>
    </div>
</template> 
<script >
import common from '../../lib/js/common.js'
    export default{
    
        data(){
            return {
                phone:'',
                password:'',
                tips:''
            }
        },
        methods:{
            login(){
                var self = this
                if(this.phone===''||this.password===''){
                    this.tips='请输入账号和密码'
                }else{
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:4000/login",
                        data: {
                            name: this.phone,
                            password: this.password
                        },
                        success(data) {
                            if(data==='登录成功'){
                                alert('登录成功')
                                common.Cookie.set('phone',self.phone)
                                self.$store.state.isLogin = true;
                                location.href='/';

                            }else{
                                alert(data)
                            }
           
                        }
                    })
                }
                
            }
        },
        computed:{
            showTips(){
                if(this.tips===''){
                    return false
                }else{
                    return true
                }
            }
        }
        
    }
</script>
<style scoped>

    .main-form {
    width: 20.625rem;
    margin: 60px auto;
    overflow: visible;
    height: auto;
}
.tab-title {
    position: relative;
}
.tab-title {
    font-size: 18px;
     margin-bottom: 60px; 
    margin-top: 35px;
    width: 100%;
    text-align: center;
}
a.linkABlue:link, a.linkABlue:visited {
    color: #32A5E7;
}

.tab-title .linkABlue {
    position: absolute;
    right: 50%;
    margin-right: 25px;
}
.register-line {
    color: #d9d9d9;
    display: inline-block;
    border: 1px solid #dadada;
    border-left: 1px;
    height: 16px;
    line-height: 20px;
    margin-right: 25px;
    margin-left: 25px;
}
a.linkAGray:link, a.linkAGray:visited {
    color: #7f7f7f;
}
.tab-title .linkAGray {
    position: absolute;
    left: 50%;
    margin-left: 25px;
}
input{
        position: relative;
    display: inline-block;
    padding: 0px 10px;
    width: 180px;
    height: 46px;
    line-height: 46px;
    font-size: 14px;
    margin-bottom: 20px;
    border: 1px solid #dadada;
    outline: none;
    color: #474747;
    *float: left;
    zoom: 1;
    overflow: hidden;
    *line-height: 46px;
}
.normalInput input {
    font-size: 14px;
    width: 94%;
    height: 46px;
    *height: 34px;
    line-height: 22px;
    *line-height: 50px;

    line-height: 50px\0;
}
.tip-box {
    position: relative;
    height: 33px;
    display: table;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 26px;
    border: solid 1px #ffc2b3;
    background: #ffd1ca;
    border-radius: 2px;
}

span.inputTip {
    position: absolute;
    top: 13px;
    left: 10px;
    color: #909090;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
}
.normalInput {
    width: 20rem;
    /* height: auto; */
    overflow: hidden;
    clear: both;
    padding: 0 0.3125rem;
    margin-top: 5px;
    margin-bottom: 20px !important;
}
.normalInput {
    width: 276px;
    position: relative;
    /*padding: 0px 10px;*/
    height: 46px;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 26px;

    outline: none;
    color: #474747;
    zoom: 1;
    overflow: hidden;

}
a.fullBtnBlue {
    width: 300px;
    display: block;
    height: 46px;
    font-size: 14px;
    line-height: 46px;
    text-align: center;
    margin-bottom: 10px;
    *margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    background-color: #32a5e7;
    color: #fff;
    border-radius: 2px;
}

a.fullBtnBlue {
    width: 100%!important;
}
.btn-go2register {
    display: block;
    text-align: center;
}
.visiblility-hidden {
    visibility: hidden;
}
.err-ico {
    background: url(../../assets/error-ico.png);
    width: 16px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 10px;
}
.tip-font {
    overflow: visible;
    color: #666;
    font-size: 12px;
    padding-right: 25px;
    padding-left: 35px;
    display: table-cell;
    vertical-align: middle;
}
</style>