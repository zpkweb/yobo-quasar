import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtworkStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<ArtworkStateInterface, StateInterface> = {
  /**
   * 艺术品搜索
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async getArtworkSearch ({ commit }, payload) {
    console.log("getArtworkSearch", payload, process.env.api, process.env.API)
    return await axiosInstance.get('/api/commodity/search', {
      params: payload
    }).then(response => {
      const { total, currentPage, pageSize, list } = response.data.data;
      commit('setSearchData', list)
      commit('setPagination', { total, currentPage, pageSize })
    }).catch((err) => {
    })
  },
  async getArtwork ({ commit }, payload) {
    return await axiosInstance.get('/api/buy', {
      params: {
        locale: payload.locale,
        commodityId: payload.artworkId
      }
    }).then(response => {
      const { data } = response.data;
      commit('setData', data)
    }).catch((err) => {
    })

  },

}

export default actions
