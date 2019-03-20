// pages/siteData/siteData.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    formItems:[
      { "title": '店铺状态', "area": ['运营中', '倒闭', '转让', '其他'], 'isChecked': '', "haveInput": true, 'disabled': true,"value":''},
      { "title": '商圈分类', "area": ['办公区', '商场', '社区', '车站(如地铁)', '学校', '医院', '景区', '其他'], 'isChecked': '', "haveInput": true, 'disabled': true, "value": ''},
      { "title": '店铺类型',  "area": ['街边店', '场内店', '美食城'], 'isChecked': '', "haveInput": false},
      { "title": '经营类型',  "area": ['单店自营品牌', '连锁加盟品牌', '连锁直营品牌'], 'isChecked': '', "haveInput": false},
      { "title": '店铺面积', "area": ['20平及以下', '21-60平', '61-100平', '101-200平', '201-500平', '500平及以上'], 'isChecked': '', "haveInput": false },
      { "title": '商户经营者结构', "area": ['自营小店（自己开店，家人打理）', '大单体店（自己开店，雇人打理）', '自营小连锁（一个大老板，店长打理）', '加盟连锁（公司运营，店长加盟&打理）', '直营连锁（公司运营，直营雇佣店长打理）', '翻盘连锁（没有实际连锁机制，知识翻门头，类似海盗虾饭，京东小店）', '纯外卖', '外卖+堂食', '自运营外卖', '已找代运营公司',], 'isChecked': '', "haveInput": true, 'disabled': true, "value": '' },
      { "title": '外卖日营业额', "area": ['2000元及以下', '2001-3000元', '3001-5000元', '5001-10000元', '10001-20000元', '20001及以上'], 'isChecked': '', "haveInput": false },
      { "title": '堂食日营业额', "area": ['2000元及以下', '2001-3000元', '3001-5000元', '5001-10000元', '10001-20000元', '20001及以上'], 'isChecked': '', "haveInput": false },
      { "title": '店主从事行业年限', "area": ['1年及以下', '2-3年', '4-5年', '6年以上'], 'isChecked': '', "haveInput": false },
      { "title": '店主年龄', "area": ['20岁及以下', '20-25岁', '26-30岁', '31-35岁', '36-40岁', '41-45岁', '46-50岁', '50岁以上'], 'isChecked': '', "haveInput": false },
      { "title": '店主性别', "area": ['女', '男'], 'isChecked': '', "haveInput": false },
      { "title": '主要进货渠道', "area": ['美菜，有菜，快驴等互联网平台', '微信或电话发给供货商', '自己去批发市场', '等业务员上门', '其他'], 'isChecked': '', "haveInput": true, 'disabled': true, "value": ''},
      { "title": '店主经营意识', "area": ['5分（非常好）', '4分（还不错）', '3分（一般）', '2分（还凑合）', '1分（差）'], 'isChecked': '', "haveInput": false },
    ],
    coordinates:'',
    longitude:'',
    latitude:'',
    accuracy:'',
    loading:true,
    showWriteForm:false,
    showFormData:false
  },

  bindInput:function(e){
    var index = 'formItems[' + e.currentTarget.dataset.index + '].value'
    this.setData({
      [index]:e.detail.value
    })
  },

  selectRadio:function(e){
    var formItems = this.data.formItems
    var index = 'formItems['+e.currentTarget.dataset.parentindex+'].isChecked'
    if (e.currentTarget.dataset.index == formItems[e.currentTarget.dataset.parentindex].area.length-1){
      console.log('最后一个')
      var disabled = 'formItems[' + e.currentTarget.dataset.parentindex + '].disabled'
      this.setData({
        [disabled]:false,
        [index]: e.currentTarget.dataset.index
      })
    }
    else{
      this.setData({
        [disabled]: true,
        [index]: e.currentTarget.dataset.index
      })
    }
  },

  //开定位
  openLocation: function () {
    if (this.data.coordinates) {
      return
    }
    app.chooseLocation()
  },

  submitForm:function(){
    var formItems = this.data.formItems
    for(let i=0;i<formItems.length;i++){
      //有没有没选择的
      if(formItems[i].isChecked === ''){
        let text = ''
        switch(Number(i)){
          case 0:
            text = '店铺状态'
            break;
          case 1:
            text = '商圈分类'
            break;
          case 2:
            text = '店铺类型'
            break;
          case 3:
            text = '经营类型'
            break;
          case 4:
            text = '店铺面积'
            break;
          case 5:
            text = '商户经营者结构'
            break;
          case 6:
            text = '外卖日营业额'
            break;
          case 7:
            text = '堂食日营业额'
            break;
          case 8:
            text = '店主从事行业年限'
            break;
          case 9:
            text = '店主年龄'
            break;
          case 10:
            text = '店主性别'
            break;
          case 11:
            text = '主要进货渠道'
            break;  
          case 12:
            text = '店主经营意识'
            break;  
        }
        app.showToast('请选择'+text)
        return
      }

      if(!this.data.coordinates){
        app.showToast('请先确认位置')
        return
      }
      
      //输入框
      if ((formItems[i].isChecked == formItems[i].area.length - 1) && formItems[i].haveInput){
        if (!formItems[i].value.replace(/\s+/g, "")){
          let text = ''
          switch(Number(i)){
            case 0:
              text = '店铺状态'
              break;
            case 1:
              text = '商圈分类'
              break;
            case 5:
              text = '商户经营者结构'
              break;
            case 11:
              text = '主要进货渠道'
              break;
          }
          app.showToast('请输入' + text)
          return

        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    console.log(options.type)
    // options.type = 1
    this.setData({
      type:options.type
    })

    //请求数据 ，返回的数据为data
    let data = '111'
    //if type ==0 && 没数据

    if(options.type == 0){      //看自己
      if(!data){    //没数据  显示填表单
        wx.hideLoading()
        this.setData({
          loading: false,
          showWriteForm: true,
          showFormData: false
        })
      }
      else{ //有    显示数据
        wx.hideLoading()
        this.setData({
          loading: false,
          showWriteForm: false,
          showFormData: true
        })
      }
    }
    else{     //看小兵
      if (!data) {    //没数据 显示没有
        wx.hideLoading()
        this.setData({
          loading: false,
          showWriteForm: false,
          showFormData: false
        })
      }
      else{ //有 显示数据
        wx.hideLoading()
        this.setData({
          loading: false,
          showWriteForm: false,
          showFormData: true
        })
      }
    }

    
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

  }
})