<template>
                <!--正常展示坑位-->
                <section class="list-goods" id="J_listGoods">
                <div v-text="isSortPrice" ></div>
                    <ul class="grid">
                        <!--网格{grid}，列表{list}-->
                        <li v-for="item in goodslist">
                            <a :href="`?id=${item._id}#/details`">
                                <img  :src="item.img">
                                <p>
                                    <span class="vm-tit" v-text="item.name"></span>
                                    <span class="vm-sub sale-tag gray" v-text="item.desc"></span>
                                    <span class="vm-price " v-html="`￥${item.price}<em></em>`" v-if="item.price"></span>
                                    <span class="vm-price " v-html="`${item.skuprice}<em></em>`" v-if="item.skuprice"></span>
                                </p>
                            </a>
                        </li>
                        
                    </ul>
                </section>


            
</template>

<script>
export default{
    data(){
        return {
            type:'',
            goodslist:[],
            sort:false
        }
    },
    computed:{
        isSortPrice(){
            if(this.$store.state.arrow>0){
                this.sortPrice(this.$store.state.arrow)
            }
        }
    },
    methods:{
        sortPrice(arrow){
            this.goodslist.sort(function(obj1,obj2){
                var val1;
                var val2
                if(obj1.skuprice){
                    val1 = obj1.skuprice.split('￥')[1]
                }else{
                    val1 = obj1.price
                }
                if(obj2.skuprice){
                    val2 = obj2.skuprice.split('￥')[1]
                }else{
                    val2 = obj2.price
                }
                if(arrow===1){
                    return val1-val2
                }else{
                    return val2-val1
                }
                
            })
        }
    },
    mounted(){
        this.type=this.$store.state.type
        var self = this
        $.ajax({
                type: "get",
                url: "http://localhost:4000/type",
                
                data: {
                    type:self.type
                },
                success(result) {
                    self.goodslist = result
                    


                }
        })
    }
}
</script>
    
<style>








</style>
