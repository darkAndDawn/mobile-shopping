<template>
    <div id="ProductInfo">
        <div class="title">
            <h2 class="name">{{productInfo.name}}</h2>
            <span class="price">￥{{productInfo.price}}</span>
        </div>
        <van-cell-group>
            <van-cell>
                <van-col span="10">免运费</van-col>
                <van-col span="14">剩余：{{productInfo.stock}}件</van-col>
            </van-cell>
            <van-cell>
                <van-col span="10">销量：{{productInfo.sales}}</van-col>
                <van-col span="14">收藏：{{productInfo.likes}}</van-col>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "ProductInfo",
        props: {
            productInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    #ProductInfo .title{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
    }

    .title .name {
        font-size: 16px;
        font-weight: normal;
    }

    .title .price {
        color: #f44;
    }
    .van-cell{
        font-size: 12px;
        color: #323233;
    }

</style>