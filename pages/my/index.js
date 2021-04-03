const CONFIG = require('../../config.js')
const WXAPI = require('apifm-wxapi')
const AUTH = require('../../utils/auth')
const TOOLS = require('../../utils/tools.js')

const APP = getApp()
Page({
  data: {
    userinfo:{},
    ne: [],
    score_sign_continuous:0,
    rechargeOpen: false, // 是否开启充值[预存]功能

    // 用户订单统计数据
    count_id_no_confirm: 0,
    count_id_no_pay: 0,
    count_id_no_reputation: 0,
    count_id_no_transfer: 0,
  },
  onShow(){
    const userinfo = wx.getStorageSync('userinfo');
    this.setData({userinfo})
  },
  goAsset: function () {
    wx.navigateTo({
      url: "/pages/asset/index"
    })
  },
  goScore: function () {
    wx.navigateTo({
      url: "/pages/score/index"
    })
  },
  //去登陆页
  denglu() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  //去注册页
  zhuce() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  gojidan: function (e) {
    wx.navigateTo({
      url: "/pages/jidan/index" 
    })
  },
  gozhurou: function (e) {
    wx.navigateTo({
      url: "/pages/shipu/index" 
    })
  },
  gojirou: function (e) {
    wx.navigateTo({
      url: "/pages/jirou/index" 
    })
  },
  goniurou: function (e) {
    wx.navigateTo({
      url: "/pages/niurou/index" 
    })
  },
  goyinliao: function (e) {
    wx.navigateTo({
      url: "/pages/yinliao/index" 
    })
  },
  gojiushui: function (e) {
    wx.navigateTo({
      url: "/pages/jiushui/index" 
    })
  },
  gomian: function (e) {
    wx.navigateTo({
      url: "/pages/mian/index" 
    })
  },
  goyu: function (e) {
    wx.navigateTo({
      url: "/pages/yu/index" 
    })
  },
  goshucai: function (e) {
    wx.navigateTo({
      url: "/pages/shucai/index" 
    })
  },
  goshuiguo: function (e) {
    wx.navigateTo({
      url: "/pages/shuiguo/index" 
    })
  },
  goAssets(){
    wx.navigateTo({
      url: '/pages/assets/index',
    })
  },
  onLoad: function () {
    var _this=this;
    wx.cloud.init() 
    
   //1、引用数据库
   const db=wx.cloud.database({
     //这个是环境ID不是环境名称
     env:'login-7ggsj7ve4e11a7ec'
   }) 
   //2、开始查询数据了  news对应的是集合的名称
   db.collection('userC')
   .get({
     //如果查询成功的话
    success:res =>{     
      //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值
      console.log(res.data)
      this.setData({
        ne: res.data
      })
    }
    })
  },
 

})
