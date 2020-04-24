<template>
    <div>
        <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow fixed
                z-index="9"
                @click-left="back">
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "AddrEditNavBar",
        data(){
            return {
                title:''
            }
        },
        created() {
            this.$route.query.id != 0 ? this.title = '编辑地址' : this.title = '新增地址'
        },
        methods:{
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>