不再写CSS，写的是CSS的预编译语言stylus
快 
创建style.css文件
stylus style.styl -o style.css
在style.styl 跟CSS的规则说Byebye
里面写Css样式不用加{} ： ；--> tab 缩进代替了

- 1.对定义CSS的方式进行了改变，允许我们简化CSS的书写格式，同时允许我们定义变量、定义函数来操作CSS 
  2.stylus 提供嵌套
    可以帮我们补上前面的选择器
    现在我们的css 就模块化了，从此css就有编程的感觉了
  3.&运算符
    依然使用tab缩进，但是它与上一级同级，适合于同一个元素多个类名 .active或者伪类，伪状态