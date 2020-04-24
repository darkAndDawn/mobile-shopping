<template>
    <div>
        <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow fixed
                z-index="9"
                @click-left="back">
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "AddrNavBar",
        data() {
            return {
                title: null
            }
        },
        created() {
            if (this.$route.query.from == 'order') {
                this.title = '请选择收货地址'
            } else if (this.$route.query.from == 'user') {
                this.title = '我的收货地址'
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>