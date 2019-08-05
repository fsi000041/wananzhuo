// pages/project/project.js
const service = require('../../utils/http/service.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    ArticleList: [],
    over: false,

    titles: [],
    index: 0,
    id: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getProjectList(this.data.page, this.data.id);
    this.getProjectTreeList();
    console.log(this.data.id)
  },

  //首页文章列表
  getProjectList(page, id) {
    const that = this;
    service.getProjectList(page, id).then(res => {
      console.log(res.data)

      // res.data  j就是请求到的数据
      let list = that.data.ArticleList;
      if (res.data.data.over && res.data.data.datas.lenth < 0) {
        that.setData({
          over: res.data.data.over,

        })
        wx.showToast({
          title: '到底了',
          icon: "none"
        })
      } else {
        if (that.data.page == 1) {
          list = [];

        }
        list = list.concat(res.data.data.datas);

        that.setData({
          over: res.data.data.over,
          ArticleList: list,
          page: that.data.page + 1,
          id: res.data.data.datas[0].chapterId
        })
        console.log(this.data.id)
      }
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    const that = this;
    that.setData({
      page: 1,
      id: 0,
    })

    that.getProjectList(that.data.page, that.data.id);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    const that = this;
    const over = that.data.over;

    if (!over) {
      that.getProjectList(that.data.page, that.data.id);
    } else {
      wx.showToast({
        title: '到底了',
        icon: "none"
      })
    }

  },
  // 选择下拉框属性 显示列表
  sel(e) {
    const that = this;
    that.setData({
      page: 1,
      index: e.detail.value,
      id: that.data.titles[e.detail.value].id,
      ArticleList: [],
    })
    this.getProjectList(that.data.page, that.data.id);

  },

  //获取项目分类
  getProjectTreeList() {
    service.getProjectTreeList().then(res => {
      this.setData({
        titles: res.data.data,
      })
    });
  },

  bt_item(e) {

    wx.navigateTo({
      url: "/pages/webview_activity/webview_activity?url=" + e.currentTarget.dataset.name,
    })
  }


})