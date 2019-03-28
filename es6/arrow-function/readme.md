箭头函数
:ES6可以使用“箭头”（=>）定义函数，注意是函数，不要使用这种方式定义类（构造器）。

语法：
   
    1.具有一个参数的简单函数
        var single = a => a
    
        single('hello, world') // 'hello, world'
    2.没有参数的需要用在箭头前加上小括号
        var log = () => {
            alert('no param')
        }
    3. 多个参数需要用到小括号，参数间逗号间隔，例如两个数字相加
        var add = (a, b) => a + b
        add(3, 8) // 11
    4. 函数体多条语句需要用到大括号
        var add = (a, b) => {
        if (typeof a == 'number' && typeof b == 'number') {
            return a + b
         } else {
            return 0
         }
        }
    5. 返回对象时需要用小括号包起来，因为大括号被占用解释为代码块了
        var getHash = arr => {
            return ({
            name: 'Jack',
            age: 33
         })
        }
　　

    6. 直接作为事件handler
        document.addEventListener('click', ev => {
         console.log(ev)
        })
　　7. 作为数组排序回调
        var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
        if (a - b > 0 ) {
            return 1
          } else {
            return -1
         }
        })
        arr // [1, 2, 3, 4, 8, 9]