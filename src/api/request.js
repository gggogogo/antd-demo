import Vue from 'vue'
import axios from 'axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import notification from 'ant-design-vue/es/notification'

const service = new axios.create({
  timeout: 6000,
  baseURL: process.env.VUE_APP_API_BASE_URL // api base_url
})

const err = (error) => {
  if (err.response) {
    const data = err.response.data
    // const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
  }
}

service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  // 拦截请求，在头部添加token
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, err)

service.interceptors.response.use(response => {
  return response.data
}, err)

export { service as axios }