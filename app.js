//app.js
App({
  data : {
    url : 'https://www.baidu.com'
  },
  postData : function(url, data, header) {
    var _this = this;
    var promise = new Promise(() => {
      wx.request({
        url : _this.data.url + url,
        data : data,
        method : 'POST',
        header : {
          'content-type' : header || 'application/x-www-form-urlencoded'
        },
        success : function(res){
          if(res.data.code == 401) {
            wx.showToast({
              title : '登录超时，请重新登录',
              icon : 'none',
              duration : 1500,
              mask : true
            })
            setTimeout(function() {
              wx.navigateTo({
                url : '../login/login'
              },1500)
            })
          }
          else if(res.data.code == 200) {
            resolve(res);
          }
          else if((Number(res.data.code)>=1 && Number(res.data.code)<=199) || (Number(res.data.code)>500 && Number(res.data.code)<=9999)) {
            wx.showToast({
              title : '服务器错误，请重试！',
              icon : 'none',
              duration : 1500,
              mask : true
            })
          }
          else if(res.data.code == 500){
            if(res.data.msg){
              wx.showToast({
                title : res.data.msg,
                icon : 'none',
                duration : 1500,
                mask : true
              })
            }
          }
          else if(Number(res.data.code)>=300 && Number(res.data.code)<=499){
            resolve(res)
            if(Number(res.data.code) == 404){
              wx.hideLoading()
              return
            }
            else if(Number(res.data.code) == 403){
              wx.hideLoading()
              return
            }
            else if(Number(res.data.code) == 412){
              wx.hideLoading()
              return
            }
            else if(Number(res.data.code) == 400){
              wx.hideLoading()
              return
            }
            wx.showToast({
              title : res.data.msg,
              icon : 'none',
              duration : 1500,
              mask : true
            })
          }
        },
        fail : function(){
          wx.showToast({
            title : '网络错误，请重试',
            icon : 'none',
            duration : 1500,
            mask : true
          })
        },
        error : function(e){
          wx.showToast({
            title : '服务器错误，请重试！',
            icon : 'none',
            duration : 1500,
            mask : true
          })
          reject(e)
        }
      })
    })
    return promise
  },
  getData : function(url) {
    var _this = this;
    var promise = new Promise(() => {
      wx.request({
        url : _this.data.url + url,
        success : function(res){
          if(res.data.code == 401) {
            wx.showToast({
              title : '登录超时，请重新登录',
              icon : 'none',
              duration : 1500,
              mask : true
            })
            setTimeout(function() {
              wx.navigateTo({
                url : '../login/login'
              },1500)
            })
          }
          else if(res.data.code == 200) {
            resolve(res);
          }
          else if((Number(res.data.code)>=1 && Number(res.data.code)<=199) || (Number(res.data.code)>500 && Number(res.data.code)<=9999)) {
            wx.showToast({
              title : '服务器错误，请重试！',
              icon : 'none',
              duration : 1500,
              mask : true
            })
          }
          else if(res.data.code == 500){
            if(res.data.msg){
              wx.showToast({
                title : res.data.msg,
                icon : 'none',
                duration : 1500,
                mask : true
              })
            }
          }
          else if(Number(res.data.code)>=300 && Number(res.data.code)<=499){
            resolve(res)
            if(Number(res.data.code) == 404){
              wx.hideLoading()
              return
            }
            else if(Number(res.data.code) == 403){
              wx.hideLoading()
              return
            }
            wx.showToast({
              title : res.data.msg,
              icon : 'none',
              duration : 1500,
              mask : true
            })
          }
        },
        fail : function(){
          wx.showToast({
            title : '网络错误，请重试',
            icon : 'none',
            duration : 1500,
            mask : true
          })
        },
        error : function(e){
          wx.showToast({
            title : '服务器错误，请重试！',
            icon : 'none',
            duration : 1500,
            mask : true
          })
          reject(e)
        }
      })
    })
    return promise
  },
  chooseLocation : function(){
    var promise = new Promise((resolve, reject) => {
      wx.authorize({
        scope : 'scope.userLocation',
        success : function(res){
          wx.chooseLocation({
            success : function(res){
              resolve(res)
            },
            fail : function(res){
              wx.getSetting({
                success : function(res){
                  if(res.authSetting["scope.userLocation"]){

                  }else{
                    wx.navigateTo({
                      url: '../authorization/authorization',
                    })
                  }
                }
              })
            }
          })
        },
        fail : function(res){
          wx.getSetting({
            success(res) {
              console.log(res)
              if (res.authSetting["scope.userLocation"]) {
              }
              else {
                wx.navigateTo({
                  url: '../authorization/authorization',
                })
              }
            }
          })
        }
      })
    })
    return promise
  },
  onLaunch : function() {
    var _this = this;
    let userInfo = wx.getStorageSync('userInfo');
  },
  globalData : {
    
  }
})