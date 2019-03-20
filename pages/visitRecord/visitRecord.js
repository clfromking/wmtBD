// pages/visitRecord/visitRecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'小马快餐（酒仙桥店）',
    list:[],
    total: 0,
    index: 0,
    pageSize: 5,
    footer: '加载中',
    nothing: true,
    type:''
  },

  submitRecord:function(e){
    console.log(this.data.type)
    // return
    var type = ''
    if(Number(this.data.type) == 1){
      type = 0
    }
    else{
      type = e.currentTarget.dataset.type
    }
    wx.navigateTo({
      url: '../submitRecord/submitRecord?type='+ type,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type
    })
    
    this.loadMsg()
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
    this.setData({
      index: this.data.index + 1
    })
    if (this.data.list.length >= this.data.total) {
      this.setData({
        footer: '已为您显示全部'
      })
      return
    }
    this.loadMsg()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  loadMsg: function () {
    var postData = {
      'accessToken': '2116ccc06b8047bdaffd67f76fd882c8',
      'index': this.data.index,
      'pageSize': this.data.pageSize,
    }
    app.postData('/order/my', postData).then(res => {
      console.log(res)
      if (res.data.data.total <= 0) {
        this.setData({
          nothing: true
        })
      }
      else {
        this.setData({
          nothing: false
        })
      }
      var list = this.data.list
      for (let i = 0; i < res.data.data.list.length; i++) {
        list.push(res.data.data.list[i])
      }
      this.setData({
        total: res.data.data.total,
        list
      })
      console.log(this.data.list)
    })
  }

})