// pages/findCommodity/findCommodity.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData : {
      name : '',
      image : '',
      merchant : '',
      area : '',
      detail : '',
      supplier : '',
      chargeName : '',
      chargeTel : ''
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
  //上传图片
  uploadimg : function() {
    var that = this;
    wx.chooseImage({
      count : 9,
      success : function(res) {
        var tempFilePaths = res.tempFilePaths;
        wx.showToast({  
          title: '正在上传...',  
          icon: 'loading',  
          mask: true,  
          duration: 10000  
        })  
        var uploadImgCount = 0;
        for(var i = 0; i < tempFilePaths; i++) {
          wx.uploadFile({
            url : '',
            filepath : tempFilePaths[i],
            name : '',
            success : function(res) {

            },
            fail : function() {

            }
          })
        }
      }
    })
  },
  //获取输入数据
  getInput : function(e) {
    var key = '';
    switch(Number(e.currentTarget.dataset.index)){
      case 0:
        key = 'formData.name'
        break;
      case 1:
        key = 'formData.merchant'
        break;
      case 2:
        key = 'formData.area'
        break;
      case 3:
        key = 'formData.detail'
        break;
      case 4:
        key = 'formData.supplier'
        break;
      case 5:
        key = 'formData.chargeName'
        break;
      case 6:
        key = 'formData.chargeTel'
        break;
    }

    this.setData({
      [key] : e.detail.value.trim()
    })
  },
  // 提交表单
  submitInput : function() {
    // if(this.data.formData.chargeTel.length !== 11){
    //   wx.showToast({
    //     title : '手机格式不正确',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return
    // }
    // else if(this.data.formData.name == ''){
    //    wx.showToast({
    //     title : '必填项目不能为空',
    //     icon : 'none',
    //     mask : true,
    //     duration : 1000
    //   })
    //   return
    // }
    // var postData = this.data.formData
    // app.postData('', postData)
    //    .then()
    // wx.navigateTo({
    //   url : '../commodityList/commodityList'
    // })
  }
})