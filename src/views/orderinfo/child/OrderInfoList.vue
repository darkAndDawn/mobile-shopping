<template>
    <div id="orderInfoList">
        <van-cell
                center
                v-for="item in orderInfoList"
                :title="item.name"
                :value="`${item.count}件`"
                :label="`￥${item.price}`"
                :icon="item.cover"
                :key="item.product_id"
        />
    </div>

</template>

<script>
    export default {
        name: "OrderInfoList",
        props: {
            orderInfoList: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #orderInfoList {
        -webkit-overflow-scrolling: touch;
        height: calc(100vh - 242px);
        overflow-y: scroll;
    }

    .van-icon__image {
        font-size: 66px;
        vertical-align: middle;
    }

    .van-cell__left-icon {
        height: auto;
    }

    .van-cell__title span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
    }

</style>