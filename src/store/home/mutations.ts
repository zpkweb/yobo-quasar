import { MutationTree } from 'vuex'
import { HomeStateInterface } from './state'

const mutation: MutationTree<HomeStateInterface> = {
  setHome (state, payload) {

    state.banner = payload['banner']
    state.commentCommodity = payload['commentCommodity']
    state.gallerySeller = payload['gallerySeller']
    state.hotSaleSeller = payload['hotSaleSeller']
    state.latestCommodity = payload['latestCommodity']
    state.lookWorld = payload['lookWorld']
    state.information = payload['information']
  }
}

export default mutation
