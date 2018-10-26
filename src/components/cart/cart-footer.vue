<template>
<div class="fixed-btm">
   <div class="cart-bar radio-group">
    <form>
     <input type="hidden" name="cart_param" /> 
     <input type="hidden" name="buy_from" value="cart" />
    </form> 
    <div class="radio-row">
     <div data-mtype="mall_cart_all" class="radio check-all " :class="{'checked':allCheck}" @click="allChecked">
      全选
     </div> 
         <div class="radio-fld">
            <div class="total-pay" v-show="!isEdit">
                <label>总计:</label> 
                    <span class="total-paymoney" v-text="total"></span>
            </div>
            <button type="button" v-show="!isEdit" class="btn btn-hi btn-done" :disabled="!buy">结算</button> 
            <button type="button" v-show="isEdit" class="btn btn-hi btn-delete" @click="del">删除</button>
         </div>
    </div>
   </div>
  </div>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    computed:{
        isEdit(){
            return this.$store.state.edit
        },
        total(){
            return this.$store.state.total
        },
        allCheck(){
            return this.$store.state.allCheck
        },
        buy(){
            return this.$store.state.isBuy
        }
    },
    methods:{
        allChecked(){
            this.$store.state.allCheck = !this.$store.state.allCheck
        },
        del(){
            if(confirm('是否删除选中商品')){
                this.$store.state.isDel=true
            }
            
        }
    }
}
</script>

<style>
.cart-bar .radio-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.cart-bar .radio-fld {
    float: none;
    width: 75%;

    justify-content: flex-end;
}
.cart-bar .radio {
    width: 25%;
    padding: 3px 0 0 37px;
    height: 37px;
    line-height: 37px;
    color: #666;
    text-align: left;
}
.cart-bar .radio-fld {
    float: none;
    width: 75%;

    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.cart-bar .total-pay {
    padding-right: 11px;
}
.cart-bar .total-pay .total-paymoney:before {
    content: "\FFE5";
}
.cart-bar .total-pay .total-paymoney {
    color: #f0415f;
}
.cart-bar .btn {
    width: 98px;
    height: 40px;
}
.btn {
    display: inline-block;
    width: 2.66667rem;
    line-height: 1rem;
    color: #fff;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: #00c3f5;
}
.btn-disabled, .btn.disabled, .btn[disabled] {
    color: #fff!important;
    background-color: #ccc!important;
}
.brd-b:after, .brd-t:after, .cart-bar:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
}
.cart-bar {
    height: 40px;
    background-color: #fff;
}
.cart-bar .radio, .cart-bar .radio-fld, .cart-bar .total-pay, .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.btn-hi {
    background-color: #f0415f;
}
.cart-bar .btn.btn-delete {
    background-color: #00c3f5;
}
.cart-bar .total-pay, .flex-center, .flex-vc {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>
