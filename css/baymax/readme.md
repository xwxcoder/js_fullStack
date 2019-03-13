# 相对单位，为了自适应
  不同的移动设备
  750px 
  iPhone XR 小手机
  小米，华为 
  iPhone 大手机 Max
  小米，华为 
  vw vh 按比例分配宽/高 20% 20vh 100vh主体容器

  em 移动端少用px（甚至不用） rem   细致的每个盒子或盒子模型的大小等比例定义。
  em 是相对于自身的字体大小来比例
  10em 10*14px = 140px
  rem HTML 根元素的fontSize

  :before :after 伪元素
  没有标签，但却可以像真正的元素一样 来在页面上占位子。
  dom 文档流里不需要写这个元素，副作用，不会影响到内容的显示。
  使用css 来声明，content 属性是必需的，
  
  html 默认的字体大小是16px 
  如果没有设置， 会使用父级， 或body font-size 