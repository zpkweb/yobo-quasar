import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<UserStateInterface, StateInterface> = {
  /**
   * 登录
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async login({ commit }, payload) {
    return await axiosInstance.post('/api/user/login', payload).then(response => {
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
    })
  },
  /**
   * 注册
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async register({ commit }, payload) {
    return await axiosInstance.post('/api/user/register', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      identity: "ordinary",
      phone: ""
    }).then(response => {
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
    })
  },
  /**
   * 申请艺术家
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async applyArtist({ commit }, payload) {
    return await axiosInstance.post('/api/user/seller/apply', payload).then(response => {
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
    })
  },

}

export default actions
