import axios from 'axios'
import qs from 'qs'

const httpPost = function (api: string, data: object, callback: Function) {
  if (!data) data = {}
  let params = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.post(api, params).then((res) => {
      if (res) {
        resolve(res)
        callback && callback(res)
      } else {
        reject('axios 获取数据失败')
      }
    })
  })
}

const httpGet = function (api: string) {
  return new Promise((resolve, reject) => {
    axios.get(api).then((res) => {
      if (res) {
        resolve(res.data)
      } else {
        reject('axios 获取数据失败')
      }
    })
  })
}

export { httpPost, httpGet }
