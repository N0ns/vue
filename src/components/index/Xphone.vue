<template>
<div>
    <div class="index-phone-list">
    <h3 class="list-title">{{type[0]}}</h3>
    <div id="phone-header-ad">
      <div class="list-ad" >
        <a href="https://detail.meizu.com/item/meizu16x.html?click=mall_index_kw_1_1" data-mtype="mall_index_kw_1_1">
          <img src="https://openfile.meizu.com/group1/M00/06/A2/Cgbj0VuiFjeAQu85AADz4RX6mZQ072.jpg" lazy-src="https://openfile.meizu.com/group1/M00/06/A2/Cgbj0VuiFjeAQu85AADz4RX6mZQ072.jpg" alt="">
        </a>
      </div>

  </div>




    <div class="phone-list" id="phoneList">
  <div v-for="item1 in phone"  class="phone-content">
    <a :href="`?id=${item1._id}#/details`"  :data-id="item1._id">
      <img  :src="item1.img" alt="">
      <div class="info">
        <p class="products-name" v-text="item1.name"></p>
        
        <p class="slogan slogan-sale"><span v-html="`<em>新品</em>${item1.desc}`"></span></p>
        
        <p class="price" v-html="item1.skuprice"></p>
      </div>
    </a>
  </div>
  

    </div>
  </div>



  <div  class="index-phone-list">
    <h3 class="list-title">{{type[1]}}</h3>
    <div id="phone-header-ad">

      <div  class="audio-list-ad" id="audio-list-ad" >
        <div v-for="(item,i) in ears" v-if="i<1"  class="accessoary-ad" style="background:#F55C5C">
          <a :href="`?id=${item._id}#/details`"  :data-id="item._id">
            <div>
              <h4 v-html="item.name"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${item.price}<s></s>`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
        
        <div v-for="(item,i) in ears" v-if="i===1" class="accessoary-ad" style="background:#7063C9">
          <a :href="`?id=${item._id}#/details`"  :data-id="item._id">
            <div>
              <h4 v-html="item.name"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${ears[0].price}`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
      </div>
  </div>




    <div class="phone-list" id="phoneList">
  <div v-for="(item2,i) in ears"  v-if="i>1" class="phone-content">
    <a :href="`?id=${item2._id}#/details`" :data-id="item2._id">
      <img  :src="item2.img" alt="">
      <div class="info">
        <p class="products-name" v-text="item2.name"></p>
        
        <p class="slogan slogan-sale"><span v-html="`<em>新品</em>${item2.desc}`"></span></p>
        
        <p class="price" v-html="item2.skuprice"></p>
      </div>
    </a>
  </div>
  

    </div>
  </div>


  <div  class="index-phone-list">
    <h3 class="list-title">{{type[2]}}</h3>
    <div id="phone-header-ad">

      <div  class="audio-list-ad" id="audio-list-ad" >
        <div v-for="(item,i) in parts" v-if="i<1" class="accessoary-ad" style="background:#F55C5C">
          <a :href="`?id=${item._id}#/details`"  :data-id="parts[0]._id" >
            <div>
              <h4 v-html="item['name']"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${item.price}<s>${item.oldPrice}</s>`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
        
        <div v-for="(item,i) in parts" v-if="i===1" class="accessoary-ad" style="background:#7063C9">
          <a :href="`?id=${item._id}#/details`" :data-id="item._id" >
            <div>
              <h4 v-html="item['name']"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${item.price}`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
      </div>
  </div>




    <div class="phone-list" id="phoneList">
  <div v-for="(item3,i) in parts"  v-if="i>1" class="phone-content">
    <a :href="`?id=${item3._id}#/details`" :data-id="item3._id" >
      <img  :src="item3.img" alt="">
      <div class="info">
        <p class="products-name" v-text="item3.name"></p>
        
        <p class="slogan slogan-sale"><span v-html="`<em>新品</em>${item3.desc}`"></span></p>
        
        <p class="price" v-html="item3.skuprice"></p>
      </div>
    </a>
  </div>
  

    </div>
  </div>


  <div  class="index-phone-list">
    <h3 class="list-title">{{type[3]}}</h3>
    <div id="phone-header-ad">

      <div  class="audio-list-ad" id="audio-list-ad" >
        <div v-for="(item,i) in life" v-if="i<1" class="accessoary-ad" style="background:#F55C5C">
          <a :href="`?id=${item._id}#/details`"  :data-id="item._id" >
            <div>
              <h4 v-html="item['name']"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${item.price}<s>${item.oldPrice}</s>`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
        
        <div v-for="(item,i) in ears" v-if="i===1" class="accessoary-ad" style="background:#7063C9">
          <a :href="`?id=${item._id}#/details`"  :data-id="item._id" >
            <div>
              <h4 v-html="item['name']"></h4>
              <p v-text="item.desc"></p>
              <span v-html="`￥${item.price}`"> </span>
            </div>
            <img :src="item.img" alt="">
          </a>
        </div>
      </div>
  </div>




    <div class="phone-list" id="phoneList">
  <div v-for="(item4,i) in life"  v-if="i>1" class="phone-content">
    <a :href="`?id=${item4._id}#/details`" :data-id="item4._id" >
      <img  :src="item4.img" alt="">
      <div class="info">
        <p class="products-name" v-text="item4.name"></p>
        
        <p class="slogan slogan-sale"><span v-html="`<em>新品</em>${item4.desc}`"></span></p>
        
        <p class="price" v-html="item4.skuprice"></p>
      </div>
    </a>
  </div>
  

    </div>
  </div>


