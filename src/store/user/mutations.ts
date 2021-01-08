import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
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
