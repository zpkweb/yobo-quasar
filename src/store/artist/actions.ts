import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtistStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<ArtistStateInterface, StateInterface> = {
  async sellerSearch ({ commit }, payload) {
    console.log("sellerSearch", payload)
    return await axiosInstance.get('/api/seller/search', {
      params: payload
    }).then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })

  },
  async artist ({ commit }, payload) {
    return await axiosInstance.get('/api/seller', {
      params: payload
    }).then(response => {
      commit('setPortrait', response.data.data)
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

}

export default actions
