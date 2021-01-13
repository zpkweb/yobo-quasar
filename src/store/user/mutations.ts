import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
  setUserInfo (state, payload) {
    state.info = payload

  },
  changeUserInfo(state, payload) {
    for(let item of payload) {
      state.info[item] = payload[item];
    }
  },

}

export default mutation
