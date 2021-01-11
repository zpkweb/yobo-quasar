import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
  setUserInfo (state, payload) {
    console.log("setuser", state, payload)
    state.info = payload

  },
  changeUserInfo(state, payload) {
    for(let item of payload) {
      state.info[item] = payload[item];
    }
  },
  setMyWishlist (state, payload) {
    console.log("setMyWishlist", state, payload)
    state.wishlist = payload
  },
  setMyLike (state, payload) {
    console.log("setMyLike", state, payload)
    state.like = payload
  },
  setMyBrowsingHistory (state, payload) {
    console.log("setMyBrowsingHistory", state, payload)
    state.browsingHistory = payload
  },
}

export default mutation
