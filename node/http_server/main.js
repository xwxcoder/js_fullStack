{/*<script src="./http"></script> */}
// reuqire 就是引入一个模块，commonjs
const http = require('http');
let i = 0;

http
    .createServer(function(request,response){
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);