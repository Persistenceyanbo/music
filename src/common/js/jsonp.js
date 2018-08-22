import originJsonp from 'jsonp'

export default function jsonp (url, data, option) { // url带有参数，把data拼接到url上
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) { // 表示非空的时候就是成功
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : '' // 如果data有的话，那就直接把第一个&去掉。如果没有的话直接返回""
}
