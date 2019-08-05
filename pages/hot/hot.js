// pages/hot/hot.js
const service = require('../../utils/http/service.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchstr: "",
    searchflag: false,
    list: [],
    webList: [],
    colorArr: ["#0000FF", "#008B00", "#FFC125", "#FF6A6A", "#FF1493", "#8A2BE2", "#EE1289", "#32CD32"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.geHotkeyList();
    this.gefriendList();
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  activity_clear(e) {
    this.setData({
      searchstr: "",
    })
  },

  searchList(e) {
    this.setData({
      searchstr: e.detail.detail.value,
    })
  },


  //联网 热词数据 
  geHotkeyList() {
    const that = this;
    service.geHotkeyList().then(res => {
      // res.data  j就是请求到的数据
      console.log(res.data);
      that.setData({
        list: res.data.data
      })
    });
  },
  //获取常用网站数据 
  gefriendList() {
    service.gefriendList().then(res => {
      // res.data  j就是请求到的数据
      console.log(res.data)
      this.setData({
        webList: res.data.data
      })
    }).catch(res => {
      // res是请求失败的数据
      wx.showToast({
        title: res.errMsg,
        icon: "none",
      })
    });
  },

})