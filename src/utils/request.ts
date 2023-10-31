import { useUserStore } from '@/stores'
import axios from 'axios'
import { showToast } from 'vant'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 2. 携带token
    const store = useUserStore()
    // config.headers 在这里属于类型守卫
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 3. 处理业务失败
    if (res.data.code !== 10000) {
      // 错误提示
      showToast(res.data.message || '业务失败')
      // 返回错误的promise
      return Promise.reject(res.data)
      // 传入 code 将来 catch 的时候可以使用
    }
    // 4. 摘取核心响应数据
    return res.data
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
