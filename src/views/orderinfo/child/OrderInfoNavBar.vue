<template>
    <div>
        <van-nav-bar
                title="订单详情"
                left-text="返回"
                left-arrow fixed
                z-index="9"
                @click-left="back">
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "OrderInfoNavBar",
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>