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
            <div>加入购物车</div>
            <div>立即购买</div>
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
            skillIndex: 0
        };
    }
    // methods: {
    //     switchSkill(idx) {
    //         this.skillIndex = idx;
    //     }
    // }
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
    // height: 40px;
    background: url(./../../../static/img/background/titlebg.png);
    background-size: cover;
    box-sizing: border-box;
    background-position: center;
    padding: 20px 0px;
    // line-height: 40px;
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
.dress_desc{
    text-indent: 2em;
}
.dress_price{
//    color: #29f;
}
.btns{
    width: 100%;
    height: 60px;
    div{
        width: 30%;
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
