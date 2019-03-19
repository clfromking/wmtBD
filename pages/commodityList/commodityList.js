// pages/commodityList/commodityList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time : '2019.3.13 19:29:23',
    content : '黑色男生女生硬勺餐具包（760个/件，高端黑肯德基勺）',
    source : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
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
  toDetail : function() {
    wx.navigateTo({
      url : '../findCommodity/findCommodity'
    })
  },
  tocommodityDetail : function() {
    wx.navigateTo({
      url : '../commodityDetail/commodityDetail'
    })
  }
})

