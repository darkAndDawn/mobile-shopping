<template>
    <div id="addrMain">
        <van-address-list
                v-model="chosenAddressId"
                :list="addressList"
                :switchable="$route.query.from == 'order' ? true : false"
                @edit="editClick"
                @add="newAddrAdd"
                @select="select"
        />
    </div>
</template>

<script>
    export default {
        name: "AddrMain",
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    },
                ],

            };
        },

        methods: {
            select(item){
                this.$store.commit('updataSelectAddr',item)
                this.$router.back()
            },
            //编辑地址
            editClick(item) {
                console.log(item)
                this.$router.push({
                    path:'/addressEdit',
                    query:{
                        id:item.id
                    }
                })
            },
            //新增地址
            newAddrAdd(){
                this.$router.push({
                    path:'/addressEdit',
                    query:{
                        id:0
                    }
                })
            }
        },
        computed: {
            addressList() {
                if (!this.$store.state.user.addressList) {
                    return
                }
                let addrArr = this.$store.state.user.addressList
                let addrList = []
                addrArr.forEach(item => {
                    addrList.push(
                        {
                            id: item.id,
                            name: item.name,
                            tel: item.mobile,
                            address: `${item.province}${item.city}${item.country}${item.detail}`
                        }
                    )
                })
                console.log(addrList)
                return addrList

            }
        },

    }
</script>

<style scoped>

</style>