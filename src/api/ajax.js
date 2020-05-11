import axios from 'axios'
// http://localhost:3000/shops?latitude=40.10038&longitude=116.36867

export default function ajax(url, data = {}, type = 'get') {
  // 封装promsise的结果 也就是我们的then(res)
  return new Promise(function (resolve, reject) {
    let myPromise

    //第一层封装封装的url请求参数 已经 区别get post 请求
    if (type == 'get') { //get 请求
      var dataStr = ''
      Object.keys(data).forEach(key => {
        //   console.log(key);
        //   console.log(data[key]);
        dataStr += key + '=' + data[key] + '&'
      })

      if (dataStr !== '') { //表示有参数
        // console.log(dataStr);
        // name=zs&age=18&
        // url=url+'?'+dataStr
        var index = dataStr.lastIndexOf('&')
        // console.log(index);
        dataStr = dataStr.substring(0, index)
        url = url + '?' + dataStr
        myPromise = axios.get(url)

      } else { //表示没有参数
        myPromise = axios.get(url)
      }




    } else { // post 请求
      axios.post(url, data)
    }
    //请求我们then的处理
    myPromise.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

  })





}
