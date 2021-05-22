var http = require('http')
var createHandler = require('node-github-webhook')
var handler = createHandler([ // 多个仓库
  {
    path: '/yobo-quasar',
    secret: '123456'
  },
  {
    path: '/yobo-admin',
    secret: '123456'
  },
  {
    path: '/yobo-server',
    secret: '123456'
  }
])

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7002)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log(
    'Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref
  )
  switch (event.path) {
    case '/yobo-quasar':
      runCmd('sh', ['./yobo-quasar.sh', event.payload.repository.name], function (text) { console.log(text) })
      break
    case '/yobo-admin':
      runCmd('sh', ['./yobo-admin.sh', event.payload.repository.name], function (text) { console.log(text) })
      break
    case '/yobo-server':
      runCmd('sh', ['./yobo-server.sh', event.payload.repository.name], function (text) { console.log(text) })
      break
    default:
      // 处理其他
      break
  }
})

function runCmd (cmd, args, callback) {
  var spawn = require('child_process').spawn
  var child = spawn(cmd, args)
  var resp = ''
  child.stdout.on('data', function (buffer) {
    resp += buffer.toString()
  })
  child.stdout.on('end', function () {
    callback(resp)
  })
}