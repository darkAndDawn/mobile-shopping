<template>
    <div>
        <home-nav-bar></home-nav-bar>
        <home-main :producuList="producuList" @scroll.native="scroll" ref="main"></home-main>
        <home-go-top @click.native="GoTop" v-show="isTop"></home-go-top>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HomeNavBar from "./child/HomeNavBar";
    import TabBar from "../../components/tabbar/TabBar";
    import HomeMain from "./child/HomeMain";
    import HomeGoTop from "./child/HomeGoTop";
    import {Toast} from "vant";

    export default {
        name: "Home",
        components: {
            HomeNavBar,
            TabBar,
            HomeMain,
            HomeGoTop
        },
        data() {
            return {
                producuList: [],
                page: 1,
                isPullUpFlag:false,
                totalPages:null,
                isTop:false,
                mainDom:null
            }
        },
        created() {
            this.getProducuList(this.page)
        },
        methods: {
            GoTop(){
                this.mainDom.scrollTop = 0
            },
            scroll() {
                this.mainDom = this.$refs.main.$el
                this.mainDom.scrollTop > 1500 ? this.isTop = true : this.isTop = false
                if (this.page > this.totalPages){
                    this.$toast("没有更多数据了")
                    return;
                };
                if (this.isPullUpFlag){
                    return
                };

                //可视高度
                //console.log(mainDom.clientHeight);
                //
                //console.log(mainDom.scrollTop);
                //滚动的总距离
                //console.log(mainDom.scrollHeight);
                if (this.mainDom.clientHeight + this.mainDom.scrollTop >= this.mainDom.scrollHeight - 1) {
                    this.page++
                    this.getProducuList(this.page)
                }
            },
            getProducuList(page) {
                this.isPullUpFlag = true
                this.request({
                    url: this.url.productList,
                    method: 'get',
                    params: {
                        page: page,
                        size: 10
                    }
                }).then(res => {
                    console.log(res)
                    this.totalPages = res.data.totalPages
                    this.producuList = this.producuList.concat(res.data.data)
                    this.isPullUpFlag = false
                })
            }
        }
    }
</script>

<style scoped>

</style>