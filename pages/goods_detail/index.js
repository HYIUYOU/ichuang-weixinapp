// pages/goods_detail/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    eventList: [],
    show: [],
    goods_id: "x1",
    zhanghao: "624042364",
    num_goods: 0,
    arr2: [],
    balanceM:100,

  },
 
  //获得用户当前购物车的物品数目
  getNumGoods() {
    wx.cloud.init({
      env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    })
    const db = wx.cloud.database()
    db.collection('cart').where({
        zhanghao: this.data.zhanghao
      })
      .get()
      .then(res => {
        this.setData({
          num_goods: res.data.length
        })
      })
      return this.data.num_goods
  },
  //一些测试
  doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 100);
    } )
},
  async testResult() {
    let first = await this.doubleAfter2seconds(30)
  },
  //更新数据库
  async gengxinyunshujvku() {
    await this.getNumGoods()
    await this.testResult()
    wx.cloud.init({
      env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    })
    const db = wx.cloud.database()
    db.collection('cart').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          my_id: this.data.num_goods + 1,
          title: this.data.arr2[0].title,
          num: 1,
          image: this.data.arr2[0].image,
          selected: true,
          price: this.data.arr2[0].price,
          detail: this.data.arr2[0].detail,
          zhanghao: this.data.zhanghao
        }
      })
      .then(res => {
        wx.showToast({
                title:"成功购买",          
                duration: 1000,//提示的延迟时间，单位毫秒，默认：1500           
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
              })
      })
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
    var that = this;
    var arr = []
    wx.cloud.init({
      env: "login-7ggsj7ve4e11a7ec" //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
    })
    const db = wx.cloud.database()

    db.collection('property').where({
        _id: options.goods_id
      })
      .get()
      .then(res => {
        arr.push({
          id: res.data[0]._id,
          title: res.data[0].company,
          type: res.data[0].type,
          pic: res.data[0].pic,
          name: res.data[0].name,
          name1: res.data[0].name1,
          name2: res.data[0].name2,
          price: res.data[0].price,
          detail: res.data[0].describe,
          mean:res.data[0].mean
        })
        that.setData({
          eventList: arr,
          goods_id: arr[0].id
        })
      })
      
        
  },
  AddToCart: function (e) {
    balanceM = balanceM - 13;
    const db = wx.cloud.database();
    db.collection("userC").doc('2fd465895f9faa7b00244da10f5b3627').update({
      data:{
        balance:balanceM,
      },
      success: res =>{
        console.log("更新成功")
      },fail:err =>{
        console.log(err);
      }
    })
    wx.navigateBack()
  },
  
})
