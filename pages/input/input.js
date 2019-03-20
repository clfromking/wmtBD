// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag : 1,
    tel1 : 0,
    tel2 : 0,
    tips1 : '',
    tips2 : '',
    pwd : '',
    captcha : '',
    code : '获取验证码',
    disabled : true
  },
  display1: function() {
    this.setData({
      flag : 1
    })
  },
  display2: function() {
    this.setData({
      flag : 2
    })
  },
  entertel1: function(e) {
    var tel1 = e.detail.value.trim()
    this.setData({
      tel1 : tel1
    })
    if(this.data.tel1.length == 11){
      this.setData({
        tips1 : ''
      })
    }
  },
  blurtel1: function() {
    if(this.data.tel1.length != 11){
      this.setData({
        tips1 : '手机号码格式不对'
      })
    }
  },
  entertel2: function(e) {
    var tel2 = e.detail.value.trim()
    this.setData({
      tel2 : tel2
    })
    if(this.data.tel2.length == 11){
      this.setData({
        tips2 : ''
      })
    }
  },
  blurtel2: function() {
    if(this.data.tel2.length != 11){
      this.setData({
        tips2 : '手机号码格式不对'
      })
    }
  },
  enterpwd: function(e) {
    var pwd = e.detail.value.trim();
    this.setData({
      pwd : pwd
    })
  },
  entercaptcha: function(e) {
    var captcha = e.detail.value.trim();
    this.setData({
      captcha : captcha
    })
  },
  getcodes : function() {
    if(this.data.code !== '获取验证码'){
      return;
    }
    var that = this;
    var code = 60;
    this.setData({
      code : code,
      disabled : true
    })
    for(var i = 1; i <= 60; i++){
      setTimeout(function() {
        that.setData({
          code : --code
        })
        if(that.data.code == 0){
          that.setData({
            code : '获取验证码',
            disabled : false
          })
        }
      },1000 * i)
    }
    // app.getData('')
  },
  submitAll: function(e) {
    if(this.data.flag == 1){
      var postData = {
        tel1 : this.data.tel1,
        pwd : this.data.pwd
      }
    }else if(this.data.flag == 2){
      var postData = {
        tel2 : this.data.tel2,
        captcha : this.data.captcha
      }
    }
    wx.navigateTo({
      url : '../index/index'
    })
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

  }
})