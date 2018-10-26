<template>
    <div class="member-item">
        <a href="//me.m.meizu.com/home/m/favorite_list">我的收藏</a>
        <a href="//me.m.meizu.com/home/address/index">我的地址</a>
        <a href="//me.m.meizu.com/home/m/redenvelop_list">我的红包</a>
        <a href="//me.m.meizu.com/home/m/coupon_list">我的优惠券</a>

    </div>
</template>
<script type="text/javascript">
    
</script>
<style type="text/css">
    .member-index .member-item {
    background-color: #fff;
    height: 67px;
    margin-top: 7px;
    color: #666;
    font-size: 12px;
    border-bottom: 1px solid #e5e5e5;
    display:flex;
        justify-content: space-between;

    align-items: center;
}
.member-index .member-item a:first-child {
    background: url(../../assets/collect.png) no-repeat center 10%;
    background-size: 25px 25px;
}
.member-index .member-item a {
    padding-top: 29px;
    display: block;
    width: 80px;
    text-align: center;
}
.member-index .member-item a:nth-child(2) {
    background: url(../../assets/address.png) no-repeat center 10%;
    background-size: 25px 25px;
}
.member-index .member-item a:nth-child(3) {
    background: url(../../assets/redbag.png) no-repeat center 10%;
    background-size: 25px 25px;
}
.member-index .member-item a:nth-child(4) {
    background: url(../../assets/coupon.png) no-repeat center 10%;
    background-size: 25px 25px;
}
</style>    