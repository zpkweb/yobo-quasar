import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import home from './home';
import { HomeStateInterface } from './home/state';
import user from './user';
import { UserStateInterface } from './user/state';
import artist from './artist';
import { ArtistStateInterface } from './artist/state';
import artwork from './artwork';
import { ArtworkStateInterface } from './artwork/state';
import my from './my';
import { MyStateInterface } from './my/state';

import { axiosInstance } from 'src/boot/axios'

export interface StateInterface {
  lang: any;
  isShowPay: Boolean;
  langOptions: any;
  home?: HomeStateInterface;
  user?: UserStateInterface;
  artist?: ArtistStateInterface;
  artwork?: ArtworkStateInterface;
  my?: MyStateInterface;
  choiceSeller?: any;
  sellerTypes?: any;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    state: {
      lang: null,
      isShowPay: false,
      langOptions: [
        { value: "zh", label: "中文", locale: 'zh-cn' },
        { value: "en", label: "English", locale: 'en-us' },
        {
        value: 'ja',
        label: 'にほんご',
        locale: 'ja-jp'
      },
      // {
      //   value: 'fr',
      //   label: 'Français',
      // }
      {
        value: 'es',
        label: 'Español',
        locale: 'es-es'
      }
      ],
      choiceSeller: null,
      sellerTypes: ["画家", "雕塑家"]
    },
    mutations: {
      setLang (state, locale) {
        // let langNew = { value: "zh", label: "中文", locale: 'zh-cn' };
        let langNew:any;
        for(let item in state.langOptions) {
          if(state.langOptions[item].locale == locale) {
            langNew = state.langOptions[item];
          }
        }
        state.lang = langNew
      },
      setChoiceSeller(state, payload) {
        state.choiceSeller = payload;
      }
    },
    actions: {
      async choiceSeller({ commit }, payload) {
        return await axiosInstance.get('/api/seller/choice', {
          params: {
            news: payload.news
          }
        }).then(response => {
          return response.data
        }).catch((err) => {
          return {
            success: false,
            message: err.response.data.message
          }
        })
      },
    },
    modules: {
      home,
      user,
      artist,
      artwork,
      my
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
})
