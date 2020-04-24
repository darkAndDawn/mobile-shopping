<template>
    <div>
        <cart-nav-bar></cart-nav-bar>
        <cart-list :cartArr="cartArr"></cart-list>
        <cart-submit-bar :cartArr="cartArr"></cart-submit-bar>
    </div>
</template>

<script>
    import CartNavBar from "./child/CartNavBar";
    import CartSubmitBar from "./child/CartSubmitBar";
    import CartList from "./child/CartList";
    export default {
        name: "Cart",
        components:{
            CartNavBar,
            CartSubmitBar,
            CartList
        },
        data(){
            return{
                cartArr:[]
            }
        },
        created() {
            this.getCartData()
        },
        methods:{
            getCartData(){
                this.request({
                    url:this.url.getCartData
                }).then(res=>{
                    console.log(res)
                    this.cartArr = res.data
                })
            }
        }

    }
</script>

<style scoped>

</style>