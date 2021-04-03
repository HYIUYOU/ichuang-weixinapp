// pages/shipu/index.js
Page({
  data: {
    imgUrls: [
      'cloud://login-7ggsj7ve4e11a7ec.6c6f-login-7ggsj7ve4e11a7ec-1303830226/截屏2021-03-28 下午6.22.59.png',
      'cloud://login-7ggsj7ve4e11a7ec.6c6f-login-7ggsj7ve4e11a7ec-1303830226/截屏2021-03-28 下午6.22.59.png',
      'cloud://login-7ggsj7ve4e11a7ec.6c6f-login-7ggsj7ve4e11a7ec-1303830226/截屏2021-03-28 下午6.22.59.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    currentTab: 0,
    eventList: [],
    thingId:''
  },
  input1: function (e) { //输入时实时调用搜索方法
    this.searchInput(e.detail.value)
  },
  confirm1: function (e) { //软键盘 调用
    this.searchInput(e.detail.value)
  },
  searchInput: function(key){
    console.log("this.data.eventList")
    console.log(this.data.eventList)
    console.log("搜索函数")
    console.log(key)
   var This = this;
    var eventList = wx.getStorage({
      key: 'eventList', 
      success: function (res) { //从storage中取出储存的数据
        console.log("eventList res")
          console.log(res)
        if (key == "") { //用户没输入，全部显示
          This.setData({
            eventList: res.data
          })
          console.log("eventList res2")
          console.log(res)
          return;
        }
        var arr = []; //存放匹配到的数据
        for (let i in res.data) {
          res.data[i].show = false; //所有数据隐藏
          if (res.data[i].name.indexOf(key) >= 0) { //查找search字段的关键字
            res.data[i].show = true;
            arr.push(res.data[i])
          }
        }
        if (arr.length == 0) {
          This.setData({
            eventList: [{

            }]
          })
        } else {
          This.setData({
            eventList: arr //找到的显示在页面
          })
        }
      }
    })
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
      db.collection('property').where({
          type: 1
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
              arr.push({
                show:res.data[i].show,
                id: res.data[i]._id,
                title: res.data[i].company,
                type: res.data[i].type,
                pic: res.data[i].pic,
                name: res.data[i].name,
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

      db.collection('property').where({
          type: 2
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
            arr.push({
              show:res.data[i].show,
              id: res.data[i]._id,
              title: res.data[i].company,
              type: res.data[i].type,
              pic: res.data[i].pic,
              name: res.data[i].name,
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

      db.collection('property').where({
          type: 7
        })
        .get()
        .then(res => {
          var arr = []
          for (var i = 0; i < res.data.length; i++) {
            arr.push({
              show:res.data[i].show,
              id: res.data[i]._id,
              title: res.data[i].company,
              type: res.data[i].type,
              pic: res.data[i].pic,
              name: res.data[i].name,
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
  async onLoad(options) {
    wx.cloud.init({
      env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    })
    const db = wx.cloud.database()
    const _ = db.command

    //从property中选type为1的信息读取，1为虚拟货币，2为优惠券，3为软件会员，4为其他  
    db.collection('property').where({
        type: 7
      })
      .get()
      .then(res => {
        var arr = []
        for (var i = 0; i < res.data.length; i++) {
            arr.push({
              show:res.data[i].show,
              id: res.data[i]._id,
              title: res.data[i].company,
              type: res.data[i].type,
              pic: res.data[i].pic,
              name: res.data[i].name,
              price: res.data[i].price,
              detail: res.data[i].describe
            })
          this.setData({
            eventList: arr
          })

    }
  })
  await this.doubleAfter2seconds(1)
  var eventList=this.data.eventList;
  console.log("setStorage")
  console.log(eventList)
  wx.setStorage({//获取的时候存储在本地
    data: eventList,
    key: 'eventList',
  })
},
// 2s 之后返回双倍的值
doubleAfter2seconds(num) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(2 * num)
      }, 1000);
  } )
},
  seeDetail:function(e){
     var that=this
    that.setData({
      thingId:e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url:'/pages/goods_detail/index?goods_id='+this.data.thingId,
    })

},
})