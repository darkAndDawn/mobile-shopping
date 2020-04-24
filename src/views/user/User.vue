<template>
    <div>
        <user-header></user-header>
        <tab-bar :index="2"></tab-bar>
        <user-grid></user-grid>
    </div>
</template>

<script>
    import UserHeader from "./child/UserHeader";
    import UserGrid from "./child/UserGrid";
    import TabBar from "../../components/tabbar/TabBar";

    export default {
        name: "User",
        components:{
            UserHeader,
            UserGrid,
            TabBar,

        }
    }
</script>

<style scoped>

</style>