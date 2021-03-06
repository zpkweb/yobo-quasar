import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { HomeStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<HomeStateInterface, StateInterface> = {
  async setHome ({ commit }, payload) {
    await axiosInstance.get('/api/BFF/home', {
      params: {
        locale: payload.locale
      }
    }).then(response => {
      commit('setHome', response.data.data)
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })

  },

  async sendEmail({ commit }, payload) {
    return await axiosInstance.post('/api/email/send', {
      email: payload.email,
      href: payload.href,
      msg: payload.msg,
    })
    .then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

  async sendMessage({ commit }, payload) {
    return await axiosInstance.post('/api/message', {
      type: payload.type,
      title: payload.title,
      href: payload.href,
      content: payload.content,
      contentHtml: payload.contentHtml,
      owner: payload.owner
    })
    .then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

  async subscriber({ commit }, payload) {
    return await axiosInstance.post('/api/subscriber', {
      email: payload.email,
      userId: payload.userId,
    })
    .then(response => {
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
