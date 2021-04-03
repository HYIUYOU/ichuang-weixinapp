// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  getMima(event) {
    console.log('密码', event.detail.value)
    this.setData({
      description1: event.detail.value
    })
  },
  getDescribe(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe1:event.detail.value
    })
  },
  getDescribeid(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe2:event.detail.value
    })
  },
  getDescribe2(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe3:event.detail.value
    })
  },
  getDescribe3(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe4:event.detail.value
    })
  },
  getDescribe4(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe5:event.detail.value
    })
  },
  getDescribe5(event){
    console.log('描述', event.detail.value)
    this.setData({
      describe6:event.detail.value
    })
  },
  
  insert(event){
    let des = this.data.description1
    let des2 = this.data.describe1
    let des3 = this.data.describe2
    let des4 = this.data.describe3
    let des1 = this.data.describe5
    let des5 = this.data.describe4
    let des6 = this.data.describe5
    const db = wx.cloud.database();
    console.log('-----', des)
    /**
     * 向集合counters中添加数据
     */
    db.collection('property').add({
        data:{
            name:des1,
            _id:des1,
            price:des2,
            num:des3,
            company:des4,
            describe:des5,
            Type:des6,
            pic:"cloud://login-7ggsj7ve4e11a7ec.6c6f-login-7ggsj7ve4e11a7ec-1303830226/wupin.png"
        }
    })
    .then(res=>{
        console.log(res)
    })



  },
  

})