import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
  setUserInfo (state, payload) {
    state.info = payload
  },
  setUserInfoItem(state, payload) {
    for(let item in payload){
      // console.log("setUserInfoItem", item, payload[item])
      state.info[item] = payload[item];
    }

  }
}

export default mutation
