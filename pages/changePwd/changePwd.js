// pages/changePwd/changePwd.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData : {
      newPwd : '',
      oldPwd : '',
      againPwd : ''
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
  getInputs : function(e) {
    var key = '';
    switch(Number(e.currentTarget.dataset.index)){
      case 0 :
        key = 'formData.oldPwd'
        break;
      case 1 : 
        key = 'formData.newPwd'
        break;
      case 2 :
        key = 'formData.againPwd'
        break;
    }
    this.setData({
      [key] : e.detail.value.trim()
    })
  },
  toGetcode : function() {
    wx.navigateTo({
      url : '../getCode/getCode'
    })
  },
  savePwd : function() {
    var oldPwd = this.data.formData.oldPwd.trim();
    var newPwd = this.data.formData.newPwd.trim();
    var againPwd = this.data.formData.againPwd.trim();
    // if(!oldPwd){
    //   wx.showToast({
    //     title : '原密码不能为空！',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }else if(!newPwd){
    //   wx.showToast({
    //     title : '新密码不能为空！',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }else if(!againPwd){
    //   wx.showToast({
    //     title : '新密码不能为空！',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }else if(newPwd != againPwd){
    //   wx.showToast({
    //     title : '两次新密码不一致',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }else if((newPwd.length < 6 || newPwd.length > 12) || (againPwd.length < 6 || againPwd.length > 12)){
    //   wx.showToast({
    //     title : '新密码格式不正确',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }
    
    wx.navigateTo({
      url : '../userInfo/userInfo'
    })
    
  }
})