var Websocket = require('ws')
var WebSocketServer = Websocket.Server

var wss = new WebSocketServer({
    // host: '127.0.0.1',
    port: 9999
})

wss.on('connection', function(ws, req) {
    var url = req.url
    console.log('[SERVER] connection', url)
    ws.on('message', function(params) {
        console.log('[SERVER] recevied:', params)
        // ws.send(params, function(err) {
        //     if(err) {
        //         console.log('[SERVER] error', err)
        //     }
        // })
        // setInterval(function(ws) {
        //     console.log('持续执行')
        //     wss.send(JSON.stringify({type: 'pone', code: 1}))
        // }, 3000);
    })
})

