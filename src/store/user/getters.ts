import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { IndexStateInterface } from './state'

const getters: GetterTree<IndexStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
