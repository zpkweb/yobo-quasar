import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtistStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<ArtistStateInterface, StateInterface> = {
  async sellerSearch ({ commit }, payload) {
    return await axiosInstance.get('/api/seller/search', {
      params: payload
    }).then(response => {
      const { total, currentPage, pageSize, list } = response.data.data;
      commit('setSearchData', list)
      commit('setPagination', { total, currentPage, pageSize })
    }).catch((err) => {
    })

  },
  async seller ({ commit }, payload) {
    return await axiosInstance.get('/api/seller', {
      params: payload
    }).then(response => {
      commit('setPortrait', response.data.data)
    }).catch((err) => {
    })

  }
}

export default actions
