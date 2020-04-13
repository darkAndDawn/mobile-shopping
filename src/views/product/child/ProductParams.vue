<template>
    <div id="ProductParams">
        <van-tabs v-model="active" sticky offset-top="46">
            <van-tab title="详情">
                <img :src="item.path" v-for="item in productInfo.detailImgList" :key="item.id">
            </van-tab>
            <van-tab title="参数">
                <van-cell-group>
                    <van-cell v-for="item in productInfo.properties" :key="item.id">
                        <van-col span="10">{{item.name}}</van-col>
                        <van-col span="14">{{item.detail}}</van-col>
                    </van-cell>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "ProductParams",
        props: {
            productInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>
    #ProductParams img {
        width: 100%;
    }
    .van-cell{
        font-size: 12px;
        /*position: sticky;*/
    }
</style>