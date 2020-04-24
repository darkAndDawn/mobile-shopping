<template>
    <div>
<!--        :disabled="disabled"-->
        <van-submit-bar
                :price="totalPrice"
                button-text="付款"
                @submit="onSubmit"
        >
            <div slot="default">共：{{totalCount}}件</div>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        name: "OrderConfirmSubmitBar",

        /*data() {
            return {
                disabled: true,
            }
        },*/
        props: {
            orderList: {
                type: Array,
                default() {
                    return []
                }
            }
        },

        computed: {
            //计算件数
            totalCount() {
                let count = 0
                this.orderList.forEach(item => {
                    count += item.count
                    // count ? this.disabled = false : this.disabled = true
                })
                // if (this.orderList.length <= 0) {
                //     this.disabled = true
                // }
                return count
            },
            //计算总价
            totalPrice() {
                let price = 0
                this.orderList.forEach(item => {
                    price += item.price * item.count
                })
                return price * 100
            }
        },
        methods: {
            onSubmit(){
                if (!this.$store.state.selectAddr.id){
                    this.$toast("请选择地址")
                    return
                }
                let params = {
                    orderProductList:this.orderList,
                    user_address_id:this.$store.state.selectAddr.id
                }
                this.request({
                    url:this.url.create,
                    method:'post',
                    data:params
                }).then(res=>{
                    console.log(res)
                    if (res.errcode == 0){
                        this.bus.$emit('pwdShow',{
                            show:true,
                            orderId:res.data.id
                        })
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>