<template>
    <div>
        <order-info-nav-bar></order-info-nav-bar>
        <order-info-main></order-info-main>
        <order-info-list :orderInfoList="orderInfoList"></order-info-list>
        <order-info-bottom :orderInfoList="orderInfoList"></order-info-bottom>
        <order-info-pad></order-info-pad>
    </div>
</template>

<script>
    import OrderInfoNavBar from "./child/OrderInfoNavBar";
    import OrderInfoMain from "./child/OrderInfoMain";
    import OrderInfoList from "./child/OrderInfoList";
    import OrderInfoBottom from "./child/OrderInfoBottom";
    import OrderConfirmList from "../orderconfirm/child/OrderConfirmList";
    import OrderInfoPad from "./child/OrderInfoPad";
    export default {
        name: "OrderInfo",
        components: {
            OrderInfoPad,
            OrderInfoList,
            OrderConfirmList,
            OrderInfoBottom,
            OrderInfoMain,
            OrderInfoNavBar
        },
        data(){
            return {
                orderInfoList:[]
            }
        },
        created() {
            this.orderInfoList = JSON.parse(sessionStorage.getItem('orderList'))
        },
    }
</script>

<style scoped>

</style>