<template>
    <div class="container">
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-image:url(static/img/banner/banner01.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(static/img/banner/banner02.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(static/img/banner/banner03.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(static/img/banner/banner04.jpg)"></div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <ul>
            <p class="title">少女最爱的蓬蓬裙</p>
            <li class="goods" v-for="(bublle,index) in product" :key="bublle.id" v-if="index<5">
                <img :src="bublle.src" alt="">
                <p class="name" >{{bublle.name}}</p>
                <p class="price">￥{{bublle.price}}</p>
            </li>
        </ul>
        <ul>
            <p class="title">女生都梦想的鱼尾裙</p>
            <li class="goods" v-for="(bublle,index) in product" :key="bublle.id" v-if="index>4&&index<10">
                <img :src="bublle.src" alt="">
                <p class="name">{{bublle.name}}</p>
                <p class="price">￥{{bublle.price}}</p>
            </li>
        </ul>
        <ul>
            <p class="title">性感一字肩</p>
            <li class="goods" v-for="(bublle,index) in product" :key="bublle.id" v-if="index>9&&index<15">
                <img :src="bublle.src" alt="">
                <p class="name">{{bublle.name}}</p>
                <p class="price">￥{{bublle.price}}</p>
            </li>
        </ul>
        <ul>
            <p class="title">浪漫长拖尾</p>
            <li class="goods" v-for="(bublle,index) in product" :key="bublle.id" v-if="index>14&&index<21">
                <img :src="bublle.src" alt="">
                <p class="name">{{bublle.name}}</p>
                <p class="price">￥{{bublle.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import Swiper from "swiper-js";
import "swiper-css";
export default {
    name: "Home",
    data() {
        return {
            product: {}
        };
    },
    created() {
        axios.get("../../static/json/data.json").then(res => {
            //console.log(res.data)
            this.product = res.data;
        });
    },
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: ".swiper-pagination"
            }
        });
    }
};
</script>

<style scoped>
html,
body {
    background: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 12px;
}
.swiper-container {
    width: 100%;
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 200px;
}
ul{
    margin: 0;
    padding: 0;
}
ul li {
    list-style: none;
    width: 42%;
    float: left;
    margin: 4%;
    /* box-shadow: 0 0 5px 1px #200310; */
}
ul .title {
    clear: both;
    font-size: 20px;
    color: black;
    /* font-weight: 600; */
}
ul .price {
    color: #d4237a;
}
ul .name {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
ul li img {
    width: 100%;
}
</style>
