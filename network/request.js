import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant';


export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL:'/api/v4'
            //timeout: 5000
        })
        instance.interceptors.request.use(config => {
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration:0,
            });
            return config
            //console.log('发请求了')

        })
        instance.interceptors.response.use(data => {
            Toast.clear()
            return data.data
            //console.log('请求到数据了')

        })
        instance(config).then(res => {
            resolve(res)
        }).catch(rej => {
            reject(rej)
        })
    })
}