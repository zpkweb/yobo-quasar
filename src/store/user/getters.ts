import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'

const getters: GetterTree<UserStateInterface, StateInterface> = {
  isLoginIn (state) {
    // your code
    return state.info
  }
}

export default getters
