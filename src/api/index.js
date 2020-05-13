import ajax from './ajax.js'

    
//  1获取地理位置 http://localhost:3000/position/:geohash
// var port='3000'
// let baseUrl='http://localhost:4000'
let BASE_URL='/api'
export const  reqAddress =(geohash) =>ajax('/api/position/'+geohash)
// reqAddress()


//  2 获取我们的分类http://localhost:3000/index_category
export const  reqCategory =() =>ajax(BASE_URL+'/index_category')

//http://localhost:4000/shops?latitude=40.10038&longitude=116.36867
export const  reqShops =({latitude,longitude}) =>ajax('/api/shops',{latitude,longitude})



// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')
