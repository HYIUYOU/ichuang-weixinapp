
Page({
  data: {
    currentTab: 0,
    eventList:[]
  },
  upper:function(e){
    console.log(e)
  },
  lower:function(e){
    console.log(e)
  },
  switchNav:function(e){
    this.setData({
      currentTab:e.target.dataset.current
    })
    var that=this
    if(that.data.currentTab==0){
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec"//默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command

      //从property中选type为1的信息读取，1为虚拟货币，2为优惠券，3为软件会员，4为其他  
      db.collection('property').where({
        type:1
       })
      .get()
    .then(res => {
      var arr=[]
      for(var i=0;i<res.data.length;i++){
        console.log(res),
        arr.push({
          id:res.data[i]._id,
          title:res.data[i].company,
          type:res.data[i].type,
          pic:res.data[i].pic,
          name:res.data[i].name,
          price:res.data[i].price,
          detail:res.data[i].describe
        })
    
        this.setData({
          eventList:arr
        })
     }
    })
    }else if(that.data.currentTab ==1){
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec"//默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command
  
      db.collection('property').where({
       type:2
      })
      .get()
    .then(res => {
      var arr=[]
      for(var i=0;i<res.data.length;i++){
        arr.push({
          id:res.data[i]._id,
          title:res.data[i].company,
          type:res.data[i].type,
          pic:res.data[i].pic,
          name:res.data[i].name,
          price:res.data[i].price,
          detail:res.data[i].describe
        })
        this.setData({
          eventList:arr
        })
     }
    })
    }else if(that.data.actIndex ==2){
      wx.cloud.init({
        env: "login-7ggsj7ve4e11a7ec"//默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
      })
      const db = wx.cloud.database()
      const _ = db.command
  
      db.collection('property').where({
       type:3
      })
      .get()
    .then(res => {
      var arr=[]
      for(var i=0;i<res.data.length;i++){
        arr.push({
          id:res.data[i]._id,
          title:res.data[i].company,
          type:res.data[i].type,
          pic:res.data[i].pic,
          name:res.data[i].name,
          price:res.data[i].price,
          detail:res.data[i].describe
        })
        this.setData({
          eventList:arr
        })
     }
    })
  }
},
  searchInput:function(e){

  }
})