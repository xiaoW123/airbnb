import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 设置响应拦截,在响应成功够返回一个res.data,对数据进行加工
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }
  // 定义request请求方法,请求配置
  request(config) {
    return this.instance.request(config)
  }
  // 定义Get方法,在get方法里调request
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  // 定义POST
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT) // 导出生成的类实例