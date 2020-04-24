<template>
    <div>
        <span class="txt">支付成功!</span>
        <van-button type="primary" block to="/home">返回首页</van-button>
        <van-button type="primary" block
                    to="/orderInfo"
        >查看订单
        </van-button>
    </div>
</template>

<script>
    export default {
        name: "PaySuccess"
    }
</script>

<style scoped>
    .txt {
        line-height: 50px;
    }

    .van-button {
        margin-top: 5px;
    }
</style>