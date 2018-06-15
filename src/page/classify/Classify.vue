<template>
    <div class="container">
        <div class="search">
            <input type="text" class="input" value="" placeholder="2018新款鱼尾轻婚纱礼服">
            <i @click="search()"><img src="./../../../static/img/icon/search.png" alt=""></i>
        </div>
        <!-- <ul>
            <li v-for="classify in product" :key="classify.id"></li>
        </ul> -->
        <ul>
            <li>
                <div class="img">
                    <img src="./../../../static/img/bubble/gown_3_1.jpg" alt="">
                </div>
                <div class="info">
                    <p class="classify">蓬蓬裙</p>
                    <p class="desc">蓬蓬裙的设计发过公主对。。</p>
                    <p>更多>></p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="./../../../static/img/trailing/gown_2_1.jpg" alt="">
                </div>
                <div class="info">
                    <p class="classify">鱼尾裙</p>
                    <p class="desc">蓬蓬裙的设计来源于。。</p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="./../../../static/img/shoulder/gown_1_1.jpg" alt="">
                </div>
                <div class="info">
                    <p class="classify">一字肩</p>
                    <p class="desc">蓬蓬裙的设计来源于。。</p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="./../../../static/img/waist/gown_4_1.jpg" alt="">
                </div>
                <div class="info">
                    <p class="classify">长拖尾</p>
                    <p class="desc">蓬蓬裙的设计来源于。。</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Classify",
    // data() {
    //     return {
    //         product: {}
    //     };
    // },
    // created() {
    //     axios.get("../../static/json/data.json").then(res => {
    //         console.log(res.data)
    //         this.product = res.data;
    //     });
    // },
    methods: {
        search() {
            var value = document.getElementsByClassName("input")[0].value;
            console.log(value);
        }
    }
};
</script>

<style lang='scss' scoped>
* {
    margin: 0;
    padding: 0;
}
.search {
    height: 40px;
    width: 90%;
    position: relative;
    .input {
        width: 100%;
        border-radius: 25px;
        display: block;
        padding: 8px;
        outline: none;
    }
    i {
        position: absolute;
        top: 5px;
        right: 0;
        img {
            width: 24px;
        }
    }
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        width: 100%;
        // height: 100px;
        // border-bottom: 1px rgba(109, 95, 93, 0.2) solid;

        .img {
            clear: both;
            width: 30%;
            // height: 100px;
            margin-right: 2%;
            float: left;
            margin-bottom: 10px;
            margin-top: 10px;
            border-bottom: 1px rgba(109, 95, 93, 0.2) solid;
            // border: 1px solid #eee;
            img {
                width: 100%;
            }
        }
        .info {
            width: 60%;
            // height: 100px;
            float: left;
            margin-bottom: 10px;
            // border-bottom: 1px rgba(109, 95, 93, 0.2) solid;
            margin-top: 10px;
            .classify {
                font-size: 1.2rem;
                color: black;
            }
            .desc {
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 60px;
            }

            // border: 1px solid #eee;
        }
    }
}
</style>
