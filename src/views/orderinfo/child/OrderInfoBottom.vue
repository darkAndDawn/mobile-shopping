<template>
    <div>
        <van-submit-bar
                :price="totalPrice"
                button-type="primary"
                button-text="付款"
                @submit="onSubmit"
        >
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        name: "OrderInfoBottom",
        props: {
            orderInfoList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            onSubmit(){
                if (!this.$store.state.selectAddr.id){
                    this.$toast("未选择地址")
                    return
                }
                let params = {
                    orderProductList:this.orderInfoList,
                    user_address_id:this.$store.state.selectAddr.id
                }
                this.request({
                    url:this.url.create,
                    method:'post',
                    data:params
                }).then(res=>{
                    console.log(res)
                    if (res.errcode == 0){
                        this.bus.$emit('pwdShow1',{
                            show:true,
                            orderId:res.data.id
                        })
                    }
                })
            }
        },
        computed: {
            //计算总价
            totalPrice() {
                let price = 0
                this.orderInfoList.forEach(item => {
                    price += item.price * item.count
                })
                return price * 100
            }
        },
    }
</script>

<style scoped>
    .van-submit-bar__text{
        text-align: left;
    }
    .van-submit-bar{
        border-top: 1px solid #ebedf0;
    }
</style>