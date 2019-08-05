//wxRequest.js
const Promise = require('es6-promise.min.js');

function wxPromise(method, url, data) {

  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: method,
      data: data,
      //在header中统一封装报文头，这样不用每个接口都写一样的报文头定义的代码
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {

        resolve(res);
      },
      fail: function (res) {
    
        reject(res);
      }
    });
  });
}


function getRequest(url, data) {
  return wxPromise("GET", url, data);
}

function postRequest(url, data) {
  return wxPromise("POST", url, data);
}

module.exports = {
  wxPromise: wxPromise,
  postRequest: postRequest,
  getRequest: getRequest,
}