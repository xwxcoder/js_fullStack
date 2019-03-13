let qq_number = "1213678";
let lp_name = "zwx";
// 函数表达式
/**
*@param qq type String
*@return type Bool
*@功能 判断QQ号是否合格
*@desc 只能是数字，长度五位号以上，13位以内
*/
const is_valid_qq = (qq) => {
   if (!qq) {
       return false;
   }
   if (/^[0-9]{5,13}$/.test(qq)) {
       return true;
   }else {
       return false;
    }
    // console.log(qq);
    return true;
};
console.log(is_valid_qq(qq_number));
// const is_right_name = (name) => {
//     if (!name) {
//         return false;
//     }
//     if (/^[a-z]{1,4}$/.test(name)) {
//         return true;
//     }else {
//         return false;
//     }
//      // console.log(qq);
//      return true;
//  };
// console.log(is_right_name(lp_name));

//选择了一种数据结构 数组
let enc_qq = [6,3,1,7,5,8,9,2,4],
    qq = [],
    head = 0,
    tail = 9;


 while (head < tail)   {
qq.push(enc_qq[head]);
head++;
enc_qq[head];
enc_qq[tail] = enc_qq[head];
head++;
tail++;
// 第二个数移到队尾
}

console.log(qq);