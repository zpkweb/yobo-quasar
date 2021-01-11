import { MutationTree } from 'vuex'
import { IndexStateInterface } from './state'

const mutation: MutationTree<IndexStateInterface> = {
  setUser (state, payload) {
    console.log("setuser", state, payload)
    state.info = payload

  },
  changeUserInfo(state, payload) {
    for(let item of payload) {
      state.info[item] = payload[item];
    }
  }
}

export default mutation
