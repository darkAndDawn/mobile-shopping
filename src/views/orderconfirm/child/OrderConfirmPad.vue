<template>
    <div>
        <van-popup v-model="show" position="bottom" :style="{height:'70%'}">
            <van-nav-bar
                    title="付款"
                    @click-left="closepPay"
            >
                <van-icon name="cross" slot="left"/>
            </van-nav-bar>
            <!-- 密码输入框 -->
            <van-password-input
                    :value="pwd"
                    info="密码为 6 位数字"

            />
            <!-- 数字键盘 -->
            <van-number-keyboard
                    :show="true"
                    v-model="pwd"
                    @input="pwdClick"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "OrderConfirmPad",
        data() {
            return {
                show: false,
                pwd: '',
                orderId: null
            }
        },
        created() {
            this.bus.$on('pwdShow', isShow => {
                this.show = isShow.show
                this.orderId = isShow.orderId
            })
        },
        destroyed() {
            this.bus.$off('pwdShow')
        },
        methods: {
            //取消支付 页面跳转
            closepPay() {
                this.$router.push('/orderInfo');
                this.pwd = ''
            },
            //键盘事件
            pwdClick() {
                this.$nextTick(() => {
                    if (this.pwd.length >= 6) {
                        this.request({
                            url: this.url.pay + "?order_id=" + this.orderId,
                            method: "post",
                            data: {
                                pay_password: this.pwd
                            }
                        }).then(res => {
                            if (res.errcode == 901201) {
                                this.$toast("密码有误")
                                this.pwd = ''
                            } else if (res.errcode == 0) {
                                this.$router.push('/paySuccess')
                            }
                        })
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>