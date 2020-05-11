import ajax from './ajax.js'

    
//  1获取地理位置 http://localhost:3000/position/:geohash
// var port='3000'
// let baseUrl='http://localhost:4000'
let baseUrl='/api'
export const  reqAddress =(geohash) =>ajax('/api/position',geohash)

// reqAddress()


//  2 获取我们的分类http://localhost:3000/index_category
export const  reqCategory =() =>ajax(baseUrl+'/index_category')
