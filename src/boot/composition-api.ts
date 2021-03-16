import VueCompositionApi from '@vue/composition-api'
import { boot } from 'quasar/wrappers'

export default boot(({ Vue, ssrContext }) => {
  Vue.use(VueCompositionApi)
})
