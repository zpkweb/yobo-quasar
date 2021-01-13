import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { MyStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const indexModule: Module<MyStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default indexModule
