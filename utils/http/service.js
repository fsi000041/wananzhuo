//service.js
const wxRequest = require('wxRequest.js');
const config = require("config.js");
// 轮播图
function getBannerList() {
  var getBusInfoUrl = config.BASE_URL + config.BANNER_URL;

  return wxRequest.wxPromise("GET", getBusInfoUrl);
}
  // 首页文章列表
function getArticleList(page) {
  var getBusInfoUrl = config.BASE_URL + "article/list/"+page+"/json";
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}
// 体系数据
function getTreeList() {
  var getBusInfoUrl = config.BASE_URL + config.TREE_URL;
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}

// 热词数据
function geHotkeyList() {
  var getBusInfoUrl = config.BASE_URL + config.hotkey_URL;
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}
// 常用网站数据
function gefriendList() {
  var getBusInfoUrl = config.BASE_URL + config.friend_URL;
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}

// 项目文章列表
function getProjectList(page,id) {
  var getBusInfoUrl = config.BASE_URL + "project/list/" + page + "/json?cid="+id;
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}
// 项目分类
function getProjectTreeList() {
  var getBusInfoUrl = config.BASE_URL + config.project_URL;
  return wxRequest.wxPromise("GET", getBusInfoUrl);
}


module.exports = {
  getBannerList,
  getArticleList,
  getTreeList,
  geHotkeyList,
  gefriendList,
  getProjectList,
  getProjectTreeList
}