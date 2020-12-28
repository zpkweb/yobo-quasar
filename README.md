# Quasar App (yobo-quasar)

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### 目录
```
.
├── README.md
├── babel.config.js
├── dist // 编译文件
│   └── ssr
│       ├── index.js
│       ├── package.json
│       ├── quasar.client-manifest.json
│       ├── quasar.server-manifest.json
│       ├── template.html
│       └── www
├── package.json
├── public // 静态资源
│   ├── favicon.ico
│   ├── icons
│   │   ├── favicon-128x128.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon-96x96.png
│   └── img
│       ├── artist
│       ├── artist.png
│       ├── artists
│       ├── artworks
│       ├── index
│       ├── mine
│       ├── pay
│       └── test
├── quasar.conf.js // quasar配置文件
├── src
│   ├── App.vue
│   ├── api // api
│   │   ├── commodity.js
│   │   ├── user.js
│   │   └── utils.js
│   ├── assets // 常规资源
│   │   ├── loclist.json
│   │   ├── logo.png
│   │   └── quasar-logo-full.svg
│   ├── boot // 启动项
│   │   ├── axios.ts
│   │   ├── composition-api.ts
│   │   ├── i18n.ts
│   │   └── quasar-lang-pack.js
│   ├── components // 组件
│   │   ├── CompositionComponent.vue
│   │   ├── EssentialLink.vue
│   │   └── models.ts
│   ├── css // css，sass
│   │   ├── app.sass
│   │   └── quasar.variables.sass
│   ├── env.d.ts
│   ├── i18n // 多语言
│   │   ├── en-us
│   │   ├── fr-fr
│   │   ├── index.ts
│   │   ├── ja-jp
│   │   └── zh-cn
│   ├── index.template.html
│   ├── layouts // 布局
│   │   ├── MainLayout.vue
│   │   └── index.vue
│   ├── pages // 页面
│   │   ├── Error404.vue
│   │   ├── artist.vue
│   │   ├── artists.vue
│   │   ├── artworks.vue
│   │   ├── evaluate.vue
│   │   ├── home.vue
│   │   ├── index.vue
│   │   ├── like.vue
│   │   ├── mine.vue
│   │   ├── newaddress.vue
│   │   ├── order.vue
│   │   ├── pay.vue
│   │   └── wishlist.vue
│   ├── router // 路由
│   │   ├── index.ts
│   │   └── routes.ts
│   ├── shims-vue.d.ts
│   └── store // vuex
│       ├── home
│       ├── index.ts
│       └── store-flag.d.ts
├── src-ssr // ssr模式
│   ├── extension.js
│   ├── index.js
│   └── ssr-flag.d.ts
├── tsconfig.json
└── yarn.lock
```
