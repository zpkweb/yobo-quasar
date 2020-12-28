import { MutationTree } from 'vuex'
import { IndexStateInterface } from './state'

const mutation: MutationTree<IndexStateInterface> = {
  setHome (state, payload) {

    state.banner = payload['banner']
    state.commentCommodity = payload['commentCommodity']
    state.gallerySeller = payload['gallerySeller']
    state.hotSaleSeller = payload['hotSaleSeller']
    state.latestCommodity = payload['latestCommodity']
    state.lookWorld = payload['lookWorld']

  }
}

export default mutation
