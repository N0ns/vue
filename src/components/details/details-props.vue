<template>
    <section class="layer layer-props open" id="J_layerProps" v-show="isopen">
                <div class="layer-cover">
                </div>
                <div class="layer-inner">
                    <div id="property" class="property">
                        <div class="property-inner" id="J_propertyInner" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                                <dl data-property="型号" class="property-sibling">
                                    <dt class="vm-metatit">型号</dt>
                                    <dd class="clearfix">
                                            <a   class="prop selected" v-text="name" ></a>
                                            
                                    </dd>
                                </dl>

   
 
                                <dl class="property-package">
                                    <dt class="vm-metatit">套餐</dt>
                                    <dd class="clearfix" id="J_packageLists"><a data-value="0" class="prop selected" data-mtype="mall_de_pa_set_1">官方标配</a></dd>
                                </dl>

                            <div class="property-quantity">
                                <div class="vm-metatit">数量</div>
                                <div class="property-quantity-control">
                                    <a title="减少" href="javascript:;" class="vm-minus disabled">-</a>
                                    <span type="text" class="vm-quantity" id="J_quantity" data-value="1" data-max="1">1</span>
                                    <a title="增加" href="javascript:;" class="vm-plus ">+</a>
                                </div>
                                <span id="J_Stock" class="vm-count">（限购 1 件）</span>
                            </div>

                        </div>
                    </div>
                    <div class="summary">
                        <div class="summary-pic">
                            <img id="J_summaryPicBooth" :src="img" width="80" height="80" alt="">
                        </div>
                        <div class="summary-info">
                            <div class="vm-price">
                                <span class="price"> <em id="J_summaryPrice" v-text="price"></em></span>
                                <span class="countdown" id="J_summaryDiscountCountDown" style="display: none;">
                            </span>
                            </div>
                            <div class="vm-title" id="J_summaryName"  v-text="name+'  官方标配'"> </div>
                            <div class="vm-discount" id="J_summaryDiscount" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><a class="vm-icon" href="//store.meizu.com/marrive/summary.html" target="_blank"><i class="iconfont icon-suda2"></i>次日达</a><span class="vm-msg">19:00 前支付，预计明天送达</span></div>
                            <a class="vm-close J_btnClose" @click="close" ><i class="icon icon-close"></i></a>
                        </div>
                    </div>
                </div>
                <div class="layer-footer footer-summary">
                    <button @click="addCart"  class="btn hide" id="J_btnAddCartProps"  style="display: inline-block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">加入购物车</button>
                    <a class="btn btn-danger" id="J_btnBuyPropsEnter"  style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);    border: none;line-height: 40px;width:50px;height:40px;border-radius: 0">立即购买</a>
                </div>
            </section>

</template>
<script>
import common from '../../lib/js/common.js'
    export default{
        data(){
            return {
                details:{},
                name:'',
                price:'',
                img:'',
                id:'',
                desc:''
            }
        },
        computed:{
            isopen(){
                this.id=this.$store.state.goods._id
                this.name=this.$store.state.goods.name;
                this.desc = this.$store.state.goods.desc
                if(this.price){
                    this.price=this.$store.state.goods.skuprice
                }else{
                    this.price='￥'+this.$store.state.goods.price
                }
                this.img = this.$store.state.goods.img
                return this.$store.state.isAdd
            }
        },
        methods:{
            close(){
                this.$store.state.isAdd = false
            },
            addCart(){

                var cartList = common.Cookie.get('cartList')
                if(cartList === ''){
                    cartList = [];
                }else{
                    cartList = JSON.parse(cartList);
                }
                var self = this

                for(var i=0;i<cartList.length;i++){
                    if(cartList[i].id===this.id){
                        cartList[i].qty++
                        break
                    }
                    
                }
                if(i===cartList.length){

                            // 获取商品信息，并写入对象
                            var mygoods = {
                                id:self.id,
                                name:self.name,
                                desc:self.desc,
                                img:self.img,
                                price:self.price,
                                qty:1,
                                is_selected:false
                         
                            }
                         
                            // 把当前商品写入数组
                            cartList.push(mygoods);
                        }
               common.Cookie.set('cartList',JSON.stringify(cartList))
                // common.Cookie.set('cartList',)
            }
        }
        ,
        mounted(){
            
           

        }
    }
</script>
<style >
    .layer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    background-color: transparent;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.layer .layer-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.layer .layer-inner {
    background-color: #fff;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 40px;
    width: 100%;
}
.property {
    position: absolute;
    top: 78px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 103;
    overflow: hidden;
}
.property-inner {
    position: absolute;
    z-index: 105;
    width: 100%;
    padding: 5px 11px 30px;
    box-sizing: border-box;
}

.property .vm-metatit {
    margin-bottom: 5px;
    color: #999;
}
.clearfix {
    overflow: auto;
}
.property .prop {
    display: inline-block;
    margin: 0 13px 5px 0;
    padding: 7px 12px;
    color: #666;
    border-radius: 3px;
    border: 1px solid #cfcfcf;
}
.property .prop.selected {
    border-color: #00c3f5;
    color: #00c3f5;
}
.icon.icon-close {
    background-image: url(../../assets/close.png);
}
.footer-summary, .footer-summary .mod-action {

    display: flex;
}
.layer .layer-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e5e5e5;
    background: #fff;
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
.summary .summary-info {
    position: relative;
    padding-bottom: 5px;
    overflow: hidden;
    margin-left: 120px;
}
.summary .summary-info .vm-price {
    margin-top: 16px;
}
.summary .summary-info .vm-price .price {
    line-height: 1;
    font-size: 16px;
    color: #f0415f;
    vertical-align: middle;
}
.summary .summary-pic {
    position: absolute;
    bottom: 330px;
    background-color: #fff;
    z-index: 10;
    padding: 2px;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    margin-right:12px;
    height: 100px;
    width: 100px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.property-quantity .property-quantity-control {
    position: relative;
    height: 30px;
    width: 102px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    margin-top: 1px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.property-quantity .property-quantity-control a {
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
}
.property-quantity .property-quantity-control .vm-quantity {
    position: absolute;
    top: 0;
    left: 30px;
    width: 43px;
    height: 29px;
    padding: 0;
    line-height: 29px;
    font-size: 14px;
    border: none;
    text-align: center;
    color: #333;
}
.property-quantity .property-quantity-control .vm-plus {
    right: 0;
    border-left: 1px solid #e5e5e5;
}
.property-quantity .property-quantity-control .vm-minus {
    left: 0;
    border-right: 1px solid #e5e5e5;
}
.summary .summary-info .vm-discount {
    margin-top: .16667rem;
    margin-right: .83333rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.summary .summary-info .vm-close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    z-index: 10;
}
.summary .summary-info .vm-close i{
    height: 12px !important;
    width: 12px !important;
}
</style>