# myshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).







vue-cli+webpack+vue-router+vuex+es6/es7+git+mint-ui+axios+styuls(css)+第三方插件


//移动端项目设计图给设计尺寸 (750px/640px)

320/375    ---640/750       二倍图   @2   /@3  @3  

视网膜屏幕  1个物理像素对应 2个px    更高级的oppo 1个物理像素 对应3px


git 空文件不显示 



//vue开发   
组件抽取 (公共组件一定要抽出来),
(具名插槽的基本使用:公共组件可以根据内容的不一样采用具名的形式实现公共内容不一样的组件)

// 父组件动态向子组件传递参数  v-bind进行绑定   子组件通过props 进行接收 


// vue项目请求数据 跨域 怎么进行处理   
客户端端口是8080 
服务端端口是3000/4000  

存在 跨域   
 {
   1   后端（请求头）    在请求头里面做允许 （header("Access-Control-Allow-Origin: *")） 最简单的方法 
   2  前端采用代理的形式  proxy （vue-cli采用代理的形式解决）

}




