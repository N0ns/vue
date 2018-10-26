<template>
    <div class="scroll-wrap auto-keyword" id="J_autoKeywordWrap" style=" transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); height: 523px;" v-show="show" > 
        <div style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"> 
            <div class="so-list">
                <div class="lists">
                    <a v-for="item in goods"  v-html="`${item.name}<span>约${item.num}种</span>`" ></a>
      
     </div>
    </div> 
   </div> 
  </div>
</template>

<script>
export default{
    data(){
        return {
            key:'',
            goods:[],
            show:false
        }
    },
    computed:{
        dosearch(){
            console.log(this.key)
            this.key = this.$store.state.searchText
             var self = this;
            $.ajax({
                        type: "get",
                        url: "https://lists.meizu.com/search/primary/autocomplete",
                        
                        data: {
                            keyword:this.key
                        },
                        success(result) {
                            console.log(result)
                            if(result.autoComplete!==[]){
                               self.goods=result.data.autoComplete
                               self.show = true
                               
                            }else if(self.goods === []){
                                self.show = false

                            }
                        }
            })
            if(this.key === ''){
                this.show = false
            }
            return true
        }
       
    }
}
</script>

<style>
    .search-box .scroll-wrap.auto-keyword {
    background: #fff;
    position: absolute;
    z-index: 1002;
    top: 44px;
    display: block;
}

.search-box .scroll-wrap {
    width: 100%;
    height: 800px;
    overflow-y: auto;
}
.search-box .scroll-wrap.auto-keyword .so-list {
    padding: 13px;
    box-sizing: border-box;
    font-size: 14px;
    overflow: hidden;
    padding-top: 0;
}
.search-box .scroll-wrap.auto-keyword .so-list .lists a {
    display: block;
    width: 100%;
    height:39px;
    line-height: 39px;
    border-bottom: 1px solid #eee;
    color: #666;
}
</style>
