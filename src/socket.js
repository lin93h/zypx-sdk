(function () {
  var domain = "ws://localhost:9999",
    url = "",
    ws = null,
    receiveData = {},
    appId = "", // 应用ID
    appSecret = "", // 应用密钥
    timer = null, // 定时器
    reconnectionTimer = null, // 重连定时器
    heartRate = 0, // 心跳次数
    reconnecting = false // 是否正在重连，避免重复触发

  window.zypxWs = {
    init: function (params) {
      appId = params.appId
      appSecret = params.appSecret
      url = domain + '?appId=' + appId + '&appSecret=' + appSecret
      handleConnection()
    },
    close: function () {
      handleClose()
    }
  }

  // 创建连接
  function handleConnection() {
    ws = new WebSocket(url)
    ws.onopen = function () {
      console.log('【客户端连接成功】')
      handleSendMsg({ type: 'error' })
      clearInterval(reconnectionTimer)
      reconnecting = false
      handleHearBeat()
    }
    ws.onmessage = function (event) {
      console.log('[MESSAGE] ', event.data)
      receiveData = handleGetMsg(event.data)
      if(receiveData.type == 'error') {
          handleDialogTrigger(true)
      }
    }
    ws.onerror = function (event) {
      console.log('【ERROR】')
      if(!reconnecting) {
        reconnecting = true
        handleClose()
        handleReconnection()
      }
    }
    ws.onclose = function (event) {
      console.log('【CLOSE】')
      if(!reconnecting) {
        reconnecting = true
        handleClose()
        handleReconnection()
      }
    }
  }

  // 重连
  function handleReconnection() {
    reconnectionTimer = setInterval(function() {
      handleConnection()
    }, 3000)
  }

  // 心跳检测
  function handleHearBeat() {
    timer = setInterval(function () {
      ws.send(JSON.stringify({ type: 'ping' }))
    }, 3000)
  }

  // 关闭ws
  function handleClose() {
    clearInterval(timer)
    ws.close()
    ws = null
  }

  // 发送消息
  function handleSendMsg(data) {
    ws.send(JSON.stringify(data))
  }

  // 接收消息
  function handleGetMsg(data) {
    return data ? JSON.parse(data) : {}
  }

  // 显示/关闭验证码弹窗
  function handleDialogTrigger(flag) {
    var msgDom = document.getElementsByClassName('zypx-message-box__wrapper')
    if(flag) {
      msgDom[0].style.cssText = 'visibility:inherit'
    } else {
      msgDom[0].style.cssText = 'visibility:hidden'
    }
  }
})()