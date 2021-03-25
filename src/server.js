var Websocket = require('ws')
var WebSocketServer = Websocket.Server

var sendData = {}

var wss = new WebSocketServer({
  // host: '127.0.0.1',
  port: 9999
})

wss.on('connection', function (ws, req) {
  var url = req.url
  console.log('[SERVER] connection', url)
  ws.on('message', function (params) {
    console.log('[SERVER] recevied:', params)
    var data = handleGetMsg(params)
    var type = data.type
    if(type == 'error') {
      sendData = {
        type: 'error',
        msg: '显示弹窗'
      }
    } else {
      sendData = {
        type: 'pong'
      }
    }
    ws.send(handleSendMsg(), function (err) {
      if(err) {
        console.log('[SERVER] error', err)
      }
    })
  })
})

function handleSendMsg() {
  return JSON.stringify(sendData)
}
function handleGetMsg(data) {
  return JSON.parse(data)
}

