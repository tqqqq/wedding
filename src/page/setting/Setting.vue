<template>
    <div class="container">
        <div class="container-fluid" v-show="logininfo">
            <div class="row-fluid">
                <div class="span12">
                    <div class="tabbable" id="tabs-89035">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#panel-901618" data-toggle="tab">登录</a>
                            </li>
                            <li>
                                <a href="#panel-323042" data-toggle="tab">注册</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="panel-901618">
                                <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="firstname" placeholder="请输入手机号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="password" class="form-control" id="lastname" placeholder="请输入密码">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button type="button" class="btn btn-primary btn-lg btn-block" @click="login()">登录</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane" id="panel-323042">
                                <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="tel" placeholder="请输入手机号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="nickname" placeholder="请输入昵称">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="password" class="form-control" id="password" placeholder="请输入密码">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <input type="password" class="form-control" id="password_com" placeholder="请确认密码">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button type="button" class="btn btn-primary btn-lg btn-block" @click="register()">注册</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="setting" v-if="!logininfo">
            <li class="touxiang">
                <p>{{user}}</p>
            </li>
            <li @click="routerLink()" >设置个人资料<span>></span></li>
            <li @click="routerLink2()">收货地址管理<span>></span></li>
            <li>我的订单<span>></span></li>
            <li>我的评价<span>></span></li>
            <li>商品收藏<span>></span></li>
            <li>店铺收藏<span>></span></li>
            <li>浏览记录<span>></span></li>
            <button type="button" class="btn btn-danger btn-lg btn-block" @click="quit()">退出登录</button>
        </ul>
    </div>
</template>

<script>
import "bootjs";
import "bootcss";
export default {
    name: "Setting",
    data() {
        return {
            product: {},
            arr: [],
            logininfo: " ",
            user:''
        };
    },
    created() {
        axios.get("../../static/json/user.json").then(res => {
            console.log(res.data);
            this.product = res.data;
        });
       
    },
    methods: {
        register() {
            const telVal = $("#tel").val();
            const nickname = $("#nickname").val();
            const password = $("#password").val();
            const password_com = $("#password_com").val();
            let telreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            let pwdreg = /^[A-Za-z0-9]{6,20}$/;

            if (
                telreg.test(telVal) &&
                pwdreg.test(password) &&
                password == password_com
            ) {
                alert("true");
                const info = {
                    name: telVal,
                    pwd: password,
                    nickname: nickname
                };
                this.arr.push(JSON.stringify(info));
                window.localStorage.user = JSON.stringify(this.arr); //将storage转变为字符串存储
                var user = JSON.parse(window.localStorage.user);
                for (var i = 0; i < user.length; i++) {
                    user[i] = JSON.parse(user[i]);
                }
                // console.log(window.localStorage.user);
                //此时job中存储的就是对象数组了
            } else {
                alert("手机号或密码不符合规则（密码数字字母组合6-20位）！");
            }
        },
        login() {
            const tel = $("#firstname").val();
            const pwd = $("#lastname").val();
            let userarr = JSON.parse(window.localStorage.user);
            let n = 0;
            for (let i in userarr) {
                if (
                    tel == JSON.parse(userarr[i]).name &&
                    pwd == JSON.parse(userarr[i]).pwd
                ) {
                    n++;
                }
            }
            if (n == 0) {
                alert("账号或者密码错误");
            } else {
                window.localStorage.loginuser = tel;
                if (window.localStorage.loginuser) {
                    this.logininfo = false;
                    this.user = window.localStorage.loginuser;
                }

                console.log(this.logininfo);
                alert("登陆成功");
            }
        },
        quit(){
            window.localStorage.loginuser = "";
            this.logininfo = true;
            
        },
         //路由跳转
        routerLink() {
            //编程式路由
            this.$router.push({
                name: "Set",
                title:"set",
            });
        },
         routerLink2() {
            //编程式路由
            this.$router.push({
                name: "Address",
                title:"address",
            });
        }
    },
    computed: {
        
    },
    mounted(){
         if (window.localStorage.loginuser) {
            this.logininfo = false;
            
        }else{
            window.localStorage.loginuser = "";
            this.logininfo = true;
            // this.user = window.localStorage.loginuser;
        }
        
    }
};
</script>

<style  lang='scss' scoped>
form {
    margin: 30px 0px;

    input {
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    .btn {
        border: none;
        background: #d4237a !important;
    }
}
.setting{
    list-style: none;
    padding: 0;
    li{
        padding: 20px;
        border-bottom:1px solid #eee; 
        span{
            width: 20px;
            height: 20px;
            float: right;
        }
    }
    .touxiang{
        padding: 0;
        height: 150px;
        background: url(./../../../static/img/banner/banner02.jpg);
        background-size: 100% 100%;
        p{
            text-align: center;
            line-height: 150px;
            font-size: 2rem;
            color: #29f;
        }
    }
}
</style>
