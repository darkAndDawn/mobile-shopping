<template>
    <div id="swipe">
        <van-swipe class="my-swipe" :autoplay="1500" indicator-color="#1989fa">
            <van-swipe-item v-for="item in swipeList">
                <img :src="item.path" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "ProductSwipe",
        props: {
            swipeList: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #swipe {
        width: 100vw;
    }

    #swipe .my-swipe img{
        width: 100%;
    }
</style>