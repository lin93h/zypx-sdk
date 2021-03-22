$(document).ready(function () {
    var zypx = window.zypx;
    zypx.init({
        appId: "这是appid",
        appSecret: "应用密钥",
        idCard: "身份证号（学员）",
        courseId: "课程id",
        control: true,
        callback: function (res) {
            console.log("初始化回调:", res)
        }
    })
    $("#start").on('click', function () {
        zypx.start(function(res) {
            console.log('token反馈：', res.msg)
            if(res.code == 500) {
                zypx.watch(function(res) {
                    console.log('监听：', res)
                    if(res.code == 1) {
                        $('.el-message-box__wrapper').css({ 'visibility': 'inherit' })
                    }
                    $('#msg-con').append("<div>" + res.msg + "</div>")
                })
            }
            $('.el-message-box__wrapper').css({ 'visibility': 'inherit' })
        })
        
        $("#stop").show();
        $("#gif").show();
        $("#start").hide();
        // $('#dialog').css({ 'visibility': 'hidden' })
    })
    $("#stop").on('click', function () {
        zypx.stop()
        $("#stop").hide();
        $("#gif").hide();
        $('#msg-con').html("");
        $("#start").show();
    })

    $("#submit-btn").bind('click', function() {
        zypx.submitCode(function(res) {
            console.log(res.msg)
            if(res.code == 0) {
                $('#dialog').css({ 'visibility': 'hidden' })
            }
            $('#dialog').css({ 'visibility': 'hidden' })
        })
    })
})