<template>
    <!-- <div class="band"></div> -->
    <section class="list-filter" id="J_listFilter">
        
        <ul class="flex">
            <li :class="{'current':!isClick}" data-type="SYS" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" @click="sortPrice(0)" >
                <a data-mtype="mall_list_sxl_all">
                                        全部<i class="arrow-down"></i>
                                    </a>
                                </li>
                                <li data-type="PRICE" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" :class="{'current':isClick}" @click=sortPrice>
                                    <a data-mtype="mall_list_sxl_price">
                                        价格<i class="arrow-mini-up " :class="{'active':arrow===1}"></i><i class="arrow-mini-down" :class="{'active':arrow===2}"></i>
                                    </a>
                                </li>

                                <li id="J_btnChangeStyle" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                                    <a href="javascript:;" data-mtype="mall_list_sxl_w">
                                        <i class="iconfont icon-filter grid"></i>
                                        <!--网格{grid}，列表{list}-->
                                    </a>
                                </li>
        </ul>
    </section>

</template>
<script>
    export default{
        data(){
            return {
                arrow:0,
                type:'',
                isClick:false

            }
        },
        methods:{
            sortPrice(all){
                if(all===0){
                    this.isClick = false
                }else{
                    if(this.arrow>1){
                    this.arrow=1
                    // sortPrice()
                    }else{
                        this.arrow++
                    }
                    this.$store.state.arrow=this.arrow
                    this.isClick = true
                }
                
            }
        },
        mounted(){
                this.type=this.$store.state.type

        }
    }

</script>
<style scoped>

</style>