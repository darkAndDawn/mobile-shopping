<template>
    <div id="HomeMain">
        <div class="item" v-for="item in producuList" :key="item.id" @click="itemClick(item.id)">
            <div>
                <img v-lazy="item.cover" alt="">
                <div class="bottom">
                    <h3 class="name">{{item.name}}</h3>
                    <span class="price">￥{{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMain",
        props: {
            producuList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods:{
            itemClick(id){
                this.$router.push({
                    path:'/product',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #HomeMain {
        height: calc(100vh - 96px);
        margin-top: 46px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .item {
        width: 50%;
        box-shadow: 0 0 1px #ddd;
        box-sizing: border-box;
        padding: 3px 5px;
        position: relative;
        padding-bottom: 45px;
    }

    .item img {
        width: 100%;
    }
    .item .bottom{
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        padding: 0 10px;
    }
    .item .bottom .name{
        fpadding: 1.5vw 0 0 3vw;
        color: #333;
        font-size: 4.2vw;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    .item .bottom .price{
        color: #EA625B;
        font-size: 3.6vw;
    }
</style>