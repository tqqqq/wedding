<template>
    <div class="container">
        <div v-if="arr_gown.length==0">
            <div class="cart" :style="bannerImage"></div>
            <p class="go" @click="go_index()">前往首页挑选商品 ></p>
        </div>
        <div v-if="arr_gown.length!=0" class="cart_product">
            <h3>编辑</h3>
            <div class="cart_s" v-for="dress in arr_gown" :key="dress.id">
                <img class="cart_img" :src="dress.src" alt="">
                <div class="cart_r">
                    <p>{{ dress.name }}</p>
                    <p>{{ dress.category }}</p>
                    <p>￥{{ dress.price }}</p>
                    <div class="inp_box">
                        <input class="jian" type="button" value="-"><input class="inp_shu" readonly type="text" value="1"><input class="jia" type="button" value="+">
                    </div>
                </div>
            </div>
            <button class="btn btn-block btn-primary btn-lg">前往支付</button>
        </div>
    </div>
</template>

<script>
import "bootcss";
import "bootjs";
export default {
    name: "Carts",
    data() {
        return {
            bannerImage: `background-image:url("./../../static/img/background/cart_empty_bg.jpg")`,
            arr_gown: []
        };
    },
    created() {
        this.arr_gown = [];
        let product = JSON.parse(window.localStorage.product);
        for (let x in product) {
            let product_1 = JSON.parse(product[x]);
            this.arr_gown.push(product_1);
        }
    },
    mounted() {},
    methods: {
        go_index() {
            this.$router.push({ name: "Home" });
        }
    }
};
</script>

<style lang="scss" scoped>
.cart {
    padding: 6px;
    background-size: 100% 100%;
    height: 300px;
}
.go {
    text-align: center;
    cursor: pointer;
    color: rgb(241, 165, 177);
}
//有商品时
.cart_product {
    padding: 0px 6px;
    height: 100%;
    h3 {
        text-align: right;
        margin: 3px 0px;
        font-size: 1.2rem;
    }
    .cart_s {
        background: white;
        padding: 8px 0px;
        border-bottom: 1px solid rgb(118, 177, 230);
        margin: 20px 0px;
        .cart_img {
            width: 30%;
        }
        .cart_r {
            position: relative;
            width: 60%;
            float: right;
            p:nth-child(1) {
                font-size: 1.1rem;
                margin-bottom: 5px;
            }
            p:nth-child(2) {
                font-size: 1.1rem;
                margin-bottom: 5px;
            }
            p:nth-child(3) {
                font-size: 1.4rem;
                color: rgb(255, 145, 0);
            }
            .inp_box {
                position: absolute;
                bottom: 20px;
                right: 0px;
                .jian,
                .jia {
                    height: 25px;
                    width: 20px;
                    background: #29f;
                    border: none;
                }
                .inp_shu {
                    width: 40px;
                    text-align: center;
                }
                // .jia {
                //     width: 20px;
                //     background: #29f;;
                //     border: none
                // }
            }
        }
    }
    .go_zhifu {
        margin-top: 10px;
    }
    button {
        margin-top: 20px;
        background: #29f;
        border: none;
    }
}
</style>
