// pages/getCode/getCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel : 15632479552,
    code : ''
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
  // getCode : function () {
  //   if(!this.data.code){
  //     wx.showToast({
  //       title : '验证码不能为空',
  //       icon : 'none',
  //       mask : true,
  //       duration : 1000
  //     })
  //     return
  //   }
  //   var postData = {
  //     code : ''
  //   }
  //   app.postData('', postData)
  // },
  getInput : function(e) {
    this.setData({
      code : e.detail.value
    })
  }
})