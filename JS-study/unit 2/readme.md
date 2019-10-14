# JavaScript高级程序设计 读书笔记
 第2章 在HTML中使用JavaScript

- script 在使用的过程中 /script 不能出现在嵌入代码其中，不然浏览器加载时会产生一个错误，如果非要使用，就必须添加转义字符\ 例如
script type = "text/javascript" 
      
      function sayScipt() {
        alert("<\/script>");
      }
      /script

传统script元素是放在head元素中的，但是为了缩短浏览器在加载页面时的延迟时间，使用户得到更好的观赏体验，所以把script元素放在 /body 之前，即页面内容的后面,并且只要不存在defer 和async 属性，浏览器都会按照script 元素


- script 常用属性
 
 1.type and src 
script type = "text/javascript" src = "example.js">  script
在使用外部脚本文件时，必须指定src属性为对应的文件的URL，这个文件可以是同一个服务器上的文件，也可以是其他域的文件，但要考虑安全性

 2.defer 延迟属性
 script type = "text/javascript" defer = "defer" src = "example.js"> /script
 defer属性使得整个script脚本会被延迟到整个页面都解析完毕后再运行，所以可以放在 head元素中也无关紧要，且defer属性只适用于外部脚本文件，使用此属性时，要格外注意，现实中，浏览器执行两个以上的脚本时，不一定会按照顺序执行，所以最好只包含一个延迟脚本。 

 3.异步脚本属性 async属性
 
 script type = "text/javascript" async src ="example1.js" /script

  这个属性与defer属性类似，都用于改变处理脚本的行为，且都只适用于外部脚本文件，它的意思是告诉浏览器立即下载文件，但与defer不同，它不一定会按照顺序执行

- script 在XHTML中的用法

  XHTML代码的规则比HTML严格的多
  在CData片段中写script 
  
  <script type="text/javascript"><![CDATA[
    function compare(a, b) {
      if (a < b)
      {
        alert("A is less than B)
      }else if (a > b) {
        alert("A is greater than B")
      }else {
        alert("A is equal to B")
      }
    }
  ]]></script>

  这种方式可以适用于兼容XHTML的浏览器，在不兼容的浏览器中，只需要用JavaScript注释吧CData标记注释掉就可以了

- 当浏览器不支持script时，noscript元素就出现了，它能包含能够出现在body中的除了script元素之外的任何HTML元素
<noscript>
<p>本页面需要浏览器支持（启用）JavaScript。</p>
</noscript>