<template>
    <div id="cartList">
        <van-checkbox class="cartItem"
                      v-model="item.checked"
                      @change="checkedClick(item)"
                      v-for="item in cartArr" :key="item.product_id"
        >

            <van-card
                    :price="item.price.toFixed(2)"
                    :title="item.name"
                    :thumb="item.cover"
                    @click.stop
            >
                <div slot="num">
                    <van-stepper
                            v-model="item.count"
                            @plus="addCount(item)"
                            @minus="addCount(item)"
                            @blur="addCount(item)"/>
                    <van-button
                            type="danger"
                            size="20"
                            icon="delete"
                            @click="del(item)"
                    >
                    </van-button>
                </div>
            </van-card>
        </van-checkbox>
    </div>
</template>

<script>
    export default {
        name: "CartList",
        props: {
            cartArr: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            del(item) {
                this.request({
                    url: this.url.delCartItem,
                    params: {
                        product_id: item.product_id
                    }
                }).then(res => {
                    this.cartArr.forEach((cartArrItem, index) => {
                        if (item.product_id == cartArrItem.product_id) {
                            this.cartArr.splice(index, 1)
                        }
                    })
                })
            },
            //改变数量
            addCount(item) {
                this.$nextTick(() => {
                    this.request({
                        url: this.url.addCart,
                        method: 'post',
                        data: {
                            product_id: item.product_id,
                            count: item.count
                        }
                    }).then(res => {
                        console.log(res)
                    })
                })

            },
            //选中/不选中商品
            checkedClick(item) {
                this.request({
                    url: this.url.addCart,
                    method: 'post',
                    data: {
                        product_id: item.product_id,
                        checked: item.checked ? '1' : '0'
                    }
                }).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    #cartList {
        height: calc(100vh - 96px);
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        margin-top: 46px;
    }

    .van-checkbox {
        margin-top: 10px;
    }

    .cartItem {
        padding: 0 10px;
    }

    .van-card {
        width: 90vw;
    }

    .van-button {
        width: 25px;
        height: 25px;
        line-height: 25px;
        margin-left: 67px;
        margin-right: 15px;
    }

    .van-card span {
        color: #ff4444;
    }
</style>