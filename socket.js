(function () {
    var domain = "ws://localhost:9999"
    var url = "";
    var ws = null;
    var resData = {}
    var appId = ""; // 应用ID
    var appSecret = ""; // 应用密钥
    var timer = null; // 定时器
    var heartRate = 0; // 心跳次数

    window.zypxWs = {
        init: function (params) {
            appId = params.appId
            appSecret = params.appSecret
            url = domain + '?appId='+appId+'&appSecret='+appSecret
            ws = new WebSocket(url)
            ws.onopen = function () {
                var params = { token: 12321323, appId: 'aaaaaaa' }
                ws.send(JSON.stringify(params))
                handleHearBeat()
            }
            ws.onmessage = function (event) {
                console.log('[MESSAGE] ', event.data)
                resData = event.data ? JSON.parse(event.data) : {}
                // if(resData.code == 1) {
                //     handleDialogTrigger(true)
                // }
            }
            ws.onerror = function (event) {
                console.log('error ', event)
                handleClose()
            }
            ws.onclose = function (event) {
                console.log('close ', event)
                handleClose()
            }
        },
        close: function() {
            ws.close()
            ws = null
        }
    }

    // 心跳检测
    function handleHearBeat() {
        timer = setInterval(function() {
            if(heartRate >= 2) {
                
            } else {
                ++heartRate
                ws.send(JSON.stringify({type: 'ping'}))
            }
        }, 3000)
    }

    // 关闭ws
    function handleClose() {
        clearInterval(timer)
        ws.close()
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