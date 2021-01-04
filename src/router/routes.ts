import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/zh-cn'
  },
  {
    path: '/:lang',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'Index', component: () => import('pages/index.vue') },
      { path: 'artworks', name: 'Artworks', component: () => import('pages/artworks.vue') },
      { path: 'artist', name: 'Artist', component: () => import('pages/artist.vue') },
      { path: 'artists', name: 'Artists', component: () => import('pages/artists.vue') },
      { path: 'mine', name: 'Mine', component: () => import('pages/mine.vue') },
      { path: 'wishlist', name: 'Wishlist', component: () => import('pages/wishlist.vue') },
      { path: 'like', name: 'Like', component: () => import('pages/like.vue') },
      { path: 'order', name: 'Order', component: () => import('pages/order.vue') },
      { path: 'pay', name: 'Pay', component: () => import('pages/pay.vue') },
      { path: 'evaluate', name: 'Evaluate', component: () => import('pages/evaluate.vue') },
      { path: 'newaddress', name: 'NewAddress', component: () => import('pages/newaddress.vue') },
      { path: 'commodity', name: 'commodity', component: () => import('pages/commodity.vue') },
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
