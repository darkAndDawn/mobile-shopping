<template>
    <diV id="ProductGoods">
        <van-goods-action>
            <van-goods-action-icon icon="like-o" text="收藏"/>
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="warning" text="加入购物车"/>
            <van-goods-action-button type="danger" text="立即购买"/>
        </van-goods-action>
    </diV>
</template>

<script>
    export default {
        name: "ProductGoods"
    }
</script>

<style scoped>

</style>