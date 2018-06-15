<template>
    <div id="app">
        <header :style="bannerImage">{{ title }}</header>
        <!-- <div class="container"> -->
              <router-view />
        <!-- </div> -->
        <footer>
            <ul>
                <li v-for="(src,index) in iconsrc" :key="src.id" @click="routerlink(index)">
                    <img :src="src" alt="">
                </li>
            </ul>
            <ul>
                <li v-for="(item ,index) in navitem" :key="item.id" @click="routerlink(index)" :class="{active: shu==index}">{{ item }}</li>
            </ul>
        </footer>
      
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            bannerImage:`background-image:url("./static/img/background/navbg.jpg")`,
            title:"",
            shu:'',
            navitem: ['HOME','CATEGORY','CARTS','ME'],
            iconsrc:['./static/img/icon/home_act.png','./static/img/icon/classify.png','./static/img/icon/cart.png','./static/img/icon/me.png']
        }
    },
   created(){
        var name = this.$router.options.routes[1].name;
        this.$router.push({name: name});
        this.title = this.navitem[0];
   },
    methods:{
        routerlink(index){
            for(let x in this.iconsrc){
                if(this.iconsrc[x].indexOf('_act')!=-1){
                    var arr = this.iconsrc[x].split('_');
                    var arr_1 = arr[1].split('.');
                    var str = arr[0]+'.'+arr_1[1];
                    this.iconsrc[x] = str;
                }
            }
            //改变头部文字
            var name = this.$router.options.routes[index+1].name;
            this.$router.push({name: name});
            this.title = this.navitem[index];
            this.shu = index;
            var src = this.iconsrc[index].split('.');
            var reasrc = '.'+src[1]+"_act."+src[2];
            // alert(reasrc);
            
            //改变底部点击效果
            
            this.iconsrc[index] = reasrc;
           
        }
    },
    mounted() {
        
    }
};
</script>

<style lang="scss">
html,body {
    font: normal 16px "微软雅黑", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    font-size: 14px;
    height: 100%;
}
#app{
    height: 100%;
    header{
        height: 50px;
        // background-image: url(./static/img/background/navbg.jpg);
        text-align: center;
        box-sizing: border-box;
        font-size: 1.8rem;
        color: black;
        background-size: cover;
        line-height: 50PX;
        letter-spacing: 5px;
    }
    .container{
        box-sizing: border-box;
        height: calc(100% - 111px);
        padding: 12px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    footer{
        height: 60px;
        border-top: 1px solid rgb(20, 0, 9);
        padding-top: 10px;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                float: left;
                width: 25%;
                text-align: center;
                img{
                    width: 24px;
                }
            }
        }
    }
}
//文字变色
.active{
    color: #d4237a;
}
</style>
