<template>
    <div id="orderInfoMain">
        <van-steps :active="active">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
        </van-steps>
        <div class="location">
            <van-cell title="未选择收货地址"
                      v-if="!$store.state.selectAddr.name"/>
            <van-cell
                    v-else
                    :title="`${$store.state.selectAddr.name}，${$store.state.selectAddr.tel}`"
                    :label="`${$store.state.selectAddr.address}`"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderInfoMain",
        data(){
            return {
                active:0
            }
        }
    }
</script>

<style scoped>
    #orderInfoMain{
        margin-top: 46px;

        }
    .location {
        border-top: 10px solid rgba(180, 180, 180, .1);
        border-bottom: 10px solid rgba(180, 180, 180, .1);
    }
</style>