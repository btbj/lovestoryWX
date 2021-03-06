import axios from 'axios'
import { Toast } from 'mint-ui'
import router from '@/router'

const Host = 'http://www.lovestory33.com/server/index.php/'
// const Host = 'http://php.gooduo.net/lovestory233/index.php/'

const Http = axios.create({
  baseUrl: Host
})

const get = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.get(Host + url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}
const post = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.post(Host + url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export default {
  // serverURL: 'http://192.168.0.33/my/air_net/index.php/',
  serverURL: 'http://php.gooduo.net/qisheng/index.php/',
  post,
  get,

  // API基础错误处理方式
  handleError (res) {
    if (res.success) {
      console.error('回包没有失败: ', res)
      return false
    }
    const errcode = res.error_code
    if (!errcode) {
      console.error('错误信息没有错误码: ', res)
      return false
    } else if (errcode === 110 || errcode === 101) {
      Toast('请重新登录')
      router.replace('/login')
      return false
    }
    return res
  }
}
