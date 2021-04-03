//app.js
App({
  onLaunch: function(){
    wx.cloud.init({
      env:"login-7ggsj7ve4e11a7ec"
    })
    wx.cloud.init({
      traceUser: true,
    })   
  },
  globalData: {//全局变量
    goods_id:"",    //用全局变量传递物品ID，解决switchTab传递不了参数的问题
    zhanghao:""     //用于显示对应账号的购物车中的物品 
  },
 
 
 
})