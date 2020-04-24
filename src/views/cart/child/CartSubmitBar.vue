<template>
    <div>
        <van-submit-bar
                :disabled="disabled"
                :price="totalPrice"
                button-text="提交订单"
                @submit="onSubmit"
        >
            <div slot="default">共：{{totalCount}}件</div>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        name: "CartSubmitBar",
        data() {
            return {
                disabled: true,
            }
        },
        props: {
            cartArr: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            onSubmit() {
                let arr = []
                this.cartArr.forEach(item=>{
                    if (item.checked){
                        arr.push({
                            product_id:item.product_id,
                            price:item.price,
                            cover:item.cover,
                            name:item.name,
                            count:item.count
                        })
                    }
                })
                this.$router.push('/orderConfirm',sessionStorage.setItem('orderList',JSON.stringify(arr)))
            }
        },
        computed: {
            //计算件数
            totalCount() {
                let count = 0
                this.cartArr.forEach(item => {
                    if (item.checked) {
                        count += item.count
                    }
                    count ? this.disabled = false : this.disabled = true
                })
                if (this.cartArr.length <= 0) {
                    this.disabled = true
                }
                return count
            },
            //计算总价
            totalPrice() {
                let price = 0
                this.cartArr.forEach(item => {
                    if (item.checked) {
                        price += item.price * item.count
                    }
                })
                return price * 100
            }
        }
    }
</script>

<style scoped>

</style>