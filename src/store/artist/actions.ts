import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtistStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<ArtistStateInterface, StateInterface> = {
  async sellerSearch ({ commit }, payload) {
    console.log("home actions sellerSearch", payload)

    return await axios.get('/api/seller/search', {
      params: payload
    }).then(response => {
      console.log("response", response.data)
      const { total, currentPage, pageSize, list } = response.data.data;
      commit('setSearchData', list)
      commit('setPagination', { total, currentPage, pageSize })
    }).catch((err) => {
      console.log("catch", err)
    })

  }
}

export default actions
