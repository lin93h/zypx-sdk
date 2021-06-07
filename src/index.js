$(document).ready(function () {
  // 初始化数据
  var zypx = window.zypx;
  zypx.init({
    appId: "fjhb",
    appSecret: "fjhb2021",
    idCard: "350123199310072351",
    courseId: "fjhb001",
    selector: '#coustom-dialog', // 自定义弹窗类名
    control: true, // 是否手动控制执行（true:手动控制 false:自动执行）
    callback: function (res) {
      console.log("【监控回调globalCallback】:", res)
      $('#msg-con').append("<div>" + res.msg + new Date() + "</div>")
      if(res.code == 410) {
        zypx.stop()
        $("#stop").hide();
        $("#gif").hide();
        $('#msg-con').html("");
        $("#start").show();
      }
      if(!res.control) {
        $("#stop").show();
        $("#gif").show();
        $("#start").hide();
      }
    }
  })

  /**
   * 执行websocket
   */
  // var zypxWs = window.zypxWs;
  // zypxWs.init({
  //     appId: "wss11111111111111",
  //     appSecret: "ws222222222222",
  // })

  //== 手动控制内容 ==//
  // 开始播放
  $("#start").on('click', function () {
    
    zypx.start(function (res) {
      console.log('token反馈：', res.msg)
      if(res.code == 0) {
        zypx.watch(function (res) {
          // console.log('【监听】：', res)
          // if(res.code == 1) {

          // }
          // $('#msg-con').append("<div>" + res.msg + new Date() + "</div>")
        })
      }
    })

    /**
     * websocket
     */
    // var zypxWs = window.zypxWs;
    // zypxWs.init({
    //     appId: "wss11111111111111",
    //     appSecret: "ws222222222222",
    // })

    $("#stop").show();
    $("#gif").show();
    $("#start").hide();
  })

  // 停止播放
  $("#stop").on('click', function () {
    zypx.stop()
    // zypxWs.init({
    //   appId: "wss3333333333",
    //   appSecret: "ws444444444",
    // })
    // zypxWs.close()
    $("#stop").hide();
    $("#gif").hide();
    $('#msg-con').html("");
    $("#start").show();
  })
})