<template>
    <div class="goods" id="goods">

        <div class="swiper-container swipe">
    <div style="height:224px" class="swiper-wrapper">
      <div class="swiper-slide item"><img  :src="details.img"></div>
      <div class="swiper-slide item"><img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgjiAKsrfAANgXYqK538272.png480x480.jpg"></div>
      <div class="swiper-slide item"><img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkGAAJefAASvxzwhjFc615.png480x480.jpg"></div>
      <div class="swiper-slide item"><img src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0Vtqgj-AQW52AAJZZteaDhA041.png480x480.jpg"></div>

    </div>
    <!-- Add Pagination -->
    <div class="poin"></div>
  </div>





                    <div class="prod" id="prod">
                            <div class="sanp-up" id="J_sanpUp"></div>

                            <section class="prod-info">
                                <div class="prod-info-header">
                                    <h1 class="vm-title" v-text="details.name"></h1>
                                </div>
                                <div class="prod-info-price">
                                    <div v-if="details.price" class="mod-price">
                                        <small>¥ </small><span id="J_price" class="vm-money" v-text="details.price"></span>
                                    </div>
                                    <div class="mod-price">
                                        <span id="J_price" class="vm-money" v-text="details.skuprice"></span>
                                    </div>
                                    <div class="mod-original" id="J_originalPrice" style="display: none;"></div>
                                    
                                </div>
                                <div class="prod-info-message">
                                    <p v-text="details.desc"></p>
                                </div>
                                
                            </section>

                                <section class="prod-service" id="J_prodService" data-ctrl="J_layerService" data-mtype="mall_de_msg_service">
                                    <ul>


                                            <li><i class="icon icon-service"></i>顺丰发货</li>
                                            <li><i class="icon icon-service"></i>7天无理由退货</li>
                                    </ul>
                                    <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                                </section>




                 

                            <section @click="open" class="prod-selected" id="J_prodSelected" data-ctrl="J_layerProps" data-mtype="mall_de_msg_package">
                                <label>已选</label>
                                <p>
                                    <span class="vm-props s-selected" id="J_selectedProps" v-text="details.name" ></span>
                                    <span class="vm-quantity" id="J_selectedQuantity" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">×1</span>
                                </p>
                                <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                            </section>

                            <section class="prod-suda" id="J_prodSuda" data-ctrl="J_layerSuda" data-mtype="mall_de_msg_address">
                                <!--去掉百城判断-->
                                    <div class="prod-suda-selector" id="J_sudaSelector" data-url="//area.meizu.com/area/child/query/">
                                        <label>配送</label>
                                        <span id="J_siteText" class="">广东省 广州市</span>
                                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                                    </div>
                                    <div class="prod-suda-info" id="J_siteStatus" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><span class="vm-msg">付款后预计7天内发货</span></div>
                                <!---->
                                    <div class="prod-suda-supplier">
                                        <p class="mod-bd">
                                                本商品由<em>魅族</em>负责发货并提供售后服务
                                        </p>
                                    </div>
                            </section>
                           
                        </div>
                </div>
</template>
<script>
    import Swiper from 'swiper'

    export default{
        data(){
            return {
                id:'',
                details:{}
            }
        },
        mounted(){
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.poin',
                },
            });
            this.id=location.search.split('?')[1].split('=')[1];
            var self = this
            $.ajax({
                type: "get",
                url: "http://localhost:4000/details",
                
                data: {
                    id:self.id
                },
                success(result) {
                    self.details = result[0]
                    self.$store.state.goods=self.details;

  

                }
            })
        },
        methods:{
            open(){
                this.$store.state.isAdd = true;
                this.$store.state.goods=this.details;
                console.log(this.$store.state.goods)
            }
        }
        
    }
    
</script>
<style type="text/css">
    .swipe {
    margin-top: -20px;
    height: 224px;
}

.goods, .swipe {
    background: #fff;
}
.swipe {
    overflow: hidden;
    position: relative;
}
.swipe .item, .swipe .item img {
    height: 200px;
}

.swipe .item {
    text-align: center;
    overflow: hidden;
}
.swipe-wrap .item {
    position: relative;
    z-index: 1;
    float: left;
    width: 100%;
    text-align: center;
}