</div>

</template>
<script>
export default{
  data(){
    return {
      
      type:['智能手机','魅族声学','智能配件','生活周边'],
      name:'name',
      phone:[],
      ears:[],
      parts:[],
      life:[]


    }
  },
  beforeCreate(){
    var self = this
    $.ajax({
        type: "get",
        url: "http://localhost:4000/goodslist",
        
        data: {
            
        },
        success(result) {
          // self.goodslist = result
            // console.log(self.goodslist)
            result.forEach(function(item){
              if(item.type==='phone'){
                self.phone.push(item)
              }else if(item.type === 'ears'){
                self.ears.push(item)
              }else if(item.type === 'parts'){
                self.parts.push(item)
              }else{
                self.life.push(item)
              }
            })


        }
            })
  },

}
</script>

<style>
.list-title {
    font-size: 4.62963vw;
    font-weight: 700;
    padding: 6vw 0 7vw;
    text-align: center;
    position: relative;
}
.list-title:after {
    position: absolute;
    content: '';
    width: 6vw;
    height: .7vw;
    background: #0BBBEF;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    bottom: 4vw;
}
.index-phone-list .list-ad a {
    display: block;
}
.index-phone-list .list-ad img {
    display: block;
    width: 100%;
}
.phone-list {
    display: flex;
    flex-wrap: wrap;
    background: #f4f4f4;
    padding: 1.5vw 0;
    align-items: center;
    justify-content: space-between;
}
.phone-list .phone-content {
    width: 49.2%;
    text-align: center;
    background: #fff;
    height: 65vw;
    padding-top: 3vw;
    line-height: 4.5vw;
    position: relative;
    margin-bottom: 1.5vw;
}
.phone-list .phone-content img {
    display: block;
    width: 90%;
    margin: 0 auto;
}
.phone-list .phone-content .info {
    width: 100%;
    height: 15.5vw;
    position: absolute;
    left: 0;
    bottom: 2vw;
}
.phone-list .phone-content .info {
    width: 100%;
    height: 15.5vw;
    position: absolute;
    left: 0;
    bottom: 2vw;
}
.phone-list .phone-content .products-name {
    font-size: 3.35vw;
    color: #333;
    font-weight: 700;
    margin-bottom: .5vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.phone-list .phone-content .slogan {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    font-size: 2.6vw;
    color: #999;
    margin: 0 1.5vw;
    margin-bottom: .5vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.phone-list .phone-content .slogan.slogan-sale span {
    color: #E82B4B;
    border: 1px solid #E82B4B;
}
.phone-list .phone-content .slogan span {
    height: 16px;
    font-style: normal;
    padding: 0 1.25vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid transparent;
}
.phone-list .phone-content .slogan em {
    float: left;
    padding: 0 1.25vw;
    margin-left: -1.25vw;
    margin-right: 1.25vw;
    color: #fff;
    background-color: #E82B4B;
}
.phone-list .phone-content .price {
    font-size: 4vw;
    color: #e82b4b;
}
.accessoary-ad {
    height: 43.88889vw;
    position: relative;
    background: #7063c9;
    overflow: hidden;
}
.accessoary-ad:nth-child(odd) div {
    right: 0;
}
.accessoary-ad div {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    color: #fff;
    line-height: 6vw;
    padding: 8vw;
}
.accessoary-ad:nth-child(odd) img {
    left: 0;
}
.accessoary-ad img {
    position: absolute;
    width: 50%;
}
fieldset, img {
    border: 0;
}
.accessoary-ad h4 {
    font-size: 4.3vw;
    width: 35.18519vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.accessoary-ad p {
    font-size: 2.77778vw;
    color: rgba(255,255,255,.7);
    position: relative;
    line-height: 1.2;
    padding: 1.2vw 0;
}
.accessoary-ad span {
    position: absolute;
    left: 8vw;
    bottom: 6vw;
    font-size: 4.62963vw;
}
.accessoary-ad:nth-child(even) img {
    right: 0;
}
</style>
