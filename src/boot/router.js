// import something here
import { Cookies } from 'quasar';

function cookies(ssrContext) {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies // 否则我们在客户端

  // “cookies”等同于非SSR版本中的全局导入
  return cookies
}
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files


export default ({ router, ssrContext, store }) => {
  // ...
  // if (!isAuthorized && !urlPath.startsWith('/login')) {
  // if (!isAuthorized) {
  //   redirect({ path: '/' })
  //   return
  // }
  // ...


  router.beforeEach((to, from, next) => {
    // if (to.matched.some(record => record.meta.requireAuth) && !store.getters['user/isLoginIn']) {
      console.log("to.matched.some(record => record.meta.requireAuth)",to.matched, to.matched.some(record => record.meta.requireAuth))
      console.log("Cookies.get('user.info')']", cookies(ssrContext).get('user.info'))
      if (to.matched.some(record => record.meta.requireAuth) && !cookies(ssrContext).get('user.info')) {
        console.log(111)
        store.commit('user/setUserInfo', null)
      next({ path: '/' })
    } else {
      console.log(222)
      next()
    }
  })

}
