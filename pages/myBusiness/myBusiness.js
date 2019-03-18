// pages/myBusiness/myBusiness.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    index:0,
    pageSize:5,
    list:[],
    footer:'加载中',
    nothing:true
  },

  callPhone:function(e){
    console.log(e.currentTarget.dataset.index)
    wx.makePhoneCall({
      phoneNumber: '',
    })
  },

  goNav:function(e){
    switch(Number(e.currentTarget.dataset.id)){
      case 0:
        wx.navigateTo({
          url: '../basisData/basisData',
        })
        break;
      case 1:
        break;
      case 2:
        break;
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    if(Number(options.type) == 0){
      wx.setNavigationBarTitle({
        title: '我的商户'
      })
    }
    else{
      
    }

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
      index:this.data.index + 1
    })
    if(this.data.list.length >= this.data.total){
      this.setData({
        footer:'已为您显示全部'
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

  loadMsg:function(){
    var postData = {
      'accessToken': '2116ccc06b8047bdaffd67f76fd882c8',
      'index': this.data.index,
      'pageSize': this.data.pageSize,
    }
    app.postData('/order/my', postData).then(res => {
      console.log(res)
      if(res.data.data.total <= 0){
        this.setData({
          nothing:true
        })
      }
      else{
        this.setData({
          nothing: false
        })
      }
      var list = this.data.list
      for(let i =0 ;i<res.data.data.list.length;i++){
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