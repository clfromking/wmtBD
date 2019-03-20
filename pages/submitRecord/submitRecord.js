// pages/submitRecord/submitRecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessTypes:['新签商户','复购拜访'],
    businessIndex:-1,
    headImgs:[],
    insideImgs:[],
    date: '',
    nowDate: '',
    coordinates: '',
    longitude: '',
    latitude: '',
    accuracy: '',
    textAreaValue:'',
    type:"",
    disabled:false
  },
  
  addImg:function(e){
    console.log(e.currentTarget.dataset.index)
    wx.chooseImage({
      count:9,
      success: (res)=> {
        console.log(res)
        let headImgs = Number(e.currentTarget.dataset.index) == 0 ? this.data.headImgs : this.data.insideImgs
        let length = 0
        if((9-headImgs.length) > res.tempFiles.length){
          length = res.tempFiles.length
        }
        else{
          length = 9 - headImgs.length
          app.showToast('最多只能上传9张图片')
        }
        for(let i=0;i<length;i++){
          if(res.tempFiles[i].size/1024/1024>=5){
            app.showToast('您上传的图片第' + i + '张过大，请重新选择其他图片')
          }
          else{
            headImgs.push(res.tempFiles[i].path)
            var imgArr = Number(e.currentTarget.dataset.index) == 0 ? "headImgs" :"insideImgs"
            this.setData({
              [imgArr]:headImgs
            })
          }
        }
      },
    })
  },

  bindInput:function(e){
    this.setData({
      textAreaValue:e.detail.value
    })
  },

  //开定位
  openLocation: function () {
    if (this.data.coordinates) {
      return
    }
    app.chooseLocation()
  },

  submit:function(){
    if(Number(this.data.businessIndex) < 0){
      app.showToast('请先选择拜访类型')
    }
    else if (this.data.headImgs.length <= 0){
      app.showToast('请先上传门头照')
    }
    else if (this.data.insideImgs.length <= 0){
      app.showToast('请先上传店内照片')
    }
    else if(this.data.date === ''){
      app.showToast('请先选择下次拜访时间')
    }
    else if (!this.data.textAreaValue.replace(/\s+/g, "")){
      app.showToast('请先输入拜访记录')
    }
    else if (this.data.longitude === ''){
      app.showToast('请先确认位置')
    }
    else{

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    if(options.type == 0){
      this.setData({
        disabled:true
      })
    }
    var date = new Date()
    this.setData({
      nowDate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      type:options.type
      // date: date.toLocaleDateString().replace(/-/g, '/')
    })
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
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res)
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          accuracy: res.accuracy,
          coordinates: '经度：' + Number(res.longitude).toFixed(5) + ' 纬度：' + Number(res.latitude).toFixed(5),
        })
      },
      fail: () => {
        console.log('失败')
        this.setData({
          coordinates: ''
        })
      }
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

  getFormid:function(e){
    app.getFormid(e)
  },

  pickerChange:function(e){
    this.setData({
      businessIndex:e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

})