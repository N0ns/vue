<template>
<div class="myorders">
        <div class="top">
            <span>我的订单</span>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html" class="goto-allorder">查看全部订单 <i class="iconfont icon-arrow-right"></i></a>
        </div>
        <div class="order-status">
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=unpay"><i class="iconfont icon-payment"></i>待付款<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=paid"><i class="iconfont icon-wait-deliver"></i>待发货<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=onroad"><i class="iconfont icon-logistics"></i>待收货<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=service"><i class="iconfont icon-after-sale"></i>退款/售后</a>
        </div>
    </div>
</template>

<script>


</script>

<style>
.member-index .myorders {
    margin-top: 7px;
    background-color: #fff;
}
.member-index .myorders .top {
    position: relative;
    padding: 0 15px;
    font-size: 14px;
    height: 37px;
    justify-content: space-between;
    align-items: center;
        display: flex;
}
.after-border, .member-index .myorders .top:after, .member-index .other-item a:after, .service .return-detail .sign p:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #e5e5e5;
    transform: scaleY(.5);
    pointer-events: none;
}
.member-index .myorders .top a {
    font-size: 10px;
    color: #999;
    display: block;
}
.member-index .myorders .top a .iconfont, .member-index .myorders .top a .iconfont:before {
    color: #ccc;
    font-size: .30556rem;
}
.iconfont:before {
    float: none!important;
    width: auto!important;
    height: auto!important;
    vertical-align: middle!important;
}
.icon-arrow-right:before {
    content: "\E609";
}
.after-border, .member-index .myorders .top:after, .member-index .other-item a:after, .service .return-detail .sign p:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #e5e5e5;
    transform: scaleY(.5);
    pointer-events: none;
}
.member-index .myorders .order-status {
    height:66px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    font-size: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.member-index .myorders .order-status a {
    position: relative;
    display: block;
    line-height: 20px;
    width: 80px;
}
.member-index .myorders .order-status a hr {
    position: absolute;
    display: block;
    width: 1px;
    border: none;
    height: 27px;
    border-right: 1px solid #ddd;
    top: .26389rem;
    right: 0;
        unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
}
.member-index .myorders .order-status .iconfont, .member-index .myorders .order-status .iconfont:before {
    font-size: 22px;
    display: block;
    margin-top: 8px;
    color: #999;
}
.iconfont:before {
    float: none!important;
    width: auto!important;
    height: auto!important;
    vertical-align: middle!important;
}
.icon-payment:before {
    content: "\E60E";
}

.icon-wait-deliver:before {
    content: "\E60B";
}
.icon-logistics:before {
    content: "\E60C";
}
.icon-logistics:before {
    content: "\E60C";
}
.icon-after-sale:before {
    content: "\E60D";
}
</style>
