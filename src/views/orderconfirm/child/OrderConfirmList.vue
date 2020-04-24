<template>
    <div id="orderConfirmList">
        <div class="location">
            <van-cell title="请选择收货地址" is-link
                      :to="{path:'/address',query:{from:'order'}}"
                      v-if="!$store.state.selectAddr.name"/>
            <van-cell
                    v-else
                    :title="`${$store.state.selectAddr.name}，${$store.state.selectAddr.tel}`"
                    is-link
                    :label="`${$store.state.selectAddr.address}`"
                    :to="{path:'/address',query:{from:'order'}}"/>
        </div>
        <div class="content">
            <van-cell
                    center
                    v-for="item in orderList"
                    :title="item.name"
                    :value="`${item.count}件`"
                    :label="`￥${item.price}`"
                    :icon="item.cover"
                    :key="item.product_id"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderConfirmList",
        props:{
            orderList:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #orderConfirmList {
        margin-top: 46px;
    }
.content{
    height: calc(100vh - 96px - 64px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

}
    .location {
        border-top: 10px solid rgba(180, 180, 180, .1);
        border-bottom: 10px solid rgba(180, 180, 180, .1);
    }

    .van-icon__image {
        font-size: 66px;
        vertical-align: middle;
    }
    .van-cell__left-icon{
        height: auto;
    }
    .van-cell__title span{
        overflow:hidden;
        display:-webkit-box;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        white-space:normal;
    }
</style>