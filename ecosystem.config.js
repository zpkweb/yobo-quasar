module.exports = {
  apps: [
    {
      name: 'yobo-quasar',
      // exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      script: './dist/ssr/index.js',
      watch: ['dist'],
      ignore_watch : ["node_modules"],
      args: 'start',
      port: '8088',
      env: {
        ORIGIN: "http://www.yoboart.com"
        // ORIGIN: "http://39.105.190.188:7001"
        // ORIGIN: "http://82.156.250.70:7001"
      }
    }
  ]
}
