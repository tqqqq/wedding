<template>
    <div class="container">
         <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="firstname" placeholder="请输入收货人姓名">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="请输入收货人联系电话">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">邮编</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="收货地址邮编">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">详细地址</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" placeholder="收货详细地址">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success btn-block btn-lg">确认添加</button>
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
