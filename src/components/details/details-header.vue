<template>
    <header id="header" class="header">
        <a href="#" onclick="javascript:history.back(-1);" class="header-back" id="headerBack" >
            <i class="iconfont icon-goback"></i>
        </a>
        <div class="header-opacity trans" id="headerOpacity" style="opacity: 1;">
            <span>商品详情</span>
        </div>
        <a href="/" class="header-home" id="headerHome" >
            <i class="iconfont icon-home"></i>
        </a>
    </header>
</template>

<script>
export default{
    data(){
        return {
           top:0
        }
    },
    methods:{
        roll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>5){
                $('.header-opacity').fadeIn()
            }
            if(scrollTop===0){
                $('.header-opacity').fadeOut()
            }
            if(this.top<scrollTop){
                $('.content-nav').addClass('fixed')
            }else{
                $('.content-nav').removeClass('fixed')
            }

        }
    },
    mounted(){
        this.top = $('.content-nav').offset().top
        window.addEventListener('scroll', this.roll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.roll)
    }
}
</script>

<style scoped>
header {
    position: fixed!important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: auto!important;
    background: transparent;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.header-back {
    position: absolute;
    left: 8px;
    top: 2px;
    z-index: 3;
    padding: 6px;
}

.header .iconfont {
    position: relative;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.header .iconfont:before {
    line-height: 1;
    font-size: 20px;
    color: #5b5b5b;
}
.header .iconfont:before {
    width: 20px;
    height: 20px;
    line-height: 20px;
}
.header-home {
    position: absolute;
    right: 13px;
    top:5px;
    z-index: 5;
    padding: 3px;
    background: hsla(0,0%,100%,.6);
    border-radius: 50%;
}
.header-opacity {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    opacity: 0;
    text-align: center;
}
.after-brd-b, .header:after {
    bottom: -1px;
}
.after-brd-b, .after-brd-t, .buying:after, .header:after {
    border:none;
}
.header-opacity span {
    font-size: 16px;
    display: inline-block;
}
.content-nav.fixed {
    position: fixed;
    left: 0;
    top: 37px;
    width: 100%;
    background: #fff;
}
</style>
