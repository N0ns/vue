<template>
<div class="header-wrapper" i>

    <header class="index-header-bar" i>
      <a href="#"  class="index-logo">
         <img class="logo" src="../../assets/logo.svg" width='65' height= '26'/>

      </a>
      <a href="#/search"  class="icon-search"></a>
      <a href="#/cart"   class="shop-cart"></a>
      <span class="icon-nav-btn" @click="showMenu" ></span>
    </header>

    <div :class="{active:isShowMenu}" class="header-menu " i>
      <span @click="showMenu" class="close-btn" i></span>
      <a href="#" class="header-menu-logo">魅族官网</a>
      <div class="content">
        <ul i>
        <li>        <a href="#/acount">          <img src="https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png" alt="">          <span>个人中心</span>        </a>        </li>
        <li>        <a href="https://ordercenter.mall.meizu.com/mall/order/init.html?click=mgw_menu_group_1_2" data-mtype="mgw_menu_group_1_2">          <img src="https://fms.res.meizu.com/dms/2018/08/14/00963788-63ab-4dfc-8722-b59d4096c437.png" alt="">          <span>我的订单</span>        </a>        </li>
        <li>        <a href="https://me.m.meizu.com/home/m/redenvelop_list?click=mgw_menu_group_1_3" data-mtype="mgw_menu_group_1_3">          <img src="https://fms.res.meizu.com/dms/2018/08/14/6c017770-c969-472b-a9b5-47eca996be65.png" alt="">          <span>我的红包</span>        </a>        </li><li>        <a href="https://me.m.meizu.com/home/m/coupon_list?click=mgw_menu_group_1_4" data-mtype="mgw_menu_group_1_4">          <img src="https://fms.res.meizu.com/dms/2018/08/14/b39b0e5a-f912-4733-a98d-3acdf4a83940.png" alt="">          <span>我的优惠券</span>        </a>        </li><li>        <a href="https://me.m.meizu.com/home/address/index?click=mgw_menu_group_1_5" data-mtype="mgw_menu_group_1_5">          <img src="https://fms.res.meizu.com/dms/2018/08/14/0e40e9a3-6ad7-4d24-80ee-c5677ea5c48e.png" alt="">          <span>我的地址</span>        </a>        </li><li>        <a href="https://me.m.meizu.com/home/m/favorite_list?click=mgw_menu_group_1_6" data-mtype="mgw_menu_group_1_6">          <img src="https://fms.res.meizu.com/dms/2018/08/14/68cb6912-a7a1-482e-b8cf-76960b2dc368.png" alt="">          <span>我的收藏</span>        </a>        </li><li>        <a href="http://mcycle.mall.meizu.com/?click=mgw_menu_group_1_7" data-mtype="mgw_menu_group_1_7">          <img src="https://fms.res.meizu.com/dms/2018/08/14/3fa9bbd6-5dbf-4732-b304-0b7185eaa175.png" alt="">          <span>以旧换新</span>        </a>        </li><li>        <a href="http://mformy.mall.meizu.com/?click=mgw_menu_group_1_8" data-mtype="mgw_menu_group_1_8">          <img src="https://fms.res.meizu.com/dms/2018/08/14/c3030136-2009-48df-a0aa-ee8712665dbd.png" alt="">          <span>M码通道</span>        </a>        </li></ul>
        <ul i><li>        <a href="https://hd.meizu.com/sale/hot.html?click=mgw_menu_group_2_1" data-mtype="mgw_menu_group_2_1">          <img src="https://fms.res.meizu.com/dms/2018/04/11/626b6ea5-e95b-440e-b2be-e7edc5ac2e14.png" alt="">          <span>明星品</span>        </a>        </li><li>        <a href="https://mall.meizu.com/category/searchIndex?id=5,28,29,68,100&amp;dna=2&amp;categoryName=%E5%BD%B1%E9%9F%B3&amp;click=mgw_menu_group_2_2" data-mtype="mgw_menu_group_2_2">          <img src="https://openfile.meizu.com/group1/M00/06/B6/Cgbj0Fu8fT6Abn3xAAAdE0ILaX0795.png" alt="">          <span>配件声学</span>        </a>        </li><li>        <a href="https://hd.mall.meizu.com/activity/new.html?click=mgw_menu_group_2_3" data-mtype="mgw_menu_group_2_3">          <img src="https://fms.res.meizu.com/dms/2018/04/11/7191d33b-6e05-4d49-9bdb-d0c94b9e95ae.png" alt="">          <span>一周上新</span>        </a>        </li><li>        <a href="https://hd.mall.meizu.com/activity/appzxjpc.html?click=mgw_menu_group_2_4" data-mtype="mgw_menu_group_2_4">          <img src="https://fms.res.meizu.com/dms/2018/04/11/366dd0c0-7ef2-4ed4-a106-8fe9077a175e.png" alt="">          <span>APP专享</span>        </a>        </li></ul>
        <ul i><li>        <a href="https://mall.meizu.com/?click=mgw_menu_group_3_1" data-mtype="mgw_menu_group_3_1">          <img src="https://fms.res.meizu.com/dms/2018/04/11/9d40ea39-5fbf-4356-afde-03cd6d6decee.png" alt="">          <span>商城</span>        </a>        </li><li>        <a href="https://m.meizu.com/products.html?click=mgw_menu_group_3_2" data-mtype="mgw_menu_group_3_2">          <img src="https://fms.res.meizu.com/dms/2018/04/11/ec8cb46d-5340-428a-b9bc-3893f4749d80.png" alt="">          <span>产品</span>        </a>        </li><li>        <a href="https://m.flyme.cn/?click=mgw_menu_group_3_3" data-mtype="mgw_menu_group_3_3">          <img src="https://fms.res.meizu.com/dms/2018/04/11/0ba8483f-464e-4500-879a-66c834b62128.png" alt="">          <span>Flyme</span>        </a>        </li><li>        <a href="https://cloud.flyme.cn/?click=mgw_menu_group_3_4" data-mtype="mgw_menu_group_3_4">          <img src="https://fms.res.meizu.com/dms/2018/04/11/9ef59a5f-aa24-46a7-9443-275347f42773.png" alt="">          <span>云服务</span>        </a>        </li><li>        <a href="http://retail.meizu.com/?click=mgw_menu_group_3_5" data-mtype="mgw_menu_group_3_5">          <img src="https://fms.res.meizu.com/dms/2018/04/11/deff1f64-aeff-4b1a-a321-e54626c25d7d.png" alt="">          <span>专卖店</span>        </a>        </li><li>        <a href="http://care.meizu.com/index.html?click=mgw_menu_group_3_6" data-mtype="mgw_menu_group_3_6">          <img src="https://fms.res.meizu.com/dms/2018/04/11/7a170057-4036-4088-bda3-c0cfbfe70c03.png" alt="">          <span>服务支持</span>        </a>        </li><li>        <a href="https://mf.meizu.cn/?click=mgw_menu_group_3_7" data-mtype="mgw_menu_group_3_7">          <img src="https://fms.res.meizu.com/dms/2018/04/11/2b57d6ff-3f1d-4907-8e6a-8aab99c89b8b.png" alt="">          <span>社区</span>        </a>        </li></ul>
      </div>
      <!-- <div class="header-menu-footer">
        <a href="#" class="login" data-mtype="mgw_menu_login">登录</a>
        <a href="#" class="register" data-mtype="mgw_menu_register">注册</a>
      </div> -->
    </div>

