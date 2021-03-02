# 官网
## 安装
```bash
npm run install / yarn
```

### 开发

本地环境
```bash
npm run dev / yarn dev
```
服务器环境
```bash
npm run server / yarn server
```

### 编译

```bash
npm run build / yarn build
```
### 部署
```bash
前端部署：（监听端口: 8080）
创建yobo-quasar目录，把文件解压到yobo-quasar。
进入yobo-quasar/dist/ssr,执行：npm install。
执行命令：pm2 start
```
### 页面
```
yobo

  首页
    登录弹窗
    注册弹窗
    成为艺术家弹窗
  个人中心
    我的账户
    我的最爱
    我最爱的艺术家
  艺术家
    艺术家搜索
    艺术家主页
  艺术品
    艺术品搜索
    艺术品购买
```
### 目录

```
.
├── README.md
├── babel.config.js
├── dist // 编译文件
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

