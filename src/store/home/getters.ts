import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { HomeStateInterface } from './state'

const getters: GetterTree<HomeStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
