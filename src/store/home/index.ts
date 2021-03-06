import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { HomeStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const indexModule: Module<HomeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default indexModule
