import Vue from 'vue'
import qs from 'qs'
import { boot } from 'quasar/wrappers'

Vue.use(qs);

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$qs = qs
})
