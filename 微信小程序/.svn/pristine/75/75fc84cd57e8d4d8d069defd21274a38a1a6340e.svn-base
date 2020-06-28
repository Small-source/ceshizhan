/* 公共request 方法 */
import {goLogin} from './login.js'
import HTTP from './port.js'
const app = getApp();
const SERVER = HTTP.host;
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: SERVER + url,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'token': wx.getStorageSync('token')  // 看自己是否需要
      },
      success(request) {
        if(request.data.code === 2000) {
          resolve(request.data)
        } else if (request.data.code === 1016) {
          goLogin()
            .then(()=> {
              wx.reLaunch({
                url: '/pages/index/index'
              })
            })
        } else if (request.data.code === 2525) {
          wx.navigateTo({
            url: '/pages/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
          })
        } else if (request.data.code === 2026) {
          wx.reLaunch({
            url: '/pages/login/perfectInformation'
          })
        } else {
          reject(request)
        }
      },
      fail(error) {
        reject(error.data)
      }
    })
  })
}
const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
  return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, { method: 'DELETE', data: options })
}
module.exports = {
  get,
  post,
  put,
  remove
}
