<template>
    <!--HTML-->
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <img src="https://fms.res.meizu.com/dms/2018/09/19/2e230b84-0259-44e3-a8af-1787b530d340.jpg" class="swiper-slide" />
            <img src="../../assets/banner1.jpg" class="swiper-slide" />
            <img src="../../assets/banner2.jpg" class="swiper-slide" />
            <img src="../../assets/banner3.jpg" class="swiper-slide" />
            <img src="../../assets/banner4.jpg" class="swiper-slide" />

        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    //swiper.js
    import Swiper from 'swiper'
    //swiper.css
    import "../../../node_modules/swiper/dist/css/swiper.css"
    export default {
        mounted() {
            var swiper = new Swiper('.swiper-container', {
              spaceBetween: 0,
              centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
        }
    }
</script>

<style scoped>
    /*CSS*/


    .swiper-container {
    position: relative;
    width: 100%;
    height: 51.85185vw;
    overflow: hidden;
    /*padding-top: 24vw;*/
    }
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    img{
        width: 100%;
    }
</style>