</div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
        isShowMenu:false
    }
  },
  methods:{
    showMenu(){
        this.isShowMenu = !this.isShowMenu;
        this.$store.state.isShowMenu=this.isShowMenu;
        // console.log(this.$store.state.isShowMenu)
    }
  }
  ,
  components: {

 }
}
</script>


<style>
@charset "UTF-8";
* {
    padding: 0;
    margin: 0;
}
html {
    font-size: 62.5%;
}
body {
    font-size: 14px;
    font-size: 1.4rem;
}
a {
    text-decoration: none;
}
html, body {
    width: 100%;
    height: 100%;
}
html.no-scroll, body.no-scroll {
    overflow: hidden;
}
.overflow-y {
    overflow: hidden;
}
h1, h2, p {
    box-sizing: content-box;
}
.header-wrapper {
    position: fixed;
    padding: 3vw 2vw 3vw 3.329vw;
    z-index: 10000;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    top: 0;
}
.index-header-bar {
    display: flex;
}
.index-header-bar .index-logo {
    display: block;
    width: 18.51852vw;
    height: 8.33333vw;
    margin: 0 auto;
}
.index-header-bar .index-logo svg {
    display: block;
    width: 18.51852vw;
    height: 8.33333vw;
    fill: #00b4ff;
}
.index-header-bar .index-search {
    background: #F2F2F2;
    border-radius: 3.8vw;
    width: 60vw;
    height: 8.33333vw;
    margin-right: 2vw;
    position: relative;
}
.index-header-bar .index-search:after, .index-header-bar .index-search:before {
    position: absolute;
    content: '';
}
.index-header-bar .index-search:after {
    width: 4vw;
    height: 4vw;
    border: .5vw solid #999;
    border-radius: 50%;
    top: 2vw;
    left: 3vw;
}
.index-header-bar .index-search:before {
    width: 2vw;
    height: .5vw;
    border-radius: .5vw;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    background: #999;
    top: 5.5vw;
    left: 5.8vw;
}
.index-header-bar .index-search input {
    display: block;
    height: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding-left: 10vw;
    font-size: 3.5vw;
}
.index-header-bar .shop-cart, .index-header-bar .icon-nav-btn, .index-header-bar .icon-search {
    width: 3.7037vw;
    height: 3.7037vw;
    background: green;
    position: absolute;
    z-index: 5;
    top: 5.5vw;
}
.index-header-bar .shop-cart {
    width: 4.81481vw;
    height: 4.81481vw;
    background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-shop-cart_297ceef.svg) no-repeat center center;
    background-size: 100%;
    right: 12.68519vw;
    top: 5vw;
}
.index-header-bar .icon-nav-btn {
    background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-menu_e428c6e.svg) no-repeat center center;
    background-size: 100% 100%;
    right: 2.96296vw;
    top: 5.7vw;
}
.index-header-bar .icon-search {
    width: 3.88889vw;
    height: 3.88889vw;
    background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-search_0f3d0ce.svg) no-repeat center center;
    background-size: 100%;
    top: 5.5vw;
    left: 3vw;
}
.header-menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #fafafa;
    left: 0;
    z-index: 10001;
    top: 14vw;
    -webkit-transform: translate(0, -250vw);
    transform: translate(0, -250vw);
    transition: -webkit-transform .8s;
    transition: transform .8s;
}
.header-menu:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 30vw;
    background: #fff;
    right: 0;
    top: -30vw;
}
.header-menu .close-btn {
    position: absolute;
    width: 5vw;
    height: 5vw;
    right: 3vw;
    top: -9.2vw;
    background-image: url(//bbs.res.meizu.com/static_new/h5/img/close.58557e4.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    z-index: 9;
}
.header-menu .close-btn:after {
    width: 5vw;
    height: 1px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.header-menu .close-btn:before {
    height: 5vw;
    width: 1px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.header-menu ul {
    border-bottom: 1px solid #efefef;
    display: flex;
    flex-wrap: wrap;
    padding: 1vw 1vw 0vw;
    margin-bottom: 7vw;
}
.header-menu ul li {
    text-align: center;
    margin-bottom: 4.5vw;
    width: 25%;
}
.header-menu ul li img {
    width: 7vw;
    display: block;
    margin: 0 auto;
}
.header-menu ul li span {
    font-size: 2.96296vw;
    line-height: 2.5;
    color: #000;
}
.header-menu ul:first-child {
    background: #fff;
    border-bottom: 0;
    box-shadow: 0 4px 12px 1px #ebebeb;
}
.header-menu ul:first-child li img {
    width: 11vw;
}
.header-menu ul:first-child li span {
    line-height: 1.5;
}
.header-menu #menuListTwo {
    margin-bottom: 5vw;
}
.header-menu #menuListTwo li {
    margin-bottom: 3.5vw;
}
.header-menu #menuListThree {
    border-bottom: 0;
}
.header-menu .header-menu-footer {
    text-align: center;
    display: flex;
    padding: 5vw 3vw 0;
}
.header-menu .header-menu-footer a {
    flex: 1;
    display: inline-block;
    margin: 0 1vw;
    font-size: 4vw;
    line-height: 9.72222vw;
    height: 10.18519vw;
    border-radius: 5vw;
}
.header-menu .header-menu-footer .login {
    background: #0bbbef;
    color: #fff;
}
.header-menu .header-menu-footer .register {
    color: #0bbbef;
    border: .5vw solid #0bbbef;
}
.header-menu.active {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
.header-menu .header-menu-logo {
    position: absolute;
    width: 18.51852vw;
    height: 8.33333vw;
    fill: #00b4ff;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    top: -11vw;
    z-index: 1001;
    font-size: 4.16667vw;
    text-align: center;
    line-height: 8.33333vw;
    color: #000;
}
.swiper-container-horizontal .swiper-pagination {
    text-align: right;
    padding-right: 5vw;
}
.swiper-container-horizontal .swiper-pagination span {
    margin: 0 2px;
    background: #fff;
    width: 6px;
    height: 6px;
}
.swiper-container-horizontal .swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
}
@media screen and (max-width:500px) {
    #site-nav {
        display: none;
    }
}
</style>


