import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtworkStateInterface } from './state'

const getters: GetterTree<ArtworkStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
