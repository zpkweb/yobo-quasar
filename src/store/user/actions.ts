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
      return {
        success: false,
        message: err.response.data.message
      }
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
      // console.log("applyAritst then", response)
      return response.data;
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
      // console.log("applyAritst catch", err)
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

  async getUserInfo({ commit }, payload) {
    return await axiosInstance.get('/api/user/info', { params: payload }).then(response => {
      // console.log("getUserInfo", response.data.data)
      commit('setUserInfo', response.data.data)
      // return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

  /**
   * 更新用户信息
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async updateUser({ commit }, payload) {
    return await axiosInstance.post('/api/user/update', payload)
    .then( response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  /**
   * 更新用户信息
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async updateUserAddress({ commit }, payload) {
    return await axiosInstance.post('/api/user/address/update', payload)
    .then( response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

  async codeSend({ commit }, payload) {
    // /password/retrieve/code/send
    return await axiosInstance.post('/api/user/password/retrieve/code/send', payload)
    .then( response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async codeVerify({ commit }, payload) {
    // console.log("codeVerify", payload)
    return await axiosInstance.post('/api/user/password/retrieve/code/verify', payload)
    .then( response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  }


}

export default actions
