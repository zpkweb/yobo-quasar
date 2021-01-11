import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtworkStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<ArtworkStateInterface, StateInterface> = {
  async commoditySearch ({ commit }, payload) {
    console.log("home actions commoditySearch", payload)

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

  }
}

export default actions
