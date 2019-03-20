const app = getApp()
let count = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bdName:'小马',
    bdGroup:'朝阳4组',
    bdDate:'2018-07-01'
  },

  goNav:function(e){
    switch(Number(e.currentTarget.dataset.index)){
      case 0:
        wx.navigateTo({
          url: '../myBusiness/myBusiness?type=0',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../myStaff/myStaff',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../registerBusiness/registerBusiness',
        })
        break;
    }
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
    count++
    if(count > 1){
      return
    }
    wx.authorize({
      scope: 'scope.userLocation',
    })
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

  getFormid: function (e) {
    console.log(e)
    app.getFormid(e)
  },

})