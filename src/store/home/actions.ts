import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { HomeStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<HomeStateInterface, StateInterface> = {
  async setHome ({ commit }, payload) {
    return await axios.get('/api/home', {
      params: {
        locale: payload.locale
      }
    }).then(response => {
      commit('setHome', response.data.data)
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
    })

  }
}

export default actions
