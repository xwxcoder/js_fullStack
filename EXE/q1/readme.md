1. 计算如下 box1，box2 两个盒子模型的宽高，并简要列出计算过程
```css
.box {
  width: 100px;
  height: 100px;
  padding-top: 20px;
  margin-top: 20px;
  border: 2px solid aqua;
}
.box1 {
  box-sizing: border-box;
}
```
```html
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```