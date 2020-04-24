<template>
    <div>
        <van-grid>
            <van-grid-item icon="pending-payment" text="待付款" />
            <van-grid-item icon="records" text="待发货" />
            <van-grid-item icon="tosend" text="已发货" />
            <van-grid-item icon="logistics" text="已完成" />
        </van-grid>
        <van-cell-group>
            <van-cell title="全部订单" is-link icon="records"/>
            <van-cell title="我的收藏" is-link icon="like-o"/>
            <van-cell title="收货地址" is-link icon="description" :to="{path:'/address',query:{from:'user'}}"/>
            <van-cell title="用户设置" is-link icon="setting-o"/>
        </van-cell-group>

    </div>
</template>

<script>
    export default {
        name: "UserGrid"
    }
</script>

<style scoped>

</style>