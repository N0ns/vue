<template>
     <div class="cart-list">
       <!----> 
 
       <div class="section radio-group merchant-group">
        <div class="supplier radio-row">
         <div class="radio radio-merchant" :class="{'checked':allChecked}" @click="all_select"></div> 
         <div class="radio-fld">
          <div class="name">
           魅族
          </div> 
          <div class="full-shipping">
           <a class="row-sele"><span></span> <span>已免运费</span></a>
          </div>
         </div>
        </div> 
        <div class="secrow radio-row">
         <!----> 
         <div v-for="(item,i) in cartList" class="row-item">
          <div class="radio " :class="{'checked':item.is_selected}" @click="selected(i)"></div> 
          <div class="radio-fld">
           <div class="item">
            <div class="prod-img">
             <a href="//detail.meizu.com/item/meizuv8_bp.html?skuId=10054" ><img :src="item.img" /> 
              <!----></a>
            </div> 
            <div class="intro">
             <a href="#" ><h3 v-text="item.name"></h3> <p class="attrs"><span v-text="item.desc"></span> </p></a> 
             <div class="howmuch">
              <div  class="price" v-text="item.price">
               
              </div>
              <div class="input-number" v-show="isEdit"><button class="ctrl minus"  @click="decrease(i)">-</button> <span class="val" v-text="item.qty">1</span> <button class="ctrl plus" @click="increase(i)">+</button></div> 
              <div class="quantity" v-show="!isEdit">
               <span v-text="item.qty"></span>
              </div>
             </div>
            </div>
           </div> 
           
          </div>
         </div>
        </div>
       </div> 
  </div>
</template>

<script>
import common from '../../lib/js/common.js'
export default{
    data(){
        return {
            edit:false,
            checked:[],
            cartList:[],
            total:0,
            allChecked:false
            
        }
    },
    computed:{
        isEdit(){
            if(this.$store.state.allCheck!==this.allChecked){
              this.all_select()
            }
            if(this.$store.state.isDel){
              this.del()
              this.$store.state.isDel=false
            }
            return this.$store.state.edit
        }
        
    },
    methods:{
        
        increase(i){
          this.cartList[i].qty++
          this.update(this.cartList)
          this.total = 0
          var self = this
            this.cartList.forEach(function(item,i){
              if(item.is_selected){
                self.total += self.cartList[i].price.split('￥')[1]*self.cartList[i].qty
              }
            })
            self.$store.state.total = self.total
        },
        decrease(i){
          var self = this
          if(this.cartList[i].qty===1){
            this.cartList[i].qty=1
            this.total = 0
            this.cartList.forEach(function(item,i){
              if(item.is_selected){
                self.total += self.cartList[i].price.split('￥')[1]*self.cartList[i].qty
              }
            })
            self.$store.state.total = self.total
          }else{
            this.cartList[i].qty--
            
            this.total = 0
            this.cartList.forEach(function(item,i){
              if(item.is_selected){
                self.total += self.cartList[i].price.split('￥')[1]*self.cartList[i].qty
              }
            })
            self.$store.state.total = self.total
          }
          this.update(this.cartList)
        },
          update(goods){
            var cartList = JSON.stringify(goods)
            common.Cookie.set('cartList',cartList)
          },
          selected(i){
              var item=this.cartList[i]
              var arr = []
              this.total = 0
              var self = this
              item.is_selected = !item.is_selected
              if(!item.is_selected){
                this.allChecked=false
                this.$store.state.allCheck = this.allChecked
              }
              this.cartList.forEach(function(ele,idx){
                if(ele.is_selected){
                  arr.push(idx)
                  self.total += self.cartList[idx].price.split('￥')[1]*self.cartList[idx].qty

                }
              })
              if(arr.length===this.cartList.length){
                this.allChecked = true
                this.$store.state.allCheck = this.allChecked
                this.$store.state.isBuy=true
              }
              if(arr.length!=0){
                this.$store.state.isBuy=true
               }else{
                this.$store.state.isBuy=false
               }
                self.$store.state.total = self.total
             

          },
          all_select(){
            this.$store.state.total = 0
            this.$store.state.allCheck = this.allChecked
            this.allChecked=!this.allChecked
            this.$store.state.allCheck = this.allChecked
            this.$store.state.isBuy=this.allChecked
            var self = this
            this.cartList.forEach(function(item,idx){
              item.is_selected=self.allChecked
              if(item.is_selected){
                self.$store.state.total += self.cartList[idx].price.split('￥')[1]*self.cartList[idx].qty
              }
            })
            
          },
          del(){
            var arr = []
            this.cartList.forEach(function(item){
              if(!item.is_selected){
                arr.push(item)
              }
            })
            if(arr.length===0){
              common.Cookie.remove('cartList')
              this.$store.state.isEmpty = true
            }else{
              this.cartList=arr
              arr = JSON.stringify(arr)
              common.Cookie.set('cartList',arr)
            }
           
          }
    },
    mounted(){
      var cartList = common.Cookie.get('cartList')

      if(cartList!==''){
        cartList = JSON.parse(cartList)
        cartList.forEach(function(item){
          item.is_selected=false
        })
        this.cartList = cartList
      }
      

    }
}
</script>

