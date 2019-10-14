//缓存算法
//函数 首字母大写的函数，就是一个类
function LRUCahe(title) {
//构造函数
// 类的属性
// this 是指针 ，只有指向要生成的对象，
console.log(this);
this.title = title;
}
// 加方法
LRUCahe.prototype.sayHello = function () {
  console.log('xx,${this.title}')
}
LRUCahe.prototype.buyCar = function() {
  console.log('yy');
}
//对象 实例
let cache = new LRUCahe('xx');
console.log(cache.title)
// console.log(cache.sayHello());
// console.log(cache.buyCar());
console.log(cache.__proto__ ==LRUCahe.prototype);
console.log(cache instanceof LRUCahe);