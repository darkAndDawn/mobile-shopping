<template>
    <div>
        <order-confirm-nav-bar></order-confirm-nav-bar>
        <order-confirm-list :orderList="orderList"></order-confirm-list>
        <order-confirm-submit-bar :orderList="orderList"></order-confirm-submit-bar>
        <order-confirm-pad></order-confirm-pad>
    </div>
</template>

<script>
    import OrderConfirmNavBar from "./child/OrderConfirmNavBar";
    import OrderConfirmList from "./child/OrderConfirmList";
    import OrderConfirmSubmitBar from "./child/OrderConfirmSubmitBar";
    import OrderConfirmPad from "./child/OrderConfirmPad";
    export default {
        name: "OrderConfirm",
        components: {
            OrderConfirmPad,
            OrderConfirmNavBar,
            OrderConfirmList,
            OrderConfirmSubmitBar
        },
        data() {
            return {
                orderList: [],
                selectAddr: {}
            }
        },
        created() {
            this.orderList = JSON.parse(sessionStorage.getItem('orderList'))
        },

    }
</script>

<style scoped>

</style>