<style>
.cart-list {
    padding-bottom: 40px;
}
.section {
    margin-top: 8px;
    overflow: hidden;
    background-color: #fff;
}
.cart-list .supplier {
    height: 46px;
    line-height: 46px;
    font-size: 14px;
    overflow: hidden;
}
.brd-b:after, .brd-t:after, .cart-bar:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
}
.radio-group .radio {
    float: left;
    position: relative;
    padding: 0;
    width: 13%;
    height: 43px;
    box-sizing: border-box;
}

.radio-group .radio.checked:after {
    /*content: "\E608";*/
    color: #00c3f5;
    font-size: 24px;
    text-align: center;
    line-height: 42px;

}
.radio-group .radio:after {
    right: auto;
    left:11px;
}
.radio-group .radio:after {
    content: "";
    position: absolute;
    right: 13px;
    top: 50%;
    width: 18px;
    height: 18px;
    margin-top: -9px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-color: #fff;

}
.radio-group .radio-fld {
    float: right;
    width: 87%;
}
.cart-list .supplier .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cart-list .item {
    position: relative;
    z-index: 0;
    padding: 11px 11px 11px 0;
    overflow: hidden;
}
.cart-list .prod-img {
    float: left;
    position: relative;
    width: 71px;
    height: 71px;
}
.cart-list .prod-img img {
    width: 100%;
    height: 100%;
}
.cart-list .intro {
    position: relative;
    margin-left: 80px;
    line-height: 22px;
    overflow: hidden;
}
.cart-list .intro a {
    display: block;
}

.cart-list .intro .attrs, .cart-list .intro h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
}
.cart-list .intro .attrs {
    padding-top: 2px;
    color: #999;
}
.cart-list .intro .howmuch {
    padding-top: 4px;
    line-height: 27px;
    overflow: auto;
}
.cart-list .intro .price {
    float: left;
    color: #f0415f;
}
.cart-list .intro .price:before {
    content: attr(data-symbol);
}
.cart-list .intro .quantity {
    float: right;
    color: #999;
}
.cart-list .intro .quantity span:before {
    content: "\D7";
}
.brd-b:after, .brd-t:after, .cart-bar:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
}
.brd-b:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    bottom: 0;
    background-image: -webkit-linear-gradient(0deg,#e5e5e5 50%,transparent 0);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(50%,#e5e5e5),color-stop(50%,transparent));
    background-image: -webkit-linear-gradient(bottom,#e5e5e5 50%,transparent 0);
    background-image: linear-gradient(0deg,#e5e5e5 50%,transparent 0);
}
.brd-b:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    bottom: 0;
    background-image: -webkit-linear-gradient(0deg,#e5e5e5 50%,transparent 0);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(50%,#e5e5e5),color-stop(50%,transparent));
    background-image: -webkit-linear-gradient(bottom,#e5e5e5 50%,transparent 0);
    background-image: linear-gradient(0deg,#e5e5e5 50%,transparent 0);
}
.brd-b:after, .brd-t:after, .cart-bar:after, .cart-list .radio-fld>.item:after, .cart-list .subitem:after, .cart-list .supplier:after, .cart .header:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
}
.brd-b, .brd-t, .cart-bar, .cart-list .radio-fld>.item, .cart-list .subitem, .cart-list .supplier, .cart .header {
    position: relative;
}
.cart-list .intro .input-number {
    float: right;
}
.input-number {
    line-height: normal;
    font-size: 0;
    border-radius: 3px;
    border: 1px solid #ddd;
}
.input-number .minus[disabled], .input-number .plus[disabled] {
    color: #ccc;
}

.input-number .minus, .input-number .plus {
    float: left;
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    color: #888;
    font-size: 22px;
    font-weight: border;
    text-align: center;
    border: none;
    box-sizing: border-box;
    background: none;
}
.input-number .minus {
    border-right: 1px solid #ddd;
}
.input-number .plus {
    border-left: 1px solid #ddd;
}
.input-number .val {
    float: left;
    display: inline-block;
    width: 32px;
    line-height: 25px;
    color: #333;
    font-size: 14px;
    text-align: center;
    border-radius: 0;
    border: none;
}
.section .secrow .radio {
    top:46px;
    margin-top: -21px;
}
.cart-list .row-item {
    overflow: auto;
}
</style>
