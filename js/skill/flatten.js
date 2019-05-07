// var arr=[1,2,3,[5,6],[1,4,8]];
// var newarr=arr.join(",").split(",");//转化为一维数组
// alert(Math.max.apply(null,newarr));//最大值
// alert(Math.min.apply(null,newarr));//最小值

const _ = require('lodash');
const arr1 =[99,0,33,33,[101,102],1,2];
const flattenArr1 = _.flatten(arr1);
console.log(flattenArr1);
const newarr = _.uniq(arr1);
console.log(newarr);
const users = [
    {
        user: 'fred',
        age:48
    },
    {
        user: 'fred',
        age:40
    },
    {
        user: 'barney',
        age:36
    },
    {
        user: 'barney',
        age:34
    },
]
// const sortedUser = _.sortBy(users,['user','age']);
const sortedUser = _.sortBy(users,['age','user']);
console.log(sortedUser);2