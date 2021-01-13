import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { MyStateInterface } from './state'

const getters: GetterTree<MyStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
