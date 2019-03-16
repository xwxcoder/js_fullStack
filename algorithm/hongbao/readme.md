如何实现红包算法 
固定的金额的红包，由若干人来抢，规则？

1. 抢到金额之和等于红包金额，不能超过，也不能少于。
2. 手枪王，0.01 至少，
3. 金额随机，随机数，公平，每个人抢到金额的概率要相同

计算过程，变量计算的本质
发钱？    total = restAmount--
resetNum-- == num 
随机一次， restAmount = restAmont-随机数
restNum-- 
最后一个人，拿最后的钱  for (i = 0; i < num -1; i++>)
每次随机，钱数是我们需要的 push 数组里，
总和,

Math 是数学对象
Math.random()
parseFloat() 解析为浮点数
类型转换 “23.1” =>23.1 字符串到数值型
parseFloat(Math.random()).toFixed(2) 产生随机并且只有两位小数
23.123.toFixed(2)
23.12
console.log(Math.floor(2.3))  //向下取整
2
console.log(Math.ceil(2.3))  //向上取整
3
console.log(Math.round(2.3))  //四舍五入取整
2
console.log(Math.round(2.7))
3

let max = 100;
let min = 0;
min + Math.floor(Math.random()*(max-min));
