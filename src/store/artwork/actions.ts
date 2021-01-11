import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtworkStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<ArtworkStateInterface, StateInterface> = {
  /**
   * 艺术品搜索
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async getArtworkSearch ({ commit }, payload) {
    console.log("home actions getArtworkSearch", payload)

    return await axios.get('/api/commodity/search', {
      params: payload
    }).then(response => {
      console.log("response", response.data)
      const { total, currentPage, pageSize, list } = response.data.data;
      commit('setSearchData', list)
      commit('setPagination', { total, currentPage, pageSize })
    }).catch((err) => {
      console.log("catch", err)
    })
  },
  async getArtwork ({ commit }, payload) {
    console.log("home actions getArtwork", payload)
    return await axios.get('/api/buy', {
      params: {
        locale: payload.locale,
        commodityId: payload.artworkId
      }
    }).then(response => {
      console.log("response", response.data)
      const { data } = response.data;
      commit('setData', data)
    }).catch((err) => {
      console.log("catch", err)
    })

  },
}

export default actions
