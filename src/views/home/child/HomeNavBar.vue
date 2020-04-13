<template>
    <div id="NavBar">
        <van-nav-bar title="精选" fixed z-index="9">
            <template #left>
                <van-icon name="location-o" size="14" /> 深圳市
            </template>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>

    export default {
        name: "HomeNavBar",
    }
</script>

<style scoped>

</style>