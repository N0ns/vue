<template>
    <div id="content" class="content">
        <form id="mainForm" class="main-form" enctype="application/x-www-form-urlencoded" novalidate="novalidate">
            <div class="tab-title">
                <a class="linkABlue" href="javascript:void(0);">注册</a>
            </div>
            <div class="tip-box " :class="{'visiblility-hidden':result}">
                <i class="err-ico"></i>
                <span class="tip-font">手机号或密码不合法</span>
                <span class="close-ico"></span>
            </div>
            <div class="tip-box " v-show=isOk>
                <i class="err-ico"></i>
                <span class="tip-font">{{tips}}</span>
                <span class="close-ico"></span>
            </div>
            
            <div class="normalInput cycode-box show-cycode" id="cycode-box">
                <div class="cycode-selectbox">
                        <span class="cycode-selected">
                            <input readonly="" class="ipt-cycode aaa" id="cycode" value="+86" style="margin-bottom: 20px;">
                            <i class="arrow-down"></i>
                        </span>
                    <input id="phone" name="phone" class="ipt-phone inp-focus" maxlength="11" placeholder="手机号码" v-model="phoneNum" >
                </div>
  
            </div>
                <div class="normalInput hide">
                <input type="text" name="kapkey" class="inp-focus" id="kapkey" maxlength="6" autocomplete="off" placeholder="短信验证码">
                <span class="form-line"></span>
                <a id="getKey" href="javascript:void(0);" class="linkABlue invalidBtn">获取验证码</a>
            </div>
                <div class="normalInput hide">
                <input type="password" name="password" class="inp-focus" id="password" maxlength="16" v-model="password"  placeholder="密码">

              
            </div>

                
                

            <div id="flymeService" class="rememberField" style="font-size:12px;">
                <label class="pointer" for="acceptFlyme" tabindex="0">点击立即注册，即表示您同意并愿意遵守</label>
                <a href="/serviceAgreement" target="_blank" class="linkABlue">Flyme服务协议</a>
                <label class="pointer">和</label>
                <a href="http://www.meizu.com/legal.html" target="_blank" class="linkABlue">法律声明</a>
            </div>

                <a id="nextStep" class="fullBtnBlue register-btn" @click="check">立即注册</a>
            <a id="toLogin" class="btn-go2register" href="#/login">登录</a>

        </form>
  
    </div>
</template>

<script>
export default{
    data(){
        return {
            phoneNum:'',
            password:'',
            result:true,
            tips:''
        }
    },
    computed:{
        isOk(){
            if(this.tips===''||!this.result){
                return false
            }else{
                return true
             
        }
            }
    },
    methods:{
        check(){
            var self = this
            var phone = this.phoneNum;
            var key = this.password;
            var regPhone = /^1[3-9]\d{9}$/;
            var regKey = /^[^\s]{6,16}$/;
            if(!regPhone.test(phone)||!regKey.test(key)){
                this.result=false
                return false;
            }else{
                this.result=true;
                $.ajax({
                    type: "POST",
                    url: "http://localhost:4000/resign",
                    data: {
                        name: this.phoneNum,
                        password: this.password
                    },
                    success(data) {
                        if(data==="注册成功"){
                            alert(data)
                            location.href='#/login'
                        }else{
                            self.tips = data
                        }
                    }
                })
            }

        }


    }
}
</script>

<style scoped>
#mainForm {
    margin: 10px auto;
}
.main-form {
    width: 246px;
    margin: 60px auto 0;
    overflow: visible;
    height: auto;
}
.tab-title {
    font-size: 18px;
    /* margin-bottom: 60px; */
    margin-top: 60px;
    text-align: center;
}
a.linkABlue:link, a.linkABlue:visited {
    color: #00a7ea;
}
.visiblility-hidden {
    visibility: hidden;
}
.tip-box {
    position: relative;
    height: 33px;
    display: table;
    width: 100%;
    margin-bottom: 0px;
    margin-top: 26px;
    border: solid 1px #ffc2b3;
    background: #ffd1ca;
    border-radius: 2px;
}
.err-ico {
    background: url(https://uc-res.mzres.com/resources/uc/web/member/images/error-ico.png);
    width: 16px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
}
.tip-font {
    color: #666;
    font-size: 12px;
    padding-right: 25px;
    padding-left: 35px;
    display: table-cell;
    vertical-align: middle;
}
.txt-box {
    height: 33px;
    padding: 5px 0px;
    color: #666;
    font-size: 12px;
}
.normalInput {
    /*height: 46px;*/
    line-height: 46px;
}
.show-cycode .cycode-selected, .phone_num {
    line-height: 28px!important;
    height: 28px!important;
}
.show-cycode .cycode-selected {
    display: inline-block;
    width: 60px;
    border-right: 1px solid #DDD;
    cursor: pointer;
}

#mainForm input {
    line-height: 15px;
    
    /*padding: 10px 0;*/
}
@media (max-width: 320px)
.rememberField, .rememberField a, .rememberField label {
    font-size: 12px;
}
a.fullBtnBlue {
    display: inline-block;
    height: 50px;
    width: 342px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    *margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    background-color: #32a5e7;
    color: #fff;
    border-radius: 2px;
}
@media (max-width: 320px)
a.fullBtnBlue {
    padding: 1rem 0.3125rem;
}

a.register-btn {
    width: auto;
    display: block;
    font-size: 14px;
}
#toLogin {
    color: #474747;
    cursor: pointer;
}
.btn-go2register {
    display: block;
    text-align: center;
}
.rememberField {
    width: 20.625rem;
    height: 2.4rem;
    line-height: 1.4rem;
    margin-bottom: 15px;
}
input{
        position: relative;
    display: inline-block;
    padding: 0px 10px;
    width: 180px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    margin-bottom: 20px;
    border: 1px solid #dadada;
    outline: none;
    color: #474747;
    *float: left;
    zoom: 1;
    overflow: hidden;
    *line-height: 50px;
}
.ipt-cycode{
    text-align: center;
    width:61px;
}
</style>
