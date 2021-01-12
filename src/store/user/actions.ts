import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<UserStateInterface, StateInterface> = {
  /**
   * 登录
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async login ({ commit }, payload) {
    return await axios.post('/api/user/login', payload).then(response => {
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
  async register ({ commit }, payload) {
    return await axios.post('/api/user/register', {
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
  async applyArtist ({ commit }, payload) {
    return await axios.post('/api/user/seller/apply', payload).then(response => {
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
    })
  },
  /**
   * 我最喜爱的艺术家
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyLike( { commit },  payload) {
    return await axios.get('/api/my/seller', {params: payload}).then(response => {
      return response.data;
    }).catch((err) => {
    })
  },
  /**
   * 我的最爱
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyWishlist( { commit },  payload) {
    return await axios.get('/api/my/commodity', { params: payload }).then(response => {
      return response.data;
    }).catch((err) => {
    })
  },

  /**
   * 我的浏览历史
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyBrowsingHistory( { commit },  payload) {
    return await axios.get('/api/my/browsingHistory', { params: payload }).then(response => {
      return response.data;
    }).catch((err) => {
    })
  },
}

export default actions
