

 // pages/getCode/getCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel : 15632479552,
    code : '',
    captcha : '获取验证码'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getCode : function () {
    if(this.data.captcha !== '获取验证码'){
      return;
    }
    var _this = this;
    var captcha = 60;
    this.setData({
      captcha : captcha
    })
    for(var i = 1; i <= 60; i++){
      setTimeout(function() {
        _this.setData({
          captcha : --captcha
        },)
        if(captcha == 0){
          _this.setData({
            captcha : '获取验证码'
          })
        }
      }, 1000 * i)
    }
    var tel = this.data.tel;
    var postData = {
      tel : tel
    }
  },
  getInput : function(e) {
    this.setData({
      code : e.detail.value.trim()
    })
  },
  nextStep : function() {
    var code = this.data.code.trim();
    // if(!code){
    //   wx.showToast({
    //     title : '验证码不能为空',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }
    wx.navigateTo({
      url : '../changePwdTwo/changePwdTwo'
    })
  }
})