<template>
    <div class="container">
        <div class="bg" :style="bannerImage"></div>
        <div class="title">
            <p>{{info.name}}</p>
        </div>
        <div class="dress_desc">
            <p>{{info.from}}</p>
        </div>
        <div class="dress_price">价格：${{info.price}}</div>
        <div class="dress_price">所属类别：{{info.category}}</div>
        <div class="dress_price">上市年份：{{info.year}}</div>
        <div class="btns">
            <div @click="add_cart(info)">加入购物车</div>
            <div @click="go_cart()">立即购买</div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "Details",
    data() {
        let dressInfo = this.$route.params;
        return {
            bannerImage: `background-image:url("${dressInfo.src}")`,
            info: dressInfo,
            skillIndex: 0,
            arr_product: []
        };
    },
    methods: {
        //加入购物车
        add_cart(gown) {
            //向本地存储中存储添加的商品信息
            const productInfo = {
                name: gown.name,
                price: gown.price,
                src: gown.src,
                category: gown.category
            };
            this.arr_product.push(JSON.stringify(productInfo));
            window.localStorage.product = JSON.stringify(this.arr_product); //将storage转变为字符串存储
            var product = JSON.parse(window.localStorage.product);
            for (var i = 0; i < product.length; i++) {
                product[i] = JSON.parse(product[i]);
            }
            //此时job中存储的就是对象数组了
            alert("成功加入购物车");
            // console.log(window.localStorage.product);
            //改变父组件中的显示
            // this.$emit("cart","哈哈哈");
        },
        // 前往购物车
        go_cart() {
            //跳转到购物车组件
            this.$router.push({
                name: "Carts"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.bg {
    padding: 0;
    width: 100%;
    height: 200px;
    background-size: cover;
}
.title {
    width: 100%;
    background: url(./../../../static/img/background/titlebg.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    background-position: center;
    padding: 20px 0px;
    text-align: center;

    p {
        font-size: 1.3rem;
        font-weight: 600;
        color: #29f;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.dress_desc {
    text-indent: 2em;
}
.dress_price {
    //    color: #29f;
}
.btns {
    width: 100%;
    height: 60px;
    div {
        width: 35%;
        padding: 10px;
        text-align: center;
        margin: 5%;
        background: rgba(34, 152, 255, 0.781);
        color: white;
        font-size: 1.1rem;
        float: left;
    }
}
</style>
