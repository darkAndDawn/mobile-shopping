import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},//用户信息
        area: {},//城市列表
        selectAddr: {}//选择地址
    },
    mutations: {
        updataSelectAddr(state,addr){
            state.selectAddr = addr
        },
        //删除地址
        delAddr(state, id) {
            state.user.addressList.forEach((item, index) => {
                if (item.id == id) {
                    state.user.addressList.splice(index, 1)
                }
            })
        },
        //新增地址
        createAddr(state, newAddr) {
            state.user.addressList.push(newAddr)
        },
        //改变地址信息
        updataAddr(state, addr) {
            state.user.addressList.forEach(item => {
                if (item.id == addr.id) {
                    item.name = addr.name,
                        item.province = addr.province,
                        item.city = addr.city,
                        item.country = addr.country,
                        item.detail = addr.detail,
                        item.mobile = addr.mobile,
                        item.code = addr.code,
                        item.default = addr.default
                }
            })
            console.log(addr)
        },
        //赋值area
        updataArea(state, area) {
            state.area = area
        },
        //赋值user
        ass(state, user) {
            state.user = user
        },
        //改变user里面likeList数组
        likeList(state, likeObj) {
            state.user.likeList.push(likeObj)
        },
        cancelLike(state, id) {
            state.user.likeList.forEach((item, index) => {
                if (item.product_id == id) {
                    state.user.likeList.splice(index, 1)
                }
            })
        }
    },
    actions: {},
    modules: {}
})
