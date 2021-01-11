import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { ArtworkStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const indexModule: Module<ArtworkStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default indexModule
