import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { IndexStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<IndexStateInterface, StateInterface> = {
  /**
   * 登录
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async login ({ commit }, payload) {
    console.log("user actions login", payload)

    return await axios.post('/api/user/login', {
      name: payload.name,
      password: payload.password
    }).then(response => {
      console.log("response", response.data)
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
      console.log("catch", err)
    })

  },
  /**
   * 注册
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async register ({ commit }, payload) {
    console.log("user actions register", payload)

    return await axios.post('/api/user/register', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      identity: "ordinary",
      phone: ""
    }).then(response => {
      console.log("response", response.data)
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
      console.log("catch", err)
    })

  }
}

export default actions
