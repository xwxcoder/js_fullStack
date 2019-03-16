function hongbao(total,num) {
    const arr = [];
    let restAmount = total;//余额初始化为总金额
    let restNum = num;
    
    for (let i = 0; i < num - 1; i++) {//还留一个人不发，得剩下的余额
        //平均值的两倍
        let amount = parseFloat(Math.random()*(restAmount/restNum *5 )).toFixed(2);
        restAmount -= amount;//restAmount = restAmount - amount;
        restNum--;
        arr.push(amount);
    }  
//最后一个人一定是restAmount
    arr.push(restAmount.toFixed(2));

    return arr;
}
console.log(hongbao(20,5));