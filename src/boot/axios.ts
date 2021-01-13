import axios, { AxiosInstance } from 'axios'
import { boot } from 'quasar/wrappers'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ app, Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  axios.defaults.baseURL = process.env.api ? 'http://39.105.190.188:7001/' : 'http://localhost:7001'
  // axios.defaults.baseURL = "http://39.105.190.188:7001/"
  Vue.prototype.$axios = axios
})