img, textarea {
    border: none;
    vertical-align: middle;
}
.prod {
    margin-top: 2px;
    box-shadow: 0 0 1px #eee;
    border-top: 1px solid #e5e5e5;
    background: #eee;
    overflow: hidden;
    font-size: 13px;
}
.sanp-up {
    position: relative;
    padding-left: .91667rem;
    color: #fff;
    font-size: 13px;
    line-height: 1.33333rem;
    overflow: hidden;
    background-color: #00c3f5;
}
.sanp-up:before {
    content: "";
    position: absolute;
    left: .33333rem;
    top: 50%;
    width: .5rem;
    height: .5rem;
    margin-top: -.25rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.prod-info {
    position: relative;
    padding: 11px 0 7px 11px;
    background: #fff;
    overflow: hidden;
}
.prod-business, .prod-exclusive, .prod-morebuy, .prod-promo, .prod-selected, .prod-service, .prod-suda {
    position: relative;
}
.prod-info .prod-info-header {
    position: relative;
    padding-bottom: 3px;
}
.prod-info .prod-info-header .vm-title {
    display: inline-block;
    color: #333;
    font-size: 16px;
    line-height: 18px;
    width: 231px;
    font-weight: 400;
    overflow-wrap: break-word;
    word-break: break-all;
}
.prod-info .prod-info-price {
    position: relative;
    height: 22px;
    line-height: 22px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.prod-exclusive, .prod-exclusive>p, .prod-info-price, .prod-morebuy, .prod-selected, .prod-selected>p, .prod-service ul, .prod-suda-selector {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
}
.prod-info .prod-info-price .mod-price {
    display: -webkit-box;
    display: -webkit-flex;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.prod-info .prod-info-price .mod-original, .prod-info .prod-info-price .mod-price {
    margin-right: 5px;
    color: #f0415f;
}
.prod-info .prod-info-price .mod-price .vm-money {
    color: #f0415f;
    font-size: 18px;
}
.prod-info .prod-info-price .mod-price small {
    font-size: 18px;
    margin-right: 3px;
}
.prod-service {
    height: 40px;
    line-height: 40px;
    background: #fff;
    overflow: hidden;
}
.prod-service ul {
    margin-left: 11px;
    padding-right: 13px;
    border-top: 1px solid #e5e5e5;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}
.prod-service ul li {
    display: inline-block;
    margin-right: 11px;
    font-size: 12px;
    color: #999;
}
.icon.icon-service {
    background-image: url(../../assets/ok.png);
    vertical-align: -3%;
    margin-right: 4px;
}
.icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    vertical-align: middle;
}
.prod-business i.icon-enter, .prod-exclusive i.icon-enter, .prod-morebuy i.icon-enter, .prod-promo i.icon-enter, .prod-selected i.icon-enter, .prod-service i.icon-enter, .prod-suda i.icon-enter {
    position: absolute;
    right: 8px;
    top: 13px;
}

.icon.icon-enter {
    background-image: url(../../assets/enter.png);
    width: 16px !important;
    height: 16px !important;
}
.prod-selected {
    height: 40px;
    padding-left: 11px;
    padding-right: 20px;
    margin-top: 7px;
    line-height: 40px;
    background: #fff;
}
.prod label {
    font-size: 13px;
    margin-right: 11px;
    color: #999;
    vertical-align: middle;
}
.prod-selected p .vm-props.s-selected {
    color: #333;
}
.prod-selected p .vm-props {
    float: left;
    font-size: 13px;
    overflow: hidden;
    color: #999;
    max-width: 230px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.prod-suda {
    margin-top: 7px;
    margin-bottom: 7px;
    padding-left: 11px;
    background: #fff;
}
.prod-suda .prod-suda-selector {
    height: 38px;
    padding-right: 20px;
    line-height: 38px;
    border-bottom: 1px solid #e5e5e5;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.prod-selected p .vm-quantity {
    position: absolute;
    right: 31px;
    color: #666;
}
.prod-suda .prod-suda-info {
    padding-top: 12px;
    padding-left: 33px;
    line-height: 17px;
    color: #666;
}
.prod-suda .prod-suda-supplier .mod-bd {
    padding: 14px 16px 14px 33px;
    line-height: .41667rem;
    color: #999;
}
.prod-suda .prod-suda-supplier .mod-bd em {
    color: #666;
}
.prod-info .prod-info-message p {
    font-size: 13px;
    line-height: 22px;
    color: #999;
}
/*swiper*/



</style>