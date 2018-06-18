<template>
    <div class="container">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label">昵称</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="firstname" placeholder="请输入要修改的昵称">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">修改密码</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="请输入旧密码">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">修改密码</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="请输入新密码">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">确认密码</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="请确认密码">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success btn-block btn-lg">确认修改</button>
                </div>
            </div>
        </form>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "Set",
    data() {
        let userinfo = this.$route.params;
        return {
            // bannerImage: `background-image:url("${dressInfo.src}")`,
            info: userinfo,
            // skillIndex: 0
            nickname: ""
        };
    },
    created() {
        // this.nickname =
    }
};
</script>

<style lang='scss' scoped>
ul {
    list-style: none;
    padding: 0px;
    li {
        border-bottom: 1px solid #eee;
        padding: 20px;
        font-size: 1.2rem;
    }
}
</style>
