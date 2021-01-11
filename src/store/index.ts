import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import home from './home';
import user from './user';
import { IndexStateInterface } from './home/state';


export interface StateInterface {
  lang: any;
  home?: IndexStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    state: {
      lang: 'zh-cn'
    },
    mutations: {
      setLang (state, lang) {
        state.lang = lang
      }
    },
    modules: {
      home,
      user
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
})
