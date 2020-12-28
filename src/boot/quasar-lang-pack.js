// for when you don't specify quasar.conf.js > framework: 'all'
// import { Quasar } from 'quasar'
// OTHERWISE:
import Quasar from 'quasar'
import { Cookies } from 'quasar'

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies;
  const langIso = cookies.lang // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-us)\.js$/ */
      'quasar/lang/' + langIso
      )
      .then(lang => {
        // ! NOTICE ssrContext param:
        Quasar.lang.set(lang.default, ssrContext)
      })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
