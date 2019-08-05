// pages/system/system.js
const service = require('../../utils/http/service.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    treeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTreeList();
  },

  //获取体系数据 
  getTreeList() {
    service.getTreeList().then(res => {
      // res.data  j就是请求到的数据
        console.log(res.data)
        this.setData({
          treeList:res.data.data
        })
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getTreeList();
  },

})