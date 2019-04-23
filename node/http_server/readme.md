- MVVM
Model 数据 Page({data:{
        legends:[]
}})
View 视图
VM {{}} wx:for

- MVC 经典的WEB开发模式
Model =>SQL
View =>静态页面
Controller => 路由


- WebServer
web服务器硬件运行WebServer程序的
ip http 协议
http://127.0.0.1:3000
端口 不止一个服务
3306 MYSQL
80 Web服务
http
   .createServer(function(request,response){

   })
   .listen(3000)
   request 用户 N Web Server 一直在3000端口上伺候
   request 就能找到店，每位用户到达，触发 事件 ，调用
   createServer 回调函数。reuqest 用户身份，response ?
   响应请求 http 响应后断开
