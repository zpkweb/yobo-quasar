import { MutationTree } from 'vuex'
import { IndexStateInterface } from './state'

const mutation: MutationTree<IndexStateInterface> = {
  setUser (state, payload) {
    console.log("setuser", state, payload)
    state.info = payload

  }
}

export default mutation
