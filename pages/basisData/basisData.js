
const app = getApp()
let arr = new Array()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manageClass: ['单店自营', '连锁加盟', '连锁自营'],      //经营品类
    manageClassIndex: -1,                              //经营品类索引
    businessAreaClass: ["办公区", "商场", "社区", "车站(如地铁)", "医院", "景区", "学校"],       //商圈品类
    businessAreaClassIndex: -1,                         //商圈品类索引
    multiArray: [[], []],
    multiIndex: [-1, -1],
    purchaseClass: ['美菜,有菜,快驴等互联网平台', '微信或电话发给供货商', '自己去批发市场', '等业务员上门'],    //采购方式
    purchaseClassIndex: -1,
    region: ['北京市', '北京市', '东城区'],
    // customItem: '全部',
    coordinates: '',
    longitude: '',
    latitude: '',
    accuracy: '',
    license: '',
    date: '',
    nowDate: '',
    platformClass: ['美团外卖', '饿了么', '美团外卖+饿了么', '未上线外卖'],   //上线平台
    platformClassIndex: -1,
    formData: {
      businessName: '',
      personName: '',
      personPhone: '',
      street: '',
      address: '',
      licenseCode: '',
      orderTotalNum: '',
      storeNum: '',
      note: ''
    }
  },

  bindInput: function (e) {
    var key = ''
    switch (Number(e.currentTarget.dataset.index)) {
      case 0:
        key = 'formData.businessName'
        break;
      case 1:
        key = 'formData.personName'
        break;
      case 2:
        key = 'formData.personPhone'
        break;
      case 3:
        key = 'formData.street'
        break;
      case 4:
        key = 'formData.address'
        break;
      case 5:
        key = 'formData.licenseCode'
        break;
      case 6:
        key = 'formData.storeNum'
        break;
      case 7:
        key = 'formData.note'
        break;
    }
    this.setData({
      [key]: e.detail.value
    })
    // console.log(this.data.formData)
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  //选择经营品类
  pickerChange: function (e) {
    var index = ''
    switch (Number(e.currentTarget.dataset.index)) {
      case 0:
        index = 'manageClassIndex'
        break;
      case 1:
        index = 'businessAreaClassIndex'
        break;
      case 2:
        index = 'purchaseClassIndex'
        break;
      case 3:
        index = 'platformClassIndex'
    }
    this.setData({
      [index]: e.detail.value
    })
  },

  //穿执照
  chooseLicense: function () {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        if (res.tempFiles[0].size / 1024 / 1024 > 5) {
          app.showToast('图片不得大于5M')
          return
        }
        this.setData({
          license: res.tempFilePaths[0]
        })
      },
      fail: () => {
        // app.showToast('上传图片失败，请重试')
      }
    })
  },


  //开定位
  openLocation: function () {
    if (this.data.coordinates) {
      return
    }
    app.chooseLocation()
  },

  //提交
  submitForm: function () {
    var formData = this.data.formData
    if (!(formData.businessName).replace(/\s+/g, "")) {
      app.showToast('请输入商户名称')
    }
    else if (!(formData.personName).replace(/\s+/g, "")) {
      app.showToast('请输入负责人姓名')
    }
    else if (!(formData.personPhone).replace(/\s+/g, "")) {
      app.showToast('请输入负责人手机')
    }
    else if (!app.isPhone((formData.personPhone).replace(/\s+/g, ""))) {
      app.showToast('负责人手机号格式不正确')
    }
    else if (this.data.manageClassIndex < 0) {
      app.showToast('请选择经营类型')
    }
    else if (this.data.businessAreaClassIndex < 0) {
      app.showToast('请选择商圈类型')
    }
    else if (this.data.multiIndex[0] < 0 && this.data.multiIndex[1] < 0) {
      app.showToast('请选择经营品类')
    }
    else if (!(formData.street).replace(/\s+/g, "")) {
      app.showToast('请输入街道')
    }
    else if (!(formData.address).replace(/\s+/g, "")) {
      app.showToast('请输入详细地址')
    }
    else if (!this.data.longitude) {
      app.showToast('请定位商户坐标')
    }
    else {

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    this.setData({
      nowDate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      // date: date.toLocaleDateString().replace(/-/g, '/')
    })
    this.loadmanageType()
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
    // if (this.data.coordinates){
    //   return
    // }
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

  getFormid: function (e) {
    app.getFormid(e)
  },

  //加载经营品类
  loadmanageType: function () {
    app.getData('/dish/allcate?accessToken=' + app.globalData.accessToken).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        if (arr[res.data.data[i].name] == null) {
          arr[res.data.data[i].name] = new Array()
        }
        let obj = { "subName": res.data.data[i].subName, "cateId": res.data.data[i].cateId }
        arr[res.data.data[i].name].push(obj)
      }
      let multiArray = this.data.multiArray
      multiArray[0] = []
      multiArray[1] = []
      for (var obj in arr) {
        console.log(obj)
        multiArray[0].push(obj)
      }

      for (let i = 0; i < arr[multiArray[0][0]].length; i++) {
        multiArray[1].push(arr[multiArray[0][0]][i].subName)
      }
      this.setData({
        multiArray
      })
    })
  },

  //多列选择器确定改变
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },

  //多列选择器列数改变
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    if (e.detail.column == 0) {
      data.multiArray[1] = []
      for (let i = 0; i < arr[data.multiArray[0][e.detail.value]].length; i++) {
        data.multiArray[1].push(arr[data.multiArray[0][e.detail.value]][i].subName)
      }
    }
    this.setData(data)
  },

  //地区选择器改变
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },



})