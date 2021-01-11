import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { HomeStateInterface } from './state'
import axios from 'axios'


const actions: ActionTree<HomeStateInterface, StateInterface> = {
  async setHome ({ commit }, payload) {
    console.log("home actions sethome", payload)
    // const data:any = await axios.get('/api/home', {
    //   params: {
    //     locale: payload.locale
    //   }
    // })
    // console.log(data)
    // if(data.success) {
      // commit('setHome', {})
    // }
    // console.log("someAction", this.$axios)



    return await axios.get('/api/home', {
      params: {
        locale: payload.locale
      }
    }).then(response => {
      console.log("response", response.data)
      commit('setHome', response.data.data)
      // setAxiosHeaders(response.data.token)
    }).catch((err) => {
      console.log("catch", err)
    })

  }
}

export default actions
