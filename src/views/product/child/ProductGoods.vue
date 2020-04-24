<template>
    <diV id="ProductGoods">
        <van-goods-action>
            <van-goods-action-icon
                    :icon="isLike ? 'like' : 'like-o'"
                    text="收藏" @click="likeClick"
                    :color="isLike ? 'red' : ''"/>
            <van-goods-action-icon icon="cart-o" text="购物车" to="/cart"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
            <van-goods-action-button type="danger" text="立即购买" @click="buy"/>
        </van-goods-action>
    </diV>
</template>

<script>
    export default {
        name: "ProductGoods",
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
                productId: null
            }
        },
        created() {
            this.productId = this.$route.query.id;
        },
        methods: {
            buy() {
                sessionStorage.setItem('orderList', JSON.stringify([{
                    product_id: this.productInfo.id,
                    cover: this.productInfo.cover,
                    name: this.productInfo.name,
                    price: this.productInfo.price,
                    count: 1
                }]))
                this.$router.push('/orderConfirm')
            },
            //加入购物车
            addCart() {
                this.request({
                    url: this.url.addCart,
                    method: 'post',
                    data: {
                        product_id: this.productId
                    }
                }).then(res => {
                    this.$toast("加入购物车成功")
                })
            },
            //收藏/取消收藏
            likeClick() {
                if (this.isLike) {
                    //取消收藏
                    this.request({
                        url: this.url.cancelLike,
                        method: 'get',
                        params: {
                            product_id: this.productId
                        }
                    }).then(res => {
                        this.$store.commit('cancelLike', this.productId)
                    })
                } else {
                    //收藏
                    let id = this.$route.query.id;
                    this.request({
                        url: this.url.like,
                        method: 'post',
                        data: {
                            product_id: id
                        }
                    }).then(res => {
                        console.log(res)
                        let obj = {
                            cover: this.productInfo.cover,
                            name: this.productInfo.name,
                            price: this.productInfo.price,
                            product_id: this.productId
                        }
                        this.$store.commit('likeList', obj)
                    })
                }

            }
        },
        computed: {
            //判断 是否收藏
            isLike() {
                if (!this.$store.state.user.likeList) {
                    return
                }
                let likeList = this.$store.state.user.likeList
                for (let i = 0; i < likeList.length; i++) {
                    if (likeList[i].product_id == this.productId) {
                        return true
                    }
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>