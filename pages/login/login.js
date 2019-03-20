// pages/login/login.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

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
  getuserinfo: function(e) {
    console.log(e);
    if(e.detail.userInfo){
      wx.showLoading({
        title : '请稍等',
        mask : true
      })
      wx.login({
        success : function(res) {
          console.log(res)
          wx.getUserInfo({
            withCredentials : true,
            success : function(res1) {
              console.log(res1)
              var postData = {}
              postData = {
                'code' : res.code,
                'iv' : res1.iv,
                'encryptedData' : res1.encryptedData
              }  
              // app.postData('', postData)
              //    .then((res2) => {
              //       if(res2.data.code == 200){
              //         wx.setStorage({
              //           key : '',
              //           data : res.data.data,
              //           success : function() {
              //             wx.showToast({
              //               title : '登录成功',
              //               icon : 'none',
              //               mask : true,
              //               duration : 1500
              //             })
              //             setTimeout(function () {
              //               wx.navigateTo({
              //                 url : '../input/input'
              //               })
              //             },1500)
              //           }
              //         })
              //       }
              //    })
              wx.navigateTo({
                url : '../input/input'
              })
              wx.hideLoading()
            }
          })
        }
      })
    }
  }
})