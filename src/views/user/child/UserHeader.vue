<template>
    <div id="me">
        <div class="head" v-if="!$store.state.user.name">
            <img src="~assets/img/dog.jpg" alt="">
            <span @click="userLogin">登录</span>
        </div>
        <div class="head" v-else>
            <img :src="`http://192.168.3.250:8360${$store.state.user.avatar}`" alt="">
            <span>{{$store.state.user.nickname}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserHeader",
        methods:{
            userLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .head{
        width: 100vw;
        height: 28vw;
        background: #f44;
        line-height: 28vw;
    }
    .head img{
        vertical-align: middle;
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        margin-left: 20px;
        margin-right: 10px;
        object-fit: cover;
    }
    .head span{
        color: peachpuff;

    }
</style>