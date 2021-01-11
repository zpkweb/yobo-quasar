import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtistStateInterface } from './state'

const getters: GetterTree<ArtistStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
