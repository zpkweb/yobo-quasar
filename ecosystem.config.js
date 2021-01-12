module.exports = {
  apps: [
    {
      name: 'yobo-quasar',
      // exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      script: './dist/ssr/index.js',
      args: 'start',
      port: '8088',
    }
  ]
}
