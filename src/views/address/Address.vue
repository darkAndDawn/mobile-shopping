<template>
    <div>
        <addr-nav-bar></addr-nav-bar>
        <div class="content">
            <addr-main></addr-main>
        </div>

    </div>
</template>

<script>
    import AddrNavBar from "./child/AddrNavBar";
    import AddrMain from "./child/AddrMain";
    export default {
        name: "Address",
        components: {AddrMain, AddrNavBar}
    }
</script>

<style scoped>
.content{
    height: calc(100vh - 96px);
    margin-top: 46px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>