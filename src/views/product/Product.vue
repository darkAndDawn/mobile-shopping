<template>
    <div id="product">
        <product-nav-bar></product-nav-bar>
        <div id="content">
            <product-swipe :swipeList="productInfo.imgList"></product-swipe>
            <product-info :productInfo="productInfo"></product-info>
            <product-params :productInfo="productInfo"></product-params>
        </div>
        <product-goods :productInfo="productInfo"></product-goods>
    </div>
</template>

<script>
    import ProductSwipe from "./child/ProductSwipe";
    import ProductNavBar from "./child/ProductNavBar";
    import ProductInfo from "./child/ProductInfo";
    import ProductParams from "./child/ProductParams";
    import ProductGoods from "./child/ProductGoods";

    export default {
        name: "Product",
        components: {
            ProductSwipe,
            ProductNavBar,
            ProductInfo,
            ProductParams,
            ProductGoods
        },
        data() {
            return {
                productId: null,
                productInfo: {}
            }
        },
        created() {
            this.productId = this.$route.query.id
            this.getProductInfo()
        },
        methods: {
            getProductInfo() {
                this.request({
                    url: this.url.productInfo,
                    method: 'get',
                    params: {
                        id: this.productId
                    }
                }).then(res => {
                    this.productInfo = res.data
                })
            }
        }
    }
</script>

<style scoped>
    #content {
        height: calc(100vh - 96px);
        margin-top: 46px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>