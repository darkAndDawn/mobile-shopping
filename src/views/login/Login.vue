<template>
    <div>
        <van-cell-group>
            <van-nav-bar
                    title="登录/注册"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
            <!-- 输入账号 -->
            <van-field
                    v-model.trim="userName"
                    label="账号："
                    placeholder="请输入用户名"
                    :error-message="userError"

            />
            <!-- 输入密码 -->
            <van-field
                    v-model="password"
                    type="password"
                    label="密码："
                    placeholder="请输入密码"
                    :error-message="pwdError"

            />
            <van-button type="primary" block @click="loginClick">登录/注册</van-button>
        </van-cell-group>
    </div>
</template>

<script>

    export default {
        name: "Login",
        components: {},
        data() {
            return {
                userName: '',
                password: '',
                userError: '',
                pwdError: ''
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back()
            },
            loginClick() {
                if (!this.userName) {
                    this.userError = "账号不能为空"
                    return
                } else {
                    this.userError = ""
                }
                ;
                if (this.userName.length < 5) {
                    this.userError = "用户名不能低于5个字符"
                } else {
                    this.userError = ""
                }
                ;
                if (!this.password) {
                    this.pwdError = "密码不能为空"
                    return
                } else {
                    this.pwdError = ""
                }
                ;
                if (this.password.length < 5) {
                    this.pwdError = "密码不能低于5个字符"
                    return
                } else {
                    this.pwdError = ""
                }
                ;
                this.request({
                    url: this.url.login,
                    method: 'post',
                    data: {
                        name: this.userName,
                        password: this.password
                    }
                }).then(res => {
                    console.log(res.data)
                    this.$store.commit('ass', res.data)
                    sessionStorage.setItem('token', res.data.token)
                    this.$router.back()
                })
            }
        }
    }
</script>

<style scoped>

</style>