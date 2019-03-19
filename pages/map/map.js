// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      path:'北京市朝阳区酒仙桥东路18号尚科办公社区B座底商'
      // iconPath: '/image/location.png'
    },
    {
      id: 2,
      latitude: 23.099994,
      longitude: 113.344520,
      name: 'T.I.T 11创意园',
      // iconPath: '/image/location.png'
    }],
    showIndex:''
  },

  showDetail:function(res){
    
    let markerId = res.markerId;// 获取点击的markers  id
    let markers = res.currentTarget.dataset.markers;// 获取markers列表

    for (let i=0;i<markers.length;i++) {
      
      if (markers[i].id === markerId) {
        console.log(i)
        this.setData({
          showIndex:i
        })
        return
        
      }
    }
  },

  clearDetail:function(){
    this.setData({
      showIndex:''
    })
  },

  goHere:function(){
    let lat = ''; // 获取点击的markers经纬度
    let lon = ''; // 获取点击的markers经纬度
    let name = ''; // 获取点击的markers名称
    let markers = this.data.markers;// 获取markers列表
    lat = markers[this.data.showIndex].latitude;
    lon = markers[this.data.showIndex].longitude;
    name = markers[this.data.showIndex].name;
    wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
      latitude: lat,
      longitude: lon,
      name: name,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      }
    })
    // break;
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