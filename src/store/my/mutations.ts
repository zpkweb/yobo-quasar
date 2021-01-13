import { MutationTree } from 'vuex'
import { MyStateInterface } from './state'

const mutation: MutationTree<MyStateInterface> = {
  setMyWishlist (state, payload) {
    state.wishlist = payload
  },
  setMyArtist (state, payload) {
    state.myArtist = payload
  },
  setMyBrowsingHistory (state, payload) {
    state.browsingHistory = payload
  }
}

export default mutation
