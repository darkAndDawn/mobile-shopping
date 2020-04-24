<template>
    <div id="addrEditMain">
        <van-address-edit
                :area-list="$store.state.area"
                :show-delete="addressId != 0"
                show-set-default
                :address-info="addressInfo"
                @save="saveClick"
                @delete="delAddr"

        />
    </div>
</template>

<script>
    export default {
        name: "AddrEditMain",
        data() {
            return {
                addressId:null
            }
        },
        created() {
            this.addressId = this.$route.query.id
        },
        methods:{
            //删除地址
            delAddr(){
                this.request({
                    url:this.url.addrDel,
                    params:{
                        id:this.addressId
                    }
                }).then(res=>{
                    console.log(res)
                    if (res.errcode == 0){
                        this.$store.commit('delAddr',this.addressId)
                        this.$router.back()
                    }
                })
            },
            //编辑地址
            saveClick(content){
                let addr = {
                    name:content.name,
                    province:content.province,
                    city:content.city,
                    country:content.county,
                    detail:content.addressDetail,
                    mobile:content.tel,
                    code:content.areaCode,
                    default:content.isDefault ? 1 : 0
                }
                if (this.addressId != 0){
                    this.request({
                        url:this.url.addrUpdata+'?id='+this.addressId,
                        method:'post',
                        data:addr
                    }).then(res=>{
                        if (res.errcode == 0){
                            addr.id = this.addressId
                            this.$store.commit('updataAddr',addr)
                            this.$router.back()
                        }

                    })
                }else {
                    //保存地址
                    this.request({
                        url:this.url.newAddr,
                        method:'post',
                        data:addr
                    }).then(res=>{
                        if (res.errcode == 0){
                            this.$store.commit('createAddr',res.data)
                            this.$router.back()
                        }
                    })
                }
            }
        },
        computed: {
            //用户初始值
            addressInfo() {
                if (!this.$store.state.user.addressList) {
                    return
                }
                let addrObj = {}
                this.$store.state.user.addressList.forEach(item => {
                    if (item.id == this.addressId) {
                        addrObj.id = item.id,
                        addrObj.name = item.name,
                        addrObj.tel = item.mobile,
                        addrObj.province = item.province,
                        addrObj.city = item.city,
                        addrObj.county = item.country,
                        addrObj.addressDetail = item.detail,
                        addrObj.areaCode = item.code,
                        addrObj.isDefault = item.default ? true : false
                    }
                })
                return addrObj
            },

        }
    }
</script>

<style scoped>
    #addrEditMain {
        margin-top: 46px;

    }
</style>