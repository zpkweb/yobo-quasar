import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import home from './home';
import { HomeStateInterface } from './home/state';
import user from './user';
import { UserStateInterface } from './user/state';
import artist from './artist';
import { ArtistStateInterface } from './artist/state';


export interface StateInterface {
  lang: any;
  home?: HomeStateInterface;
  user?: UserStateInterface;
  artist?: ArtistStateInterface;
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
      user,
      artist
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
})
