$(document).ready(function () {
    // 初始化数据
    var zypx = window.zypx;
    zypx.init({
        appId: "这是appid",
        appSecret: "应用密钥",
        idCard: "身份证号（学员）",
        courseId: "课程id",
        control: true, // 是否手动控制执行（true:手动控制 false:自动执行）
        callback: function (res) {
            console.log("监控回调:", res)
        }
    })

    var zypxWs = window.zypxWs;
    zypxWs.init({
        appId: "wss11111111111111",
        appSecret: "ws222222222222",
    })
    
    //== 手动控制内容 ==//
    // 开始播放
    $("#start").on('click', function () {
        zypxWs.close()
        // zypx.start(function(res) {
        //     console.log('token反馈：', res.msg)
        //     if(res.code == 500) {
        //         zypx.watch(function(res) {
        //             console.log('监听：', res)
        //             if(res.code == 1) {
                        
        //             }
        //             $('#msg-con').append("<div>" + res.msg + "</div>")
        //         })
        //     }
        // })
        
        $("#stop").show();
        $("#gif").show();
        $("#start").hide();
    })
    // 停止播放
    $("#stop").on('click', function () {
        zypxWs.init({
            appId: "wss3333333333",
            appSecret: "ws444444444",
        })
        zypx.stop()
        $("#stop").hide();
        $("#gif").hide();
        $('#msg-con').html("");
        $("#start").show();
    })
})