<template>
    <footer class="fixed-btm footer-summary">
                <div class="mod-action">
                    <a class="vm-service" data-mtype="mall_de_buy1_ocs" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" id="J_kefu"><i class="iconfont icon-kefu"></i><span>客服</span></a>
                    <a class="vm-favorite" id="J_favorite" data-mtype="mall_de_favorite"><i class="iconfont icon-favorite"></i><span>收藏</span></a>
                    <a class="vm-cart" href="#/cart" data-mtype="mall_de_cart"><i class="iconfont icon-cart"></i><span>购物车</span></a>
                </div>
                <button @click="open" class="btn hide" id="J_btnAddCart" data-ctrl="J_addCart" type="button" data-mtype="mall_de_cart1" style="display: inline-block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">加入购物车</button>

                <button @click="open" class="btn btn-danger" id="J_btnBuyNow" type="button" data-mtype="mall_de_buy1_12398_9854" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">立即购买</button>
            </footer>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    methods:{
        open(){
            this.$store.state.isAdd=true
        }
    }
}
</script>

<style scoped>
.footer-summary, .footer-summary .mod-action {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.footer-summary {
    background: #fff;
}
.fixed-btm {
    z-index: 99;
}
.fixed-btm {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
}
.footer-summary .mod-action {
    width: 120px;
    border-top: 1px solid #e5e5e5;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 1;
    -ms-flex: 0 1 1;
    flex: 0 1 1;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-left: -1px;
}
.footer-summary .mod-action a {
    width: 50%;
    border-left: 1px solid #e5e5e5;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #999;
}
.footer-summary .btn {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    line-height: 40px;
}
.btn-danger {
    background: #f0415f;
}
</style>
