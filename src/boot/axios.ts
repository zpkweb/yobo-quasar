// import axios, { AxiosInstance } from 'axios'
// import { boot } from 'quasar/wrappers'

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: AxiosInstance;
//   }
// }

// export default boot(({ Vue }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//   // axios.defaults.baseURL = "http://localhost:7001"
//   Vue.prototype.$axios = axios
// })


import Vue from 'vue'
import axios from 'axios'

// 我们创建我们自己的axios实例并设置一个自定义的基本URL。
// 请注意，如果我们不在这里设置任何配置，我们不需要
// 一个命名的导出，因为我们可以`import axios from 'axios'`
const axiosInstance = axios.create({
  baseURL: process.env.api
})

// 在Vue文件中通过this.$axios来使用
Vue.prototype.$axios = axiosInstance

// 这里我们定义一个命名的导出，
// 然后我们后面可以使用这个内部的.js文件:
export { axiosInstance }
