// pages/changePwdTwo/changePwdTwo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData : {
      new : '',
      again : ''
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
  getInput : function(e) {
    var key = '';
    switch(Number(e.currentTarget.dataset.index)){
      case 0 :
        key = 'formData.new'
        break;
      case 1 :
        key = 'formData.again'
        break;
    }
    this.setData({
      [key] : e.detail.value
    })
  },
  save : function() {
    var newPwd = this.data.formData.new.trim();
    var againPwd = this.data.formData.again.trim();
    // if(!newPwd){
    //   wx.showToast({
    //     title : '新密码不能为空！',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }else if(!againPwd){
    //   wx.showToast({
    //     title : '再次输入新密码不能为空',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return;
    // }
    var postData = {
      newPwd : newPwd,
      againPwd : againPwd
    }
     wx.navigateTo({
      url : '../userInfo/userInfo'
    })
  }
})