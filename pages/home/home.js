// pages/home/home.js
const service = require('../../utils/http/service.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    over: false,
    page: 0,
    imgUrls: [],
    ArticleList: [],

  },

  onLoad: function() {
    this.getBannerList();
    this.getArticleList(this.data.page);
  },

  //轮播图
  getBannerList() {
    const that = this;
    service.getBannerList().then(res => {
      // res.data  j就是请求到的数据
      that.setData({
        imgUrls: res.data.data,
      })
    });
  },

  //首页文章列表
  getArticleList(page) {
    const that = this;
    service.getArticleList(page).then(res => {
      // res.data  j就是请求到的数据
      const result = this.data.ArticleList.concat(res.data.data.datas);
      that.setData({
        over: res.data.data.over,
        ArticleList: result
      })
    });
  },

  // 上拉刷新
  onPullDownRefresh() {
    this.setData({
      page: 0,
    })
    this.getArticleList(this.data.page);
    this.getBannerList();
  },
  // 上拉加载
  onReachBottom() {
    if (!this.over) {
      this.setData({
        page: page++
      })
      this.getArticleList(this.data.page)
    }
  },


  //点击轮播图 跳转
  bt_img(e) {
    wx.navigateTo({
      url: '/pages/webview_activity/webview_activity?url=' + e.currentTarget.dataset.url,

    })
  }

})