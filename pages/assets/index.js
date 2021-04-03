// pages/assets/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrls: [
      '../images/swiper1.jpg',
      '../images/swiper1.jpg',
      '../images/swiper1.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    currentTab: 0,
    eventList: [],
    thingId:'',
    zhanghao: "", //用户账号
  },
  switchNav: function (e) {
    this.setData({
      currentTab: e.target.dataset.current
    })
    var that = this
    if (that.data.currentTab == 0) {
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command

      //从property中选type为1的信息读取，1为虚拟货币，2为优惠券，3为软件会员，4为其他  
      db.collection('asset').where({
          type: 1,
          zhanghao:this.data.zhanghao
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
            arr.push({
              id: res.data[i].my_id,
            title: res.data[i].title,
            num: res.data[i].num,
            image: res.data[i].image,
            selected: res.data[i].selected,
            price: res.data[i].price,
            detail: res.data[i].describe
            })

            this.setData({
              eventList: arr
            })
          }
        })
    } else if (that.data.currentTab == 1) {
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command

      db.collection('asset').where({
          type: 2,
          zhanghao:this.data.zhanghao
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
            arr.push({
              id: res.data[i].my_id,
            title: res.data[i].title,
            num: res.data[i].num,
            image: res.data[i].image,
            selected: res.data[i].selected,
            price: res.data[i].price,
            detail: res.data[i].describe
            })
            this.setData({
              eventList: arr
            })
          }
        })
    } else if (that.data.actIndex == 2) {
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command

      db.collection('asset').where({
          type: 3,
          zhanghao:this.data.zhanghao
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
            arr.push({
              id: res.data[i].my_id,
            title: res.data[i].title,
            num: res.data[i].num,
            image: res.data[i].image,
            selected: res.data[i].selected,
            price: res.data[i].price,
            detail: res.data[i].describe
            })
            this.setData({
              eventList: arr
            })
          }
        })
    }
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户账号
    var zhanghao = getApp().globalData.zhanghao
    this.setData({
      zhanghao: zhanghao
    })
    wx.cloud.init({
      env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    })
    const db = wx.cloud.database()
    const _ = db.command

    //从property中选type为1的信息读取，1为虚拟货币，2为优惠券，3为软件会员，4为其他  
    db.collection('asset').where({
        type: 1,
        zhanghao:this.data.zhanghao
      })
      .get()
      .then(res => {
        var arr = []
        for (var i = 0; i < res.data.length; i++) {
            arr.push({
              id: res.data[i].my_id,
              title: res.data[i].title,
              num: res.data[i].num,
              image: res.data[i].image,
              selected: res.data[i].selected,
              price: res.data[i].price,
              detail: res.data[i].describe
            })


          this.setData({
            eventList: arr
          })

    }
  })
},
  seeDetail:function(e){
     var that=this
    that.setData({
      thingId:e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url:'/pages/sell/index?goods_id='+this.data.thingId,
    })

},

})