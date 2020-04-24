<template>
    <div>
        <addr-edit-nav-bar></addr-edit-nav-bar>
        <addr-edit-main></addr-edit-main>
    </div>
</template>

<script>
    import AddrEditNavBar from "./child/AddrEditNavBar";
    import AddrEditMain from "./child/AddrEditMain";
    export default {
        name: "AddressEdit",
        components: {AddrEditMain, AddrEditNavBar},
        data(){
            return {
                addrId:null
            }
        },
        created() {
            this.addrId = this.$route.query.id
        }
    }
</script>

<style scoped>

</style>