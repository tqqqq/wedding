<template>
    <div class="container">
        <div class="search">
            <input type="text" class="input" placeholder="2018新款鱼尾轻婚纱礼服" v-model="value" @input="change()">
            <i><img src="./../../../static/img/icon/search.png" alt=""></i>
        </div>

        <ul>
            <li v-for="(dress,index) in product" :key="(dress,index).id" @click="routerLink(dress)" >
                <div class="img">
                    <img :src="dress.src " alt="">
                </div>
                <div class="info">
                    <p class="classify">{{dress.category}}</p>
                    <p class="desc">{{dress.name}}</p>
                    <p>更多>></p>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name: "Classify",
    data() {
        return {
            value:"",
            product: []
        };
    },
    created() {
        axios.get("../../static/json/data.json").then((res) => {
            this.product = res.data;
        });
    },
    methods: {
        change() {
            this.product = [];
            axios.get("../../static/json/data.json").then((res) => {
            for(let i in res.data){
                if(res.data[i].name.includes(this.value)==true){
                    this.product.push(res.data[i]);
                }
            }
            
            
        });
        },
         //路由跳转
        routerLink(dressinfo) {
            //编程式路由
            this.$router.push({
                name: "Details",
                params: dressinfo,
                title:"details",
            });
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
        .img {
            clear: both;
            width: 30%;
            margin-right: 2%;
            float: left;
            margin-bottom: 10px;
            margin-top: 10px;
            border-bottom: 1px rgba(109, 95, 93, 0.2) solid;
            img {
                width: 100%;
            }
        }
        .info {
            width: 60%;
            float: left;
            margin-bottom: 10px;
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
        }
    }
}
</style>
