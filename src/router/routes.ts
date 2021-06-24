import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/zh-cn'
  },
  {
    path: '/:locale',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'Index', component: () => import('pages/index.vue') },
      // { path: 'artworks', name: 'Artworks', component: () => import('pages/artworks.vue') },
      { path: 'artist/:artistId', name: 'Artist', component: () => import('pages/artist.vue') },
      { path: 'artists', name: 'Artists', component: () => import('pages/artists.vue') },
      // { path: 'mine', name: 'Mine', component: () => import('pages/mine.vue') },
      { path: 'mine', meta: { requireAuth: true}, component: () => import('pages/mine/index.vue'), children: [{
        path: '',
        redirect: 'info'
      },{
        path: 'info',
        component: () => import('pages/mine/info.vue')
      },{
        path: 'like',
        component: () => import('pages/mine/like.vue')
      },{
        path: 'order',
        component: () => import('pages/mine/order.vue')
      },{
        path: 'wishlist',
        component: () => import('pages/mine/wishlist.vue')
      }] },
      // { path: 'wishlist', name: 'Wishlist', component: () => import('pages/wishlist.vue') },
      // { path: 'like', name: 'Like', component: () => import('pages/like.vue') },
      // { path: 'order', name: 'Order', component: () => import('pages/order.vue') },
      // { path: 'pay', name: 'Pay', component: () => import('pages/pay.vue') },
      { path: 'evaluate', name: 'Evaluate', component: () => import('pages/evaluate.vue') },
      { path: 'newaddress', name: 'NewAddress', component: () => import('pages/newaddress.vue') },
      { path: 'artwork', component: () => import('pages/artwork/index.vue'), children: [{
        path: '',
        component: () => import('pages/artwork/list.vue')
      }, {
        path: ':artworkId',
        component: () => import('pages/artwork/commodity.vue')
      }] },
      { path: 'share', name: 'share', component: () => import('pages/share.vue') },
      { path: 'about', name: 'about', component: () => import('pages/about.vue') },
      { path: 'criteria', name: 'criteria', component: () => import('pages/criteria.vue') },
      { path: 'test', name: 'test', component: () => import('pages/test.vue') },
      { path: 'artInformation', name: 'artInformation', component: () => import('pages/artInformation/index